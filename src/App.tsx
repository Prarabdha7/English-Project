import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalAudioProvider } from "@/contexts/AudioContext";
import SmoothScroll from "@/components/SmoothScroll";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <GlobalAudioProvider>
        <TooltipProvider>
          <SmoothScroll>
            <AmbientBackground />
            <Navbar />
            <Index />
          </SmoothScroll>
        </TooltipProvider>
      </GlobalAudioProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
