import { motion } from "framer-motion";
import AudioPlayer from "./AudioPlayer";

const characters = [
  {
    character: "Tarapada",
    tagline: "The story as movement.",
    description:
      "For Tarapada, existence is kinetic. He does not resist the warmth of Motilal Babu's household, but he simply cannot be contained by it. His freedom is not a choice; it is a condition. Every bond offered to him is a tether he will inevitably slip. The river calls, and he answers.",
    side: "left" as const,
    audioSrc: "./audio/Shourya.mp3",
  },
  {
    character: "Charushashi",
    tagline: "The story as becoming.",
    description:
      "Charushashi encounters Tarapada at the threshold of her own transformation from a girl to a woman. In him she sees someone untethered by convention. When he vanishes, a lot of what brings chaos to her ordered life disappears with him.",
    side: "right" as const,
    audioSrc: "./audio/Soumali.mp3",
  },
  {
    character: "Motilal Babu",
    tagline: "The story as order.",
    description:
      "Motilal Babu is the architect of belonging. He is the one who invites him to their family and gives him a place within it. When Tarapada leaves, the architecture collapses suddenly and silently and leaves a mess of his plans behind.",
    side: "left" as const,
    audioSrc: "./audio/Reeju.mp3",
  },
  {
    character: "Sonamoni",
    tagline: "The story as observation.",
    description:
      "The youngest witness. Sonamoni watches without agenda, plays without contract. She does not try to keep Tarapada. She simply notices his presence and then, with the quiet resilience of childhood, notices his absence.",
    side: "right" as const,
    audioSrc: "./audio/Rishika.mp3",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground mb-20 text-center"
        >
          Shifting Narratives
        </motion.h2>

        <div className="relative">
          {/* Central glowing line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent hidden md:block" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block" style={{ boxShadow: "0 0 15px 2px hsl(var(--glow) / 0.3)" }} />

          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {characters.map((char, i) => (
              <motion.div
                key={char.character}
                initial={{ opacity: 0, x: char.side === "left" ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                className={`relative flex ${char.side === "right" ? "md:justify-end" : "md:justify-start"} pl-12 md:pl-0`}
              >
                {/* Node dot */}
                <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full bg-foreground/30 -translate-x-1/2 ring-4 ring-background z-10" style={{ boxShadow: "0 0 12px hsl(var(--glow) / 0.5)" }} />

                <div className={`w-full md:w-[45%] ${char.side === "right" ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}>
                  <div className="glass rounded-2xl p-8 hover:glow-border transition-shadow duration-300">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-2">
                      {String(i + 1).padStart(2, "0")} — {char.character}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                      {char.tagline}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-6">
                      {char.description}
                    </p>
                    {/* AUDIO PLAYER UPDATED HERE */}
                    <AudioPlayer
                      src={char.audioSrc}
                      label={`Listen to ${char.character}'s perspective`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;