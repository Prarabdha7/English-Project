import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  src: string;
  label?: string;
}

const AudioPlayer = ({ src, label }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex items-center gap-3">
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setPlaying(false)}
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
