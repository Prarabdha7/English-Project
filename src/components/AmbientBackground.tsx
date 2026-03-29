import { useTheme } from "./ThemeProvider";

const AmbientBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {theme === "dark" ? (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,hsl(240_80%_30%/0.15),transparent_70%)] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,hsl(280_70%_25%/0.12),transparent_70%)] animate-[drift_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[40%] left-[50%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,hsl(200_80%_20%/0.1),transparent_70%)] animate-[drift_18s_ease-in-out_infinite_2s]" />
        </>
      ) : (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,hsl(240_70%_85%/0.3),transparent_70%)] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,hsl(320_60%_88%/0.25),transparent_70%)] animate-[drift_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[40%] left-[50%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,hsl(180_50%_85%/0.2),transparent_70%)] animate-[drift_18s_ease-in-out_infinite_2s]" />
        </>
      )}
    </div>
  );
};

export default AmbientBackground;
