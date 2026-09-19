import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Enquire from "./pages/Enquire";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import WhoWeServe from "./pages/WhoWeServe";

export default function App() {
  return <ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Switch><Route path="/" component={Home} /><Route path="/products" component={Products} /><Route path="/who-we-serve" component={WhoWeServe} /><Route path="/about" component={About} /><Route path="/enquire" component={Enquire} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></TooltipProvider></ThemeProvider>;
}
