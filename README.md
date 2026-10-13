# Creative Portfolio — GitHub + Vercel + Supabase

This is the static-hosting version of the original PHP portfolio project. It keeps the supplied custom hero artwork and starter portfolio content, but replaces PHP/file-based storage with:

- **GitHub** for source control
- **Vercel** for free static deployment and automatic deploys on Git pushes
- **Supabase Auth** for admin email/password login
- **Supabase Postgres** for saving the entire editable portfolio configuration
- **Supabase Storage** for portrait, project, and gallery image uploads

The public site works as a static site. The admin panel is available at `/admin` and provides editable fields for site settings, hero text, navigation, sections, projects, and images. Add/remove/reorder controls are included. Supported section types: Text, Cards/Services, Projects, Contact, Image + Text, and Image Gallery.

## 1. Create your Supabase project

1. Create a project at <https://supabase.com/> using the free plan.
2. Open **SQL Editor** in the Supabase dashboard.
3. Open `supabase/setup.sql` from this project, paste the complete SQL into the editor, and run it.
4. Open **Project Settings → API** (or the API Keys page) and copy:
   - Project URL
   - The public `anon` / publishable key
5. Edit `config.js` in this project and replace the two placeholder values:

   ```js
   window.PORTFOLIO_CONFIG = {
     SUPABASE_URL: "https://YOUR-PROJECT-REF.supabase.co",
     SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY"
   };
   ```

   The anon/publishable key is intended for frontend use. **Never put a `service_role` or secret key in `config.js`, GitHub, or Vercel frontend code.** Row-level security (RLS) is what protects content editing and uploads.

## 2. Create the admin login and allowlist it

1. In Supabase, open **Authentication → Users**.
2. Create a user with the email and password you want to use for `/admin`. If email confirmation is enabled, confirm the user in the dashboard first.
3. Copy that user's **UUID** from the Users table.
4. In **SQL Editor**, run the following statement after replacing the example UUID with your user's UUID:

   ```sql
   insert into public.portfolio_admins (user_id)
   values ('00000000-0000-0000-0000-000000000000');
   ```

5. In **Authentication → Settings / Sign In**, disable public user sign-ups if you do not need them. Create additional admins manually and add only their UUIDs to `portfolio_admins`.

Only a user in `portfolio_admins` can save portfolio content or upload/delete images. Do not add users you do not trust.

## 3. Push the project to GitHub

1. Extract this ZIP on your computer.
2. Create a new **private or public GitHub repository**.
3. Put the contents of this folder at the repository root (so `index.html`, `app.js`, `admin.html`, `config.js`, and `vercel.json` are at the top level).
4. Commit and push the files. `config.js` contains only the public Supabase URL and anon/publishable key; never commit a service-role key or admin password.

Example commands, if you use Git locally:

```bash
git init
git add .
git commit -m "Set up portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Open <https://vercel.com/> and choose **Add New → Project**.
2. Import the GitHub repository and authorize access if requested.
3. Choose **Other** / static site if asked for a framework. There is no build step: leave the build command empty and serve the repository root.
4. Deploy. Vercel will assign a URL such as `your-project.vercel.app`.
5. Open the public URL, then open `https://your-project.vercel.app/admin` and sign in with the Supabase admin user.
6. If you add a custom domain later, add it in Vercel and keep your Supabase Auth site URL / redirect settings updated to the live domain.

Vercel connects to GitHub after import; future pushes to the connected branch trigger deployments automatically. You do not need to create a GitHub secret token manually for the normal Vercel Git integration.

## 5. First-time content save

- Before the first save, the site displays `default-content.json` as starter content.
- Sign in to `/admin`, review site settings and sample projects, and press **Save all changes**. This writes the content to Supabase so future edits are persistent.
- Refresh the public page to review changes.
- Use **Upload image** beside the hero portrait or project image to upload to the public `portfolio-assets` bucket. The uploaded URL is placed in the editor automatically; press **Save all changes** to publish it.
- You can also paste a public image URL manually.

## Admin capabilities

- Change brand text, browser title, subtitle, hero headline, hero annotation labels, site description, colors, CTA, contact details, social links, and footer.
- Add, rename, remove, and reorder navbar links.
- Add, edit, reorder, hide/show, and remove sections; choose a section type and match nav links to IDs such as `#about`.
- Edit projects, links, categories, descriptions, and images; add, remove, or reorder projects.
- Add gallery sections and edit each gallery image/caption.

## Free-plan notes and troubleshooting

- Supabase and Vercel free-plan quotas and terms can change. Check their current dashboards if you approach usage limits.
- If the admin says **could not verify admin permissions**, make sure `supabase/setup.sql` ran successfully and the signed-in Auth user's UUID exists in `public.portfolio_admins`.
- If content does not save, check the SQL policies and ensure the project URL/key in `config.js` belong to the same Supabase project.
- If uploads fail, confirm the `portfolio-assets` bucket and storage policies exist (the supplied SQL creates them), and keep images at 10 MB or smaller.
- If the public page shows the starter content after saving, check the browser console for Supabase errors and confirm the correct Supabase project is configured.
- Never expose passwords, service-role keys, or private tokens in frontend files.

## Project structure

- `index.html`, `styles.css`, `app.js` — public portfolio
- `hero.html` — static version of the supplied hero artwork, with editable portrait/headline/annotation text passed from the portfolio settings
- `admin.html`, `admin.css`, `admin.js` — protected admin editor
- `default-content.json` — starter content shown until the first successful save
- `config.js` — public Supabase project URL and anon/publishable key placeholders
- `supabase/setup.sql` — database, admin allowlist, RLS, and storage policies
- `reference-media-kit/` and `assets/reference-hero.html` — original supplied references preserved for later use
