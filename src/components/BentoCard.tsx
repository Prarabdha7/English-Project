import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface BentoCardProps {
  name: string;
  avatar: string;
  role?: string;
  className?: string;
}

const BentoCard = ({ name, avatar, role, className = "" }: BentoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.02 }}
      className={`glass rounded-2xl p-6 cursor-default group hover:glow-border transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-foreground/10"
          loading="lazy"
          width={56}
          height={56}
        />
        <div>
          <h3 className="font-display text-xl text-foreground">{name}</h3>
          {role && <p className="text-sm text-muted-foreground font-body">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoCard;
