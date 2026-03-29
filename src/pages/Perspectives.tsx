import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";

const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const perspectives = [
  {
    character: "Tarapada",
    tagline: "The story as movement.",
    description:
      "For Tarapada, existence is kinetic. He does not resist the warmth of Motilal Babu's household — he simply cannot be contained by it. His freedom is not a choice; it is a condition. Every bond offered to him is a tether he will inevitably slip. The river calls, and he answers. His story is not one of rejection but of perpetual departure.",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    character: "Charushashi",
    tagline: "The story as becoming.",
    description:
      "Charushashi encounters Tarapada at the threshold of her own transformation — from girl to woman, from daughter to wife. In him she sees not a husband but a possibility: someone untethered by convention. Her attachment is less romantic than existential. When he vanishes, what disappears is not a person but the version of herself she was becoming in his presence.",
    color: "from-rose-500/20 to-pink-500/10",
  },
  {
    character: "Motilal Babu",
    tagline: "The story as order.",
    description:
      "Motilal Babu is the architect of belonging. He sees Tarapada and immediately begins building: a role in the family, a match for his daughter, a future son-in-law. His narrative is one of acquisition and arrangement. When Tarapada leaves, the architecture collapses — not because the boy was essential, but because the plan was always more real to Motilal than the person.",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    character: "Sonamoni",
    tagline: "The story as observation.",
    description:
      "The youngest witness. Sonamoni watches without agenda, plays without contract. Her perspective is the purest — and therefore the most devastating in its simplicity. She does not try to keep Tarapada. She does not build narratives around him. She simply notices his presence and then, with the quiet resilience of childhood, notices his absence.",
    color: "from-sky-500/20 to-blue-500/10",
  },
  {
    character: "Conclusion",
    tagline: "The convergence.",
    description:
      "Four perspectives, one timeline, zero agreement. Tagore's genius in 'Atithi' is not in the plot — a boy comes, a boy leaves — but in the revelation that coexistence does not produce co-understanding. Each character's story is complete, internally consistent, and utterly irreconcilable with the others. A shared timeline does not produce a shared story.",
    color: "from-violet-500/20 to-purple-500/10",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const Perspectives = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (dir: number) => {
    setPage(([p]) => {
      const next = p + dir;
      if (next < 0 || next >= perspectives.length) return [p, 0];
      return [next, dir];
    });
  };

  const current = perspectives[page];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Home button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Home className="w-4 h-4 text-foreground" />
      </Link>

      {/* Page indicator */}
      <div className="fixed top-6 right-6 z-50 text-sm text-muted-foreground font-body">
        {page + 1} / {perspectives.length}
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl min-h-[60vh] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <div className={`glass rounded-3xl p-10 md:p-14 bg-gradient-to-br ${current.color}`}>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-4">
                {current.character}
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                {current.tagline}
              </h2>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8">
                {current.description}
              </p>
              <AudioPlayer
                src={AUDIO_URL}
                label={
                  current.character === "Conclusion"
                    ? "Narrated by Mallikarjun"
                    : `Listen to ${current.character}'s perspective`
                }
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-center gap-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          disabled={page === 0}
          className="w-12 h-12 rounded-full glass flex items-center justify-center disabled:opacity-30 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          disabled={page === perspectives.length - 1}
          className="w-12 h-12 rounded-full glass flex items-center justify-center disabled:opacity-30 transition-opacity"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </motion.button>
      </div>
    </div>
  );
};

export default Perspectives;
