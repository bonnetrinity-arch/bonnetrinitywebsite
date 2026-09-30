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
  {
    name: "BONNE Glass Sipper with Sleeve", category: "Baby care", meta: "120ml (4oz) capacity · Food-grade glass",
    images: ["/assets/products/glass-sipper-1.jpg", "/assets/products/glass-sipper-2.jpg"], tone: "coral",
    spec: "BPA, PVC & Lead-free glass", moq: "Boil, steam & dishwasher safe", export: "Available in 5 colours",
    description: "Made from premium, heat-resistant, food-grade glass, the BONNE Glass Sipper ensures safe, comfortable and convenient feeding.",
    features: ["120ml (4oz) capacity", "BPA, PVC & Lead-Free glass", "Protective Silicone Sleeve with easy-grip handles", "Soft Silicone Nipple with anti-colic vent", "Wide Neck for easy filling and cleaning", "Boil, Steam & Dishwasher Safe", "Available in 5 Different Colors"],
  },
  {
    name: "BONNE Orthodontic Soother Nipple", category: "Baby care", meta: "3 months+ · Food-grade silicone",
    images: ["/assets/products/soother-nipple-1.jpg", "/assets/products/soother-nipple-2.jpg"], tone: "coral",
    spec: "Orthodontic shape, soft & gentle on gums", moq: "Sterilizable, BPA-free", export: "Chewable teether and pacifier",
    description: "Designed to comfort and soothe babies, the BONNE Orthodontic Soother Nipple features a specially designed shape that supports natural oral development while providing gentle comfort to delicate gums.",
    features: ["3 Months+ age recommendation", "BPA-Free, Medical-Grade Silicone", "Orthodontic Shape supports natural oral and jaw development", "Soft & Gentle on Gums for maximum comfort", "Soothes Teething Discomfort and everyday fussiness", "Sterilizable for easy cleaning and hygiene", "Chewable Design functions as both a teether and pacifier"],
  },
  {
    name: "BONNE Baby Toothbrush with Cover", category: "Baby care", meta: "12 months+ · BPA-free",
    images: ["/assets/toothbrush_08840fc6.jpeg"], tone: "mint",
    spec: "Soft bristles with protective cover", moq: "Easy-grip handle", export: "Jar of 8 unique toothbrushes",
    description: "Designed for gentle and comfortable brushing, the BONNE Baby Toothbrush features soft bristles, an easy-grip handle and a protective cover for everyday oral hygiene.",
    features: ["12 Months+ age recommendation", "BPA-Free material", "Soft Bristles gentle on teeth and gums", "Protective Bristle Cover for clean and hygienic storage", "Easy-Grip Handle for comfortable holding", "Fun & Attractive Design makes brushing enjoyable", "Jar Packaging: Contains 8 unique toothbrushes per jar"],
  },
  {
    name: "BONNE Silicone Teething Finger Brush", category: "Baby care", meta: "6 months+ · Food-grade silicone",
    images: ["/assets/products/finger-brush-1.jpg"], tone: "sky",
    spec: "Soft silicone bristles, BPA-free", moq: "Includes hygienic case", export: "Easy to clean & sterilize",
    description: "Designed for gentle cleaning and soothing teething gums, the BONNE Silicone Finger Brush features soft, food-grade silicone bristles for safe and comfortable oral care.",
    features: ["6 Months+ age recommendation", "100% Food-Grade, BPA-Free Silicone", "Soft Silicone Bristles gentle on delicate gums", "Cleans Emerging Teeth and maintains oral hygiene", "Soothes Teething Gums with gentle massage", "Easy Finger-Fit Design for comfortable cleaning", "Protective Hygiene Case for clean and safe storage", "Easy to Clean & Sterilize by boiling"],
  },
  {
    name: "BONNE Easy Sip Steel Sipper", category: "Baby care", meta: "180ml capacity · Stainless steel",
    images: ["/assets/products/steel-sipper-1.jpg", "/assets/products/steel-sipper-2.jpg"], tone: "lavender",
    spec: "Durable steel body, soft silicone spout", moq: "Leak-proof, easy-grip handles", export: "Available in 2 colours",
    description: "Designed for easy, comfortable and mess-free sipping, the BONNE Easy Sip Steel Sipper features a durable stainless steel body, soft silicone spout and easy-grip handles for everyday feeding.",
    features: ["180ml Capacity", "BPA-Free materials", "Durable Stainless Steel Body for everyday use", "Soft Silicone Spout gentle on little mouths", "Leak-Proof Design helps prevent spills and mess", "Easy-Grip Handles for comfortable holding", "Includes Spout & Nipple for a smooth feeding transition", "Easy to Clean for everyday hygiene", "Available in 2 Different Colors"],
  },
  {
    name: "BONNE Amor XL Sanitary Pads with Wings", category: "Personal hygiene", meta: "280mm XL · 6 pads with wings",
    images: ["/assets/products/amor-pad-1.jpg"], tone: "yellow",
    spec: "Advanced gel technology, cottony soft cover", moq: "Day & night protection", export: "Ultra-thin with odour control",
    description: "Designed for all-day and overnight protection, BONNE Amor XL Sanitary Pads feature Advanced Gel Technology for superior absorption, lasting comfort and reliable leak protection.",
    features: ["XL Size – 280mm for extended coverage", "Advanced Gel Technology for enhanced absorption", "Cottony Soft Cover for gentle, comfortable wear", "Wide Wings for a secure fit and leak protection", "Ultra-Thin Design for discreet everyday comfort", "Better Absorbing Pores for quick absorption", "Day & Night Protection for lasting confidence", "Odour Control for prolonged freshness", "Pack Contains: 6 Sanitary Pads with Wings"],
  },
  {
    name: "BONNE Grace Adult Diapers – Medium", category: "Personal hygiene", meta: "M size · 58–77kg, 28–44 inches",
    images: ["/assets/products/diaper-medium-1.jpg"], tone: "sky",
    spec: "Super absorbent core, up to 10 hrs protection", moq: "Leakage protection, wetness indicator", export: "Pack of 10, unisex design",
    description: "Designed for maximum comfort, dryness and reliable protection, BONNE Grace Adult Diapers feature a highly absorbent core, soft material and adjustable side tapes for a secure, comfortable fit.",
    features: ["Medium Size (M): 58–77 kg | 28–44 inches", "Super Absorbent Core for enhanced dryness", "Up to 10 Hours of Protection", "Leakage Protection with barrier cuffs", "Super Soft Material for comfortable wear", "Resealable Side Tapes for easy adjustment and a secure fit", "Wetness Indicator signals when a change is needed", "Unisex Design suitable for men and women", "Pack Contains: 10 Adult Diapers"],
  },
  {
    name: "BONNE Grace Adult Diapers – Large", category: "Personal hygiene", meta: "L size · 58–77kg, 32–52 inches",
    images: ["/assets/products/diaper-large-1.jpg"], tone: "sky",
    spec: "Super absorbent core, up to 10 hrs protection", moq: "Leakage protection, wetness indicator", export: "Pack of 10, unisex design",
    description: "Designed for maximum comfort, dryness and reliable protection, BONNE Grace Adult Diapers feature a highly absorbent core, soft material and adjustable side tapes for a secure, comfortable fit.",
    features: ["Large Size (L): 58–77 kg | 32–52 inches", "Super Absorbent Core for enhanced dryness", "Up to 10 Hours of Protection", "Leakage Protection with barrier cuffs", "Super Soft Material for comfortable wear", "Resealable Side Tapes for easy adjustment and a secure fit", "Wetness Indicator signals when a change is needed", "Unisex Design suitable for men and women", "Pack Contains: 10 Adult Diapers"],
  },
  {
    name: "BONNE Grace Adult Diapers – Extra Large", category: "Personal hygiene", meta: "XL size · 58–77kg, 35–61 inches",
    images: ["/assets/products/diaper-xl-1.jpg"], tone: "sky",
    spec: "Super absorbent core, up to 10 hrs protection", moq: "Leakage protection, wetness indicator", export: "Pack of 10, unisex design",
    description: "Designed for maximum comfort, dryness and reliable protection, BONNE Grace Adult Diapers feature a highly absorbent core, soft material and adjustable side tapes for a secure, comfortable fit.",
    features: ["Extra Large Size (XL): 58–77 kg | 35–61 inches", "Super Absorbent Core for enhanced dryness", "Up to 10 Hours of Protection", "Leakage Protection with barrier cuffs", "Super Soft Material for comfortable wear", "Resealable Side Tapes for easy adjustment and a secure fit", "Wetness Indicator signals when a change is needed", "Unisex Design suitable for men and women", "Pack Contains: 10 Adult Diapers"],
  },
];

export const PageIntro = ({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) => <section className="page-intro"><div className="container page-intro-grid"><div className="section-label">{eyebrow}</div><div><h1>{title}</h1><p>{text}</p></div></div></section>;

export const CTASection = ({ title = "Have a brief in mind?" }: { title?: string }) => <section className="page-cta"><div className="container page-cta-inner"><div><span className="section-label">LET'S MAKE IT REAL</span><h2>{title}</h2></div><Link className="button button-dark" href="/enquire">Start a conversation <ArrowUpRight size={17} /></Link></div></section>;
