/**
 * Web Audio API Lo-Fi Synth for The 1975 Vinyl Record Player
 * Self-contained, zero external network assets or MP3 dependencies.
 */

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let loopTimeout: number | null = null;

const CHORDS = [
  // Fmaj7
  [174.61, 220.0, 261.63, 329.63],
  // G
  [196.0, 246.94, 293.66, 392.0],
  // Em7
  [164.81, 196.0, 246.94, 293.66],
  // Am7
  [220.0, 261.63, 329.63, 392.0],
];

export function toggleVinylAudio(onStateChange?: (playing: boolean) => void) {
  if (isPlaying) {
    stopVinylAudio();
    if (onStateChange) onStateChange(false);
    return false;
  } else {
    startVinylAudio();
    if (onStateChange) onStateChange(true);
    return true;
  }
}

export function isAudioPlaying(): boolean {
  return isPlaying;
}

export function startVinylAudio() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;
    let chordIdx = 0;

    function playChord() {
      if (!isPlaying || !audioCtx) return;

      const chord = CHORDS[chordIdx % CHORDS.length];
      chordIdx++;

      const now = audioCtx.currentTime;

      // Master warm gain
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.08, now);
      masterGain.connect(audioCtx.destination);

      // Low pass filter for warm vinyl aesthetic
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, now);
      filter.connect(masterGain);

      // Soft arpeggiated notes
      chord.forEach((freq, i) => {
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        noteGain.gain.setValueAtTime(0.001, now + i * 0.12);
        noteGain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.12 + 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(noteGain);
        noteGain.connect(filter);

        osc.start(now + i * 0.12);
        osc.stop(now + 2.0);
      });

      loopTimeout = window.setTimeout(playChord, 1750);
    }

    playChord();
  } catch (err) {
    console.warn('Web Audio could not be initialized:', err);
    isPlaying = false;
  }
}

export function stopVinylAudio() {
  isPlaying = false;
  if (loopTimeout) {
    window.clearTimeout(loopTimeout);
    loopTimeout = null;
  }
  if (audioCtx && audioCtx.state === 'running') {
    audioCtx.suspend();
  }
}
