import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();
  const close = () => setMobileOpen(false);

  const goHome = (e: React.MouseEvent) => {
    close();
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    // else: let the Link navigate normally to "/", App.tsx's ScrollToTop handles landing at top
  };

  const goToSection = (id: string) => (e: React.MouseEvent) => {
    close();
    if (location === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate home, then scroll once the section exists
      e.preventDefault();
      navigate("/");
      requestAnimationFrame(() => {
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
      });
    }
  };

  const sectionLinks = [
    { id: "about", label: "Who We Are" },
    { id: "what-we-do", label: "Our Products" },
    { id: "why-partner", label: "Why Partner With Us" },
    { id: "legacy", label: "Our Legacy" },
    { id: "enquire", label: "Contact" },
  ];

  return (
    <header className="nav-wrap hero-pill-nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={goHome} aria-label="BONNE TRINITY home">
          <span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-wordmark_7f2a91c3.png" alt="BONNE TRINITY" /></span>
        </Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          {sectionLinks.map(({ id, label }) => (
            <a key={id} href={`/#${id}`} onClick={goToSection(id)}>{label}</a>
          ))}
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
  { name: "BONNE Glass Sipper with Sleeve", category: "Baby care", meta: "120ml (4oz) capacity · Food-grade glass", images: ["/assets/products/glass-sipper-1.jpg", "/assets/products/glass-sipper-2.jpg"], tone: "coral", spec: "BPA, PVC & Lead-free glass", moq: "Boil, steam & dishwasher safe", export: "Available in 5 colours" },
  { name: "BONNE Orthodontic Soother Nipple", category: "Baby care", meta: "3 months+ · Food-grade silicone", images: ["/assets/products/soother-nipple-1.jpg", "/assets/products/soother-nipple-2.jpg"], tone: "coral", spec: "Orthodontic shape, soft & gentle on gums", moq: "Sterilizable, BPA-free", export: "Chewable teether and pacifier" },
  { name: "BONNE Baby Toothbrush with Cover", category: "Baby care", meta: "12 months+ · BPA-free", images: ["/assets/toothbrush_08840fc6.jpeg"], tone: "mint", spec: "Soft bristles with protective cover", moq: "Easy-grip handle", export: "Jar of 8 unique toothbrushes" },
  { name: "BONNE Silicone Teething Finger Brush", category: "Baby care", meta: "6 months+ · Food-grade silicone", images: [], tone: "sky", spec: "Soft silicone bristles, BPA-free", moq: "Includes hygienic case", export: "Easy to clean & sterilize" },
  { name: "BONNE Easy Sip Steel Sipper", category: "Baby care", meta: "180ml capacity · Stainless steel", images: ["/assets/products/steel-sipper-1.jpg", "/assets/products/steel-sipper-2.jpg"], tone: "lavender", spec: "Durable steel body, soft silicone spout", moq: "Leak-proof, easy-grip handles", export: "Available in 2 colours" },
  { name: "BONNE Amor XL Sanitary Pads with Wings", category: "Personal hygiene", meta: "280mm XL · 6 pads with wings", images: ["/assets/products/amor-pad-1.jpg"], tone: "yellow", spec: "Advanced gel technology, cottony soft cover", moq: "Day & night protection", export: "Ultra-thin with odour control" },
  { name: "BONNE Grace Adult Diapers – Medium", category: "Personal hygiene", meta: "M size · 58–77kg, 28–44 inches", images: [], tone: "sky", spec: "Super absorbent core, up to 10 hrs protection", moq: "Leakage protection, wetness indicator", export: "Pack of 10, unisex design" },
  { name: "BONNE Grace Adult Diapers – Large", category: "Personal hygiene", meta: "L size · 58–77kg, 32–52 inches", images: [], tone: "sky", spec: "Super absorbent core, up to 10 hrs protection", moq: "Leakage protection, wetness indicator", export: "Pack of 10, unisex design" },
];

export const PageIntro = ({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) => <section className="page-intro"><div className="container page-intro-grid"><div className="section-label">{eyebrow}</div><div><h1>{title}</h1><p>{text}</p></div></div></section>;

export const CTASection = ({ title = "Have a brief in mind?" }: { title?: string }) => <section className="page-cta"><div className="container page-cta-inner"><div><span className="section-label">LET'S MAKE IT REAL</span><h2>{title}</h2></div><Link className="button button-dark" href="/enquire">Start a conversation <ArrowUpRight size={17} /></Link></div></section>;
