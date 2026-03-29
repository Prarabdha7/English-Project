import { motion } from "framer-motion";
import AudioPlayer from "./AudioPlayer";

const AUDIO_URL = "./audio/Mallikarjun.mp3";

const Convergence = () => {
  return (
    <section id="convergence" className="py-32 px-6 relative">
      {/* Ambient glow specific to this section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full bg-[radial-gradient(ellipse,hsl(var(--glow)/0.08),transparent_70%)]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-6">
            05 — Convergence
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">
            The convergence.
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-xl mx-auto mb-10">
            The final section cements all the parallel events into a single timeline. It builds on each character and their experiences, but also results in something that is greater than the sum of its parts. This happens simply by the virtue of completing the missing factor of each narrative by bringing them together.
          </p>
          <div className="flex justify-center">
            <AudioPlayer src={AUDIO_URL} label="Narrated by Mallikarjun" />
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default Convergence;
