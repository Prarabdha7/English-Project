import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import Perspectives from "./pages/Perspectives";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <SmoothScroll>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/perspectives" element={<Perspectives />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SmoothScroll>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
