import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Enquire from "./pages/Enquire";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import NotFound from "./pages/NotFound";
import PrivacyNotice from "./pages/PrivacyNotice";
import Products from "./pages/Products";
import SealOfGenuineness from "./pages/SealOfGenuineness";
import TermsOfUse from "./pages/TermsOfUse";
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
  const [location] = useLocation();
  const pageKey = location.split("#")[0];
  return <ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><ScrollToTop /><Switch key={pageKey}><Route path="/" component={Home} /><Route path="/products" component={Products} /><Route path="/who-we-serve" component={WhoWeServe} /><Route path="/about" component={About} /><Route path="/enquire" component={Enquire} /><Route path="/instructions" component={Instructions} /><Route path="/seal-of-genuineness" component={SealOfGenuineness} /><Route path="/privacy-notice" component={PrivacyNotice} /><Route path="/terms-of-use" component={TermsOfUse} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></TooltipProvider></ThemeProvider>;
}
