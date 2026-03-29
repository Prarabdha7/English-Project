import { useRef, useState, useEffect, useId } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useGlobalAudio } from "@/contexts/AudioContext";

interface AudioPlayerProps {
  src: string;
  label?: string;
}

const AudioPlayer = ({ src, label }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const id = useId();
  const { play, stop, currentlyPlaying } = useGlobalAudio();

  // Sync local state when another player takes over
  useEffect(() => {
    if (currentlyPlaying !== id && playing) {
      setPlaying(false);
    }
  }, [currentlyPlaying, id, playing]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      stop(id);
      audioRef.current.pause();
      setPlaying(false);
    } else {
      play(id, audioRef.current);
      setPlaying(true);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => { setPlaying(false); stop(id); }}
        preload="none"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-border transition-shadow"
      >
        {playing ? (
          <Pause className="w-5 h-5 text-foreground" />
        ) : (
          <Play className="w-5 h-5 text-foreground ml-0.5" />
        )}
      </motion.button>
      {label && (
        <span className="text-sm text-muted-foreground font-body">{label}</span>
      )}
    </div>
  );
};

export default AudioPlayer;
