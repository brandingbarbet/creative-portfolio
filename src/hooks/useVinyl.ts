import { useSyncExternalStore } from 'react';
import { isAudioPlaying, subscribeAudio, toggleVinyl } from '../lib/audio';

/** Shared vinyl-player state: any button using this stays in sync. */
export function useVinyl() {
  const playing = useSyncExternalStore(subscribeAudio, isAudioPlaying, () => false);
  return { playing, toggle: toggleVinyl };
}
