import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();
  const close = () => setMobileOpen(false);

  const goToWhatWeDo = (e: React.MouseEvent) => {
    close();
    if (location === "/") {
      e.preventDefault();
      document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate home, then scroll once the section exists
      e.preventDefault();
      navigate("/");
      requestAnimationFrame(() => {
        setTimeout(() => document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" }), 60);
      });
    }
  };

  return (
    <header className="nav-wrap hero-pill-nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="BONNE TRINITY home">
          <span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-wordmark_7f2a91c3.png" alt="BONNE TRINITY" /></span>
        </Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          <a href="/#what-we-do" onClick={goToWhatWeDo}>What we do</a>
          <Link href="/products" onClick={close}>Products</Link>
          <Link href="/who-we-serve" onClick={close}>Who we serve</Link>
          <Link href="/about" onClick={close}>About us</Link>
          <span className="nav-actions"><a className="nav-call" href="tel:+919811643325">Call Now</a><a className="nav-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer">WhatsApp</a></span>
        </nav>
      </div>
    </header>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell inner-page-shell page-transition">
    <SiteHeader />
    {children}
    <footer className="footer inner-footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-wordmark_7f2a91c3.png" alt="BONNE TRINITY" /></span></div><p>Care · Comfort · Smiles.</p><a href="https://www.linkedin.com/company/bonne-trinity/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BONNE TRINITY. All rights reserved.</span><span>53A/11 Rama Road, Kirti Nagar, New Delhi — 110015</span><span>GSTIN 07ABGFB9745E1ZB</span></div></footer>
  </div>;
}

export const products = [
  { name: "Orthodontic soother nipple", category: "Baby care", meta: "3+ months · Food-grade silicone", image: "/assets/bonne-nipple_9124056e.jpeg", tone: "coral", spec: "Food-grade silicone / BPA-free formats", moq: "MOQ from 1,000 units", export: "India + export enquiries" },
  { name: "Baby toothbrush with cover", category: "Baby care", meta: "12+ months · BPA-free", image: "/assets/toothbrush_08840fc6.jpeg", tone: "mint", spec: "Soft-touch handle / covered brush head", moq: "MOQ from 1,000 units", export: "India + export enquiries" },
  { name: "Adult care pad range", category: "Personal hygiene", meta: "Absorbent formats · Private label", image: "/assets/bonne-pad_c54c9b7c.jpeg", tone: "yellow", spec: "Absorbent non-woven and hygiene formats", moq: "MOQ from 5,000 units", export: "Export documentation support" },
  { name: "Care pad range · back", category: "Personal hygiene", meta: "Packaging and specification view", image: "/assets/bonne-pad-back_45efe2ce.jpeg", tone: "sky", spec: "Private-label pack configuration", moq: "MOQ from 5,000 units", export: "Export documentation support" },
];

export const PageIntro = ({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) => <section className="page-intro"><div className="container page-intro-grid"><div className="section-label">{eyebrow}</div><div><h1>{title}</h1><p>{text}</p></div></div></section>;

export const CTASection = ({ title = "Have a brief in mind?" }: { title?: string }) => <section className="page-cta"><div className="container page-cta-inner"><div><span className="section-label">LET'S MAKE IT REAL</span><h2>{title}</h2></div><Link className="button button-dark" href="/enquire">Start a conversation <ArrowUpRight size={17} /></Link></div></section>;
