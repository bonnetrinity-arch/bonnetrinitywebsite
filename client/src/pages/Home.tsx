import { FormEvent, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Baby,
  Brush,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CupSoda,
  Globe2,
  Handshake,
  Heart,
  Leaf,
  Linkedin,
  Mail,
  MessageCircle,
  Milk,
  Package,
  Phone,
  Settings,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteLayout";

const categories = [
  {
    number: "01",
    title: "Baby Care",
    subtitle: "Everyday essentials for little ones.",
    icon: Baby,
    tone: "pink",
    image: "/assets/baby-care-lineup-2_c9f1e6a3.webp",
    imagePosition: "center",
    items: [
      { label: "Soothers & Nipples", icon: Baby },
      { label: "Feeding Bottles", icon: Milk },
      { label: "Sippers", icon: CupSoda },
      { label: "Baby Toothbrush", icon: Brush },
    ],
    cta: "Explore Baby Care Products",
    href: "/products?category=Baby%20care",
  },
  {
    number: "02",
    title: "Personal Hygiene",
    subtitle: "Comfort and confidence for everyday life.",
    icon: Leaf,
    tone: "blue",
    image: null,
    imagePosition: "center",
    items: [
      { label: "Sanitary Pads", icon: Heart },
      { label: "Adult Diapers", icon: ShieldCheck },
    ],
    cta: "Explore Personal Hygiene Products",
    href: "/products?category=Personal%20hygiene",
  },
];

const heroSlides = [
  { image: "/assets/hero-carousel/hero-1.webp", alt: "BONNE TRINITY hero image one" },
  { image: "/assets/hero-carousel/hero-2.webp", alt: "BONNE TRINITY hero image two" },
  { image: "/assets/hero-carousel/hero-3.webp", alt: "BONNE TRINITY hero image three" },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState<{ src: string; alt: string; caption: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!selectedFactory) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelectedFactory(null);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedFactory]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f854a96c-906d-4bd4-8b33-c0be1fc5e4bc";
    data.set("access_key", accessKey);
    data.set("subject", "New BONNE TRINITY website enquiry");
    data.set("from_name", "BONNE TRINITY Website");
    data.set("to", "bonnetrinity@gmail.com");
    data.set("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
        form.reset();
        toast.success("Thanks — your enquiry is on its way to BONNE TRINITY.");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please email care@bonnetrinity.com instead.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="site-shell page-transition">
      <SiteHeader home />

      <main id="top">
        <section className="hero-section hero-carousel" aria-label="BONNE TRINITY product highlights">
          <div className="hero-carousel-slides" aria-live="polite">
            {heroSlides.map((slide, index) => (
              <div className={`hero-carousel-slide ${index === activeHeroSlide ? "is-active" : ""}`} key={slide.image} aria-hidden={index !== activeHeroSlide}>
                <img src={slide.image} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="hero-carousel-overlay" />
          <button type="button" className="hero-carousel-arrow hero-carousel-arrow-prev" onClick={() => setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous hero image"><ChevronLeft size={22} /></button>
          <button type="button" className="hero-carousel-arrow hero-carousel-arrow-next" onClick={() => setActiveHeroSlide((current) => (current + 1) % heroSlides.length)} aria-label="Next hero image"><ChevronRight size={22} /></button>
          <div className="hero-carousel-controls" role="tablist" aria-label="Choose hero slide">
            {heroSlides.map((slide, index) => <button key={slide.image} type="button" className={index === activeHeroSlide ? "is-active" : ""} onClick={() => setActiveHeroSlide(index)} aria-label={`Show hero image ${index + 1} of ${heroSlides.length}`} aria-selected={index === activeHeroSlide} role="tab"><span /></button>)}
          </div>
        </section>

        <section className="about-hero-section" id="about">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <div className="about-hero-label"><span /> WHO WE ARE <span /></div>
              <h2>Grow Your Business<br />with <strong>BONNE TRINITY</strong></h2>
              <p className="about-hero-subhead">Quality Baby Care &amp; Personal Hygiene Products for Distributors &amp; Retailers</p>
              <p>BONNE TRINITY is a B2B company focused on sourcing, developing and supplying thoughtfully selected Baby Care and Personal Hygiene products for distributors and retailers.</p>
              <p>Backed by established family manufacturing experience since 1963, we combine product understanding, reliable sourcing and quality-focused supply to bring practical products to market.</p>
              <div className="about-hero-actions">
                <a className="button button-dark" href="#enquire">Enquire for Business <ArrowUpRight size={17} /></a>
                <a className="button button-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Connect on WhatsApp</a>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-hero-blob" aria-hidden="true" />
              <img src="/assets/who-we-are-machine_a1b2c3d4.jpg" alt="BONNE TRINITY manufacturing equipment" />
              <div className="about-hero-badge about-hero-badge-top">Trusted Products.<br />Stronger Partnerships.</div>
              <div className="about-hero-badge about-hero-badge-bottom">Building Better Care Together</div>
            </div>
          </div>
          <div className="container about-hero-features">
            <div className="about-hero-feature"><span className="about-hero-feature-icon tone-pink"><ShieldCheck size={22} /></span><div><h3>Quality Products</h3><p>Carefully selected for your market.</p></div></div>
            <div className="about-hero-feature"><span className="about-hero-feature-icon tone-blue"><Truck size={22} /></span><div><h3>Reliable Supply</h3><p>Consistent quality and on-time supply.</p></div></div>
            <div className="about-hero-feature"><span className="about-hero-feature-icon tone-mint"><Users size={22} /></span><div><h3>Long-term Partnerships</h3><p>Focused on your growth.</p></div></div>
            <div className="about-hero-feature"><span className="about-hero-feature-icon tone-peach"><TrendingUp size={22} /></span><div><h3>A Stronger Tomorrow</h3><p>Everyday essentials for brighter lives.</p></div></div>
          </div>
        </section>

        <section className="product-panels-section" id="what-we-do">
          <div className="container">
            <div className="product-panels-heading">
              <div className="about-hero-label"><span /> OUR PRODUCTS <span /></div>
              <h2>Essential Products. <i>Growing Opportunities.</i></h2>
              <p>A focused range of Baby Care and Personal Hygiene products, selected and developed for today’s market needs.</p>
            </div>
            <div className="product-panels-grid">{categories.map(({ number, title, subtitle, icon: Icon, tone, image, imagePosition, items, cta, href }) => (
              <article className={`product-panel tone-${tone}`} key={title}>
                <div className="product-panel-head">
                  <span className="product-panel-number">{number}</span>
                  <span className="product-panel-icon"><Icon size={24} strokeWidth={1.75} /></span>
                  <div><h3>{title}</h3><p>{subtitle}</p></div>
                </div>
                <div className="product-panel-image">{image ? <img src={image} alt={title} style={{ objectPosition: imagePosition }} /> : <span className="product-panel-image-placeholder">Product photo coming soon</span>}</div>
                <div className="product-panel-chips">{items.map(({ label, icon: ItemIcon }) => <div className="product-panel-chip" key={label}><ItemIcon size={20} strokeWidth={1.75} /><span>{label}</span></div>)}</div>
                <Link className="button button-dark product-panel-cta" href={href}>{cta} <ArrowUpRight size={17} /></Link>
              </article>
            ))}</div>
          </div>
        </section>

        <section className="partner-why-section" id="why-partner">
          <div className="container partner-why-heading">
            <div className="about-hero-label"><span /> WHY PARTNER WITH BONNE TRINITY <span /></div>
            <h2>Built on Trust.<br /><i>Driven by Growth.</i></h2>
            <p>From quality sourcing to reliable supply, we support your business with products people trust and partnerships built for the long term.</p>
          </div>
          <div className="container partner-why-grid">
            <div className="partner-why-card tone-pink"><span className="partner-why-icon"><Package size={26} strokeWidth={1.75} /></span><h3>Product Sourcing</h3><p>Carefully selected products to meet your market needs.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about product sourcing"><ArrowRight size={18} /></Link></div>
            <div className="partner-why-card tone-blue"><span className="partner-why-icon"><Settings size={26} strokeWidth={1.75} /></span><h3>Product Development</h3><p>Developed around market requirements and consumer trends.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about product development"><ArrowRight size={18} /></Link></div>
            <div className="partner-why-card tone-mint"><span className="partner-why-icon"><Truck size={26} strokeWidth={1.75} /></span><h3>Reliable Supply</h3><p>Consistent quality and on-time supply you can count on.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about reliable supply"><ArrowRight size={18} /></Link></div>
            <div className="partner-why-card tone-peach"><span className="partner-why-icon"><Handshake size={26} strokeWidth={1.75} /></span><h3>Long-term Partnerships</h3><p>Focused on your growth, with ongoing support at every step.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about long-term partnerships"><ArrowRight size={18} /></Link></div>
          </div>
          <div className="container">
            <div className="partner-why-stats">
              <div className="partner-why-stat"><span className="partner-why-stat-icon tone-pink"><Building2 size={22} strokeWidth={1.75} /></span><div><h4>1963</h4><p>Family manufacturing experience since 1963</p></div></div>
              <div className="partner-why-stat"><span className="partner-why-stat-icon tone-blue"><Globe2 size={22} strokeWidth={1.75} /></span><div><h4>Pan-Asia Network</h4><p>Supplying to distributors and retailers across Asia and beyond</p></div></div>
              <div className="partner-why-stat"><span className="partner-why-stat-icon tone-mint"><ShieldCheck size={22} strokeWidth={1.75} /></span><div><h4>Quality You Can Trust</h4><p>Safe, durable and market-ready products</p></div></div>
              <div className="partner-why-stat"><span className="partner-why-stat-icon tone-peach"><Users size={22} strokeWidth={1.75} /></span><div><h4>Growing Together</h4><p>Long-term partnerships for a healthier, happier tomorrow</p></div></div>
            </div>
          </div>
        </section>

        <section className="legacy-section" id="legacy">
          <div className="container legacy-content">
            <div className="legacy-media-a legacy-strip-image"><img src="/assets/legacy/legacy-bottles.jpg" alt="PET bottle production line" /></div>
            <div className="legacy-media-b legacy-visual">
              <div className="about-hero-blob" aria-hidden="true" />
              <div className="legacy-visual-frame"><img src="/assets/legacy/legacy-main.jpg" alt="BONNE TRINITY manufacturing equipment" /></div>
              <div className="about-hero-badge about-hero-badge-top">A Legacy<br />of Care<br />Since 1963</div>
            </div>
            <div className="legacy-media-copy legacy-copy">
              <div className="about-hero-label"><span /> OUR LEGACY <span /></div>
              <h2>Decades of Expertise.<br /><i>A Brighter Tomorrow.</i></h2>
              <p>With a strong family manufacturing legacy since 1963, we continue to build on our experience to develop and supply high-quality baby care products trusted across the Indian market.</p>
              <div className="legacy-stats">
                <div className="legacy-stat tone-pink"><span className="legacy-stat-icon"><Award size={22} strokeWidth={1.75} /></span><h4>1963</h4><p>Family Manufacturing Legacy</p></div>
                <div className="legacy-stat tone-blue"><span className="legacy-stat-icon"><Building2 size={22} strokeWidth={1.75} /></span><h4>Modern Facilities</h4><p>Manufacturing units in Greater Noida</p></div>
                <div className="legacy-stat tone-peach"><span className="legacy-stat-icon"><Globe2 size={22} strokeWidth={1.75} /></span><h4>Global Expansion</h4><p>Actively exploring opportunities to expand into new markets</p></div>
                <div className="legacy-stat tone-mint"><span className="legacy-stat-icon"><Users size={22} strokeWidth={1.75} /></span><h4>Trusted by Businesses</h4><p>For consistent quality and reliable supply</p></div>
              </div>
            </div>
            <div className="legacy-media-c legacy-strip-image"><img src="/assets/legacy/legacy-molding.jpg" alt="Injection molding machine" /></div>
            <div className="legacy-media-d legacy-strip-image"><img src="/assets/legacy/legacy-packing.jpg" alt="Quality-checked packing" /></div>
          </div>
        </section>

        <section className="network-section" aria-labelledby="network-title">
          <div className="container network-grid">
            <div className="network-lead"><div className="section-label">05 / OUR STORY</div><h2>Experience<br />you can <i>build on.</i></h2><p>Backed by established family manufacturing experience since 1963.</p></div>
            <div className="network-content"><div className="network-note"><span className="network-note-mark">✳</span><span>ASSOCIATED FAMILY BUSINESSES<br />& MANUFACTURING PARTNERS</span></div><div className="partner-business"><div className="partner-meta"><span>EST. 2001</span><span>NOIDA · UTTAR PRADESH</span></div><h3>Bonny Poly Plast <i>Pvt. Ltd.</i></h3><p>Baby feeding bottles, baby nipples and PET bottles.</p><div className="partner-line"><span>01</span><span>Established manufacturing experience</span></div></div><div className="partner-business"><div className="partner-meta"><span>EST. 1998</span><span>NOIDA · UTTAR PRADESH</span></div><h3>Bonny Baby Care <i>Pvt. Ltd.</i></h3><p>Baby feeding bottles, baby nipples, silicone soothers, baby teethers and other baby-care products.</p><div className="partner-line"><span>02</span><span>Established manufacturing experience</span></div></div><button type="button" className="network-media" onClick={() => setSelectedFactory({ src: "/assets/factory-1_6d60273a.webp", alt: "Bonny Poly Plast factory floor", caption: "Bonny Poly Plast Pvt. Ltd. · C-13, Sector-63, Phase-III, Noida, Uttar Pradesh" })} aria-label="View Bonny Poly Plast factory photo"><img src="/assets/factory-1_6d60273a.webp" alt="Bonny Poly Plast factory floor" /><span>NOIDA · BONNY POLY PLAST PVT. LTD.<small>Click to view full size</small></span></button><div className="network-footnote"><span>Manufacturing partners, not a BONNE TRINITY-owned factory.</span><ArrowUpRight size={16} /></div></div>
          </div>
        </section>

        <section className="network-section" aria-labelledby="network-2-title">
          <div className="container network-grid">
            <div className="network-lead"><div className="section-label">06 / MANUFACTURING & SOURCING NETWORK</div><h2 id="network-2-title">Built on real<br /><i>capability.</i></h2><p>Product development, quality-focused manufacturing and dependable B2B supply, delivered through our network of associated partners.</p></div>
            <div className="network-content"><button type="button" className="network-media network-media-large" onClick={() => setSelectedFactory({ src: "/assets/factory-3_4f6c7b2a.webp", alt: "Bonny Baby Care factory floor", caption: "Bonny Baby Care Pvt. Ltd. · C-6, Sector-58, Phase-III, Noida, Uttar Pradesh" })} aria-label="View Bonny Baby Care factory photo"><img src="/assets/factory-3_4f6c7b2a.webp" alt="Bonny Baby Care factory floor" /><span>NOIDA · BONNY BABY CARE PVT. LTD.<small>Click to view full size</small></span></button><ul className="network-capability-list"><li>Sourcing and manufacturing partnerships</li><li>Product development and private-label formats</li><li>Quality checks and documentation support</li><li>Ongoing supply for distributors and retailers</li></ul></div>
          </div>
        </section>

        <section className="page-cta">
          <div className="container page-cta-inner"><div><span className="section-label">08 / WORK WITH US</span><h2>Ready to talk<br />business?</h2><p>Bulk orders, private-label requirements or international supply — let's discuss what you need.</p></div><a className="button button-dark" href="#enquire">Start a conversation <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="enquiry-section" id="enquire"><div className="container enquiry-grid"><div className="enquiry-intro"><div className="section-label">09 / CONTACT</div><h2>Let’s start<br /><i>something useful.</i></h2><p>Share your product, volume or sourcing brief — we’ll come back with a clear next step, not a sales pitch.</p><div className="contact-list"><a href="mailto:care@bonnetrinity.com"><Mail size={18} /> care@bonnetrinity.com</a><a href="tel:+919811643325"><Phone size={18} /> +91 98116 43325</a><a href="https://wa.me/918588879611" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div><div className="form-card">{sent ? <div className="success-state"><div className="success-icon"><Check size={24} /></div><div className="section-label">MESSAGE RECEIVED</div><h3>Thank you for reaching out.</h3><p>Our team will review your enquiry and get back to you soon.</p><button className="button button-dark" onClick={() => setSent(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f854a96c-906d-4bd4-8b33-c0be1fc5e4bc"} /><input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" /><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone number<input required type="tel" name="phone" placeholder="+91 00000 00000" /></label><label>Company / organisation<input name="company" placeholder="Company name" /></label></div><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us about your product, volume or sourcing requirement..." /></label><div className="form-foot"><span>We respect your inbox. No noise, just a thoughtful reply.</span><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} <ArrowUpRight size={17} /></button></div></form>}</div></div></section>
      </main>

      {selectedFactory && <div className="factory-lightbox" role="dialog" aria-modal="true" aria-label={selectedFactory.caption} onClick={() => setSelectedFactory(null)}><div className="factory-lightbox-panel" onClick={(event) => event.stopPropagation()}><button type="button" className="factory-lightbox-close" onClick={() => setSelectedFactory(null)} aria-label="Close factory photo"><X size={22} /></button><img src={selectedFactory.src} alt={selectedFactory.alt} /><p>{selectedFactory.caption}</p></div></div>}

      <footer className="footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-wordmark_7f2a91c3.png" alt="BONNE TRINITY" /></span></div><p>Care · Comfort · Smiles.</p><a href="https://www.linkedin.com/company/bonne-trinity/" target="_blank" rel="noreferrer" aria-label="BONNE TRINITY on LinkedIn"><Linkedin size={18} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BONNE TRINITY. All rights reserved.</span><span>53A/11 Rama Road, Kirti Nagar, New Delhi — 110015</span><span>GSTIN 07ABGFB9745E1ZB</span></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
