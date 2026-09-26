import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Enquire from "./pages/Enquire";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import WhoWeServe from "./pages/WhoWeServe";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    // don't fight an in-page hash scroll (e.g. #what-we-do, #products)
    if (location.includes("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    // re-assert after the new page's images/layout settle, in case they shift scroll position
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior }));
    });
  }, [location]);
  return null;
}

export default function App() {
  return <ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><ScrollToTop /><Switch><Route path="/" component={Home} /><Route path="/products" component={Products} /><Route path="/who-we-serve" component={WhoWeServe} /><Route path="/about" component={About} /><Route path="/enquire" component={Enquire} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></TooltipProvider></ThemeProvider>;
}
