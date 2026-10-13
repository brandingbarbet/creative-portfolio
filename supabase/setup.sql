-- Run this in Supabase Dashboard > SQL Editor.
-- Then create your admin user in Authentication > Users and insert that user's UUID
-- into public.portfolio_admins using the separate statement in README.md.

create extension if not exists pgcrypto;

create table if not exists public.portfolio_content (
  id text primary key default 'main' check (id = 'main'),
  content jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.portfolio_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;
alter table public.portfolio_admins enable row level security;

grant select on public.portfolio_content to anon, authenticated;
grant insert, update on public.portfolio_content to authenticated;
grant select on public.portfolio_admins to authenticated;

create or replace function public.is_portfolio_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.portfolio_admins a
    where a.user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_portfolio_admin() from public;
grant execute on function public.is_portfolio_admin() to anon, authenticated;

drop policy if exists "Public can read portfolio content" on public.portfolio_content;
create policy "Public can read portfolio content"
  on public.portfolio_content for select to anon, authenticated using (true);

drop policy if exists "Admins can insert portfolio content" on public.portfolio_content;
create policy "Admins can insert portfolio content"
  on public.portfolio_content for insert to authenticated
  with check (id = 'main' and public.is_portfolio_admin());

drop policy if exists "Admins can update portfolio content" on public.portfolio_content;
create policy "Admins can update portfolio content"
  on public.portfolio_content for update to authenticated
  using (public.is_portfolio_admin()) with check (id = 'main' and public.is_portfolio_admin());

-- No client-side user can add themselves to portfolio_admins. Manage this table only
-- through the Supabase dashboard / SQL editor.
drop policy if exists "Admins can read their own admin record" on public.portfolio_admins;
create policy "Admins can read their own admin record"
  on public.portfolio_admins for select to authenticated using (user_id = (select auth.uid()));

-- Public image bucket. Admin-only writes are enforced by RLS below.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('portfolio-assets', 'portfolio-assets', true, 10485760,
        array['image/jpeg','image/png','image/webp','image/gif','image/avif','image/svg+xml'])
on conflict (id) do update set public = true, file_size_limit = 10485760,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view portfolio images" on storage.objects;
create policy "Public can view portfolio images"
  on storage.objects for select to public using (bucket_id = 'portfolio-assets');

drop policy if exists "Portfolio admins can upload images" on storage.objects;
create policy "Portfolio admins can upload images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'portfolio-assets' and public.is_portfolio_admin());

drop policy if exists "Portfolio admins can update images" on storage.objects;
create policy "Portfolio admins can update images"
  on storage.objects for update to authenticated
  using (bucket_id = 'portfolio-assets' and public.is_portfolio_admin())
  with check (bucket_id = 'portfolio-assets' and public.is_portfolio_admin());

drop policy if exists "Portfolio admins can delete images" on storage.objects;
create policy "Portfolio admins can delete images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'portfolio-assets' and public.is_portfolio_admin());
