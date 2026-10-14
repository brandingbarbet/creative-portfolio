/**
 * Web Audio lo-fi synth for the "The 1975" vinyl player.
 * Self-contained: no MP3s or network assets. Exposes a tiny external store so
 * every vinyl button in the app stays in sync (see hooks/useVinyl.ts).
 */

const CHORDS = [
  [174.61, 220.0, 261.63, 329.63], // Fmaj7
  [196.0, 246.94, 293.66, 392.0], // G
  [164.81, 196.0, 246.94, 293.66], // Em7
  [220.0, 261.63, 329.63, 392.0], // Am7
];

let ctx: AudioContext | null = null;
let playing = false;
let timer: number | null = null;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

export const subscribeAudio = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};
export const isAudioPlaying = () => playing;

function playChord(index: number) {
  if (!playing || !ctx) return;
  const audio = ctx;
  const now = audio.currentTime;

  const master = audio.createGain();
  master.gain.setValueAtTime(0.08, now);
  master.connect(audio.destination);

  const filter = audio.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(950, now);
  filter.connect(master);

  CHORDS[index % CHORDS.length].forEach((freq, i) => {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const t = now + i * 0.12;
    osc.type = i % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.exponentialRampToValueAtTime(0.18, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
    osc.connect(gain);
    gain.connect(filter);
    osc.start(t);
    osc.stop(now + 2.0);
    // free the nodes once the note is done
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  });

  timer = window.setTimeout(() => playChord(index + 1), 1750);
}

export function startVinyl() {
  if (playing) return;
  try {
    if (!ctx) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new Ctor();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    playing = true;
    emit();
    playChord(0);
  } catch (err) {
    console.warn('Web Audio could not be initialised:', err);
    playing = false;
    emit();
  }
}

export function stopVinyl() {
  playing = false;
  if (timer !== null) {
    window.clearTimeout(timer);
    timer = null;
  }
  if (ctx && ctx.state === 'running') void ctx.suspend();
  emit();
}

export const toggleVinyl = () => (playing ? stopVinyl() : startVinyl());
