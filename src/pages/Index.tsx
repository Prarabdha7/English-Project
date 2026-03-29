import { motion } from "framer-motion";
import tagoreHero from "@/assets/tagore-hero.jpg";
import AudioPlayer from "@/components/AudioPlayer";
import BentoCard from "@/components/BentoCard";
import Timeline from "@/components/Timeline";
import Convergence from "@/components/Convergence";

const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const teamMembers = [
  { name: "Prarabdha", role: "Narrator & Researcher", avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Shourya", role: "Writer & Analyst", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Soumali", role: "Creative Director", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Reeju", role: "Visual Designer", avatar: "https://i.pravatar.cc/150?img=33" },
  { name: "Rishika", role: "Editor & Curator", avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Mallikarjun", role: "Lead Narrator", avatar: "https://i.pravatar.cc/150?img=53" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tagoreHero}
            alt="Rabindranath Tagore vintage portrait"
            className="w-full h-full object-cover opacity-40 dark:opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="font-display text-6xl md:text-8xl text-foreground mb-6"
          >
            Atithi: Fractured Timelines
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto"
          >
            A modern exploration of Rabindranath Tagore&apos;s classic.
            <br />
            <span className="text-foreground font-medium italic">
              A shared timeline does not produce a shared story.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Premise */}
      <section id="premise" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-5xl text-foreground">
              The Premise
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body text-lg leading-relaxed">
              In Tagore&apos;s &ldquo;Atithi,&rdquo; a wandering boy named Tarapada arrives at the household of Motilal Babu,
              a prosperous village patriarch. He captivates every member of the family — the patriarch who sees in him a
              son, the young daughter Charushashi who finds a companion, and the child Sonamoni who gains a playmate.
              Yet Tarapada belongs to none of them. He is the guest who cannot be kept.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground font-body text-lg leading-relaxed">
              This project fractures the narrative into its constituent perspectives. Each character inhabits the same
              timeline but experiences a fundamentally different story. Their emotional truths are irreconcilable — and
              that is precisely Tagore&apos;s point.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <AudioPlayer src={AUDIO_URL} label="Listen to the introduction — narrated by Prarabdha" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Convergence */}
      <Convergence />

      {/* Team Bento Grid */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-foreground mb-16 text-center"
          >
            The Team
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} variants={fadeUp} custom={i}>
                <BentoCard
                  name={member.name}
                  avatar={member.avatar}
                  role={member.role}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
