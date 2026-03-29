import { createContext, useContext, useRef, useCallback, useState } from "react";

interface AudioContextType {
  play: (id: string, audioEl: HTMLAudioElement) => void;
  stop: (id: string) => void;
  currentlyPlaying: string | null;
}

const AudioCtx = createContext<AudioContextType>({
  play: () => {},
  stop: () => {},
  currentlyPlaying: null,
});

export const useGlobalAudio = () => useContext(AudioCtx);

export const GlobalAudioProvider = ({ children }: { children: React.ReactNode }) => {
  const activeRef = useRef<{ id: string; el: HTMLAudioElement } | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const play = useCallback((id: string, audioEl: HTMLAudioElement) => {
    if (activeRef.current && activeRef.current.id !== id) {
      activeRef.current.el.pause();
      activeRef.current.el.currentTime = 0;
    }
    activeRef.current = { id, el: audioEl };
    setCurrentlyPlaying(id);
    audioEl.play();
  }, []);

  const stop = useCallback((id: string) => {
    if (activeRef.current?.id === id) {
      activeRef.current.el.pause();
      activeRef.current = null;
      setCurrentlyPlaying(null);
    }
  }, []);

  return (
    <AudioCtx.Provider value={{ play, stop, currentlyPlaying }}>
      {children}
    </AudioCtx.Provider>
  );
};
