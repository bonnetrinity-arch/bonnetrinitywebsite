import { ReactNode, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);
  return <div className="site-shell inner-page-shell">
    <div className="topline"><div className="container topline-inner"><span>Material solutions for better care.</span><div className="topline-contact"><a href="mailto:care@bonnetrinity.com">care@bonnetrinity.com</a><span className="topline-dot" /><a href="tel:+919811643325">+91 98116 43325</a></div></div></div>
    <header className="inner-nav"><div className="container nav-inner">
      <a className="brand" href="/" aria-label="BONNE TRINITY home"><span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-logo-transparent_6a9211c0.png" alt="BONNE TRINITY" /></span></a>
      <button className="mobile-toggle inner-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      <nav className={mobileOpen ? "nav-links open" : "nav-links"}><a href="/products" onClick={close}>Products</a><a href="/who-we-serve" onClick={close}>Who we serve</a><a href="/about" onClick={close}>About us</a><a className="nav-cta" href="/enquire" onClick={close}>Start a conversation <ArrowUpRight size={16} /></a></nav>
    </div></header>
    {children}
    <footer className="footer inner-footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-logo-transparent_6a9211c0.png" alt="BONNE TRINITY" /></span></div><p>Care · Comfort · Smiles.</p><a href="https://www.linkedin.com/company/bonne-trinity/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BONNE TRINITY. All rights reserved.</span><span>53A/11 Rama Road, Kirti Nagar, New Delhi — 110015</span><span>GSTIN 07ABGFB9745E1ZB</span></div></footer>
  </div>;
}

export const products = [
  { name: "Orthodontic soother nipple", category: "Baby care", meta: "3+ months · Food-grade silicone", image: "/assets/bonne-nipple_9124056e.jpeg", tone: "coral", spec: "Food-grade silicone / BPA-free formats", moq: "MOQ from 1,000 units", export: "India + export enquiries" },
  { name: "Baby toothbrush with cover", category: "Baby care", meta: "12+ months · BPA-free", image: "/assets/toothbrush_08840fc6.jpeg", tone: "mint", spec: "Soft-touch handle / covered brush head", moq: "MOQ from 1,000 units", export: "India + export enquiries" },
  { name: "Adult care pad range", category: "Personal hygiene", meta: "Absorbent formats · Private label", image: "/assets/bonne-pad_c54c9b7c.jpeg", tone: "yellow", spec: "Absorbent non-woven and hygiene formats", moq: "MOQ from 5,000 units", export: "Export documentation support" },
  { name: "Care pad range · back", category: "Personal hygiene", meta: "Packaging and specification view", image: "/assets/bonne-pad-back_45efe2ce.jpeg", tone: "sky", spec: "Private-label pack configuration", moq: "MOQ from 5,000 units", export: "Export documentation support" },
  { name: "Sipper bottle collection", category: "Material solutions", meta: "Bottle and packaging formats", image: "/assets/sipper-actual-1_865198ae.jpeg", tone: "lavender", spec: "PP / PET bottle formats", moq: "MOQ from 2,000 units", export: "International supply discussions" },
  { name: "Sipper box packaging", category: "Material solutions", meta: "Retail-ready presentation", image: "/assets/sipper-box-2_4aeac308.jpeg", tone: "mint", spec: "Retail-ready packaging format", moq: "MOQ from 2,000 units", export: "International supply discussions" },
];

export const PageIntro = ({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) => <section className="page-intro"><div className="container page-intro-grid"><div className="section-label">{eyebrow}</div><div><h1>{title}</h1><p>{text}</p></div></div></section>;

export const CTASection = ({ title = "Have a brief in mind?" }: { title?: string }) => <section className="page-cta"><div className="container page-cta-inner"><div><span className="section-label">LET'S MAKE IT REAL</span><h2>{title}</h2></div><a className="button button-dark" href="/enquire">Start a conversation <ArrowUpRight size={17} /></a></div></section>;
