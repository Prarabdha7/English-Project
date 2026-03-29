import { useTheme } from "./ThemeProvider";

const AmbientBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {theme === "dark" ? (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,hsl(260_90%_40%/0.22),transparent_65%)] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,hsl(320_80%_35%/0.18),transparent_65%)] animate-[drift_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[30%] left-[55%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle,hsl(190_90%_35%/0.16),transparent_65%)] animate-[drift_18s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[60%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[radial-gradient(circle,hsl(30_90%_45%/0.1),transparent_65%)] animate-[drift_22s_ease-in-out_infinite_4s]" />
        </>
      ) : (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,hsl(260_80%_75%/0.4),transparent_65%)] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,hsl(340_75%_78%/0.35),transparent_65%)] animate-[drift_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[30%] left-[55%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle,hsl(180_70%_72%/0.3),transparent_65%)] animate-[drift_18s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[60%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[radial-gradient(circle,hsl(45_85%_70%/0.25),transparent_65%)] animate-[drift_22s_ease-in-out_infinite_4s]" />
        </>
      )}
    </div>
  );
};

export default AmbientBackground;
