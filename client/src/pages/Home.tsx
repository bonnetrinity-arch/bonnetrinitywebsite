import { FormEvent, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Brush,
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
  Store,
  Truck,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteLayout";

const categories = [
  {
    number: "01",
    title: "Baby Care",
    subtitle: "Feeding and care essentials for little ones.",
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
    subtitle: "Everyday comfort and protection.",
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
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

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

        <section className="hero-heading-section">
          <div className="container hero-heading">
            <h2>Grow Your Business<br />with <strong>BONNE TRINITY</strong></h2>
            <p className="about-hero-subhead">Baby Care &amp; Personal Hygiene Products for Distributors and Retailers</p>
            <div className="about-hero-actions">
              <a className="button button-dark" href="#enquire">Enquire for Business <ArrowUpRight size={17} /></a>
              <a className="button button-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Connect on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="who-we-are-section" id="about">
          <div className="container who-we-are-inner">
            <div className="about-hero-label"><span /> WHO WE ARE <span /></div>
            <h2>Everyday Essentials. <i>Growing Opportunities.</i></h2>
            <p>BONNE TRINITY is a B2B company focused on sourcing, developing and supplying baby-care and personal-hygiene products. We connect distributors and retailers with a carefully selected product range designed around everyday market needs.</p>
          </div>
        </section>

        <section className="product-panels-section" id="what-we-do">
          <div className="container">
            <div className="product-panels-heading">
              <div className="about-hero-label"><span /> OUR PRODUCTS <span /></div>
              <h2>Explore Our <i>Product Range.</i></h2>
              <p>Discover our collection of baby-care and personal-hygiene essentials.</p>
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
            <p>Discover how BONNE TRINITY supports distributors and retailers through four essential business capabilities.</p>
          </div>
          <div className="container partner-why-grid">
            <div className="partner-why-card tone-pink"><span className="partner-why-icon"><Package size={26} strokeWidth={1.75} /></span><h3>Product Sourcing</h3><p>Selected around your market’s needs.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about product sourcing"><ArrowRight size={18} /></Link></div>
            <div className="partner-why-card tone-blue"><span className="partner-why-icon"><Settings size={26} strokeWidth={1.75} /></span><h3>Product Development</h3><p>Shaped for evolving consumer needs.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about product development"><ArrowRight size={18} /></Link></div>
            <div className="partner-why-card tone-mint"><span className="partner-why-icon"><Truck size={26} strokeWidth={1.75} /></span><h3>Reliable Supply</h3><p>Consistent availability, order to order.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about reliable supply"><ArrowRight size={18} /></Link></div>
            <div className="partner-why-card tone-peach"><span className="partner-why-icon"><Handshake size={26} strokeWidth={1.75} /></span><h3>Business Partnerships</h3><p>Built for the long term, not one order.</p><Link className="partner-why-arrow" href="/enquire" aria-label="Enquire about business partnerships"><ArrowRight size={18} /></Link></div>
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
              <p>Rooted in a family manufacturing legacy dating back to 1963, BONNE TRINITY builds on generations of experience in the baby-care industry. Our associated family businesses bring established manufacturing knowledge and capabilities, with products trusted across the Indian market.</p>
              <ul className="legacy-timeline">
                <li><span className="legacy-timeline-year">1963</span><h4>The Beginning</h4><p>The origins of our family’s manufacturing journey.</p></li>
                <li><span className="legacy-timeline-year">1998</span><h4>Bonny Baby Care Pvt. Ltd.</h4><p>Expanding the family’s baby-care manufacturing operations.</p></li>
                <li><span className="legacy-timeline-year">2001</span><h4>Bonny Poly Plast Pvt. Ltd.</h4><p>Further developing our family’s manufacturing capabilities.</p></li>
                <li><span className="legacy-timeline-year">2026</span><h4>BONNE TRINITY</h4><p>Building on our family’s experience to establish a new B2B sourcing and supply business.</p></li>
              </ul>
            </div>
            <div className="legacy-media-c legacy-strip-image"><img src="/assets/legacy/legacy-molding.jpg" alt="Injection molding machine" /></div>
            <div className="legacy-media-d legacy-strip-image"><img src="/assets/legacy/legacy-packing.jpg" alt="Quality-checked packing" /></div>
          </div>
        </section>

        <section className="serve-section" id="who-we-serve">
          <div className="container serve-heading">
            <div className="about-hero-label"><span /> WHO WE SERVE <span /></div>
            <h2>Who We Work With.</h2>
          </div>
          <div className="container serve-grid">
            <div className="serve-card tone-pink"><span className="serve-card-icon"><Globe2 size={26} strokeWidth={1.75} /></span><h3>Distributors</h3><p>Expand your product portfolio with our baby-care and personal-hygiene range.</p></div>
            <div className="serve-card tone-blue"><span className="serve-card-icon"><Store size={26} strokeWidth={1.75} /></span><h3>Retailers</h3><p>Discover everyday essentials suited to your customers’ needs.</p></div>
          </div>
        </section>

        <section className="enquiry-section" id="enquire"><div className="container enquiry-grid"><div className="enquiry-intro"><div className="section-label">CONTACT</div><h2>Let’s Build<br /><i>Something Together.</i></h2><p>Interested in our products or exploring a business opportunity? Tell us what you’re looking for, and our team will get in touch.</p><p className="enquiry-note">We also welcome enquiries about future private-label collaborations and international partnerships.</p><div className="contact-list"><a href="mailto:care@bonnetrinity.com"><Mail size={18} /> care@bonnetrinity.com</a><a href="tel:+919811643325"><Phone size={18} /> +91 98116 43325</a><a href="https://wa.me/918588879611" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div><div className="form-card">{sent ? <div className="success-state"><div className="success-icon"><Check size={24} /></div><div className="section-label">MESSAGE RECEIVED</div><h3>Thank you for reaching out.</h3><p>Our team will review your enquiry and get back to you soon.</p><button className="button button-dark" onClick={() => setSent(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f854a96c-906d-4bd4-8b33-c0be1fc5e4bc"} /><input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" /><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone number<input required type="tel" name="phone" placeholder="+91 00000 00000" /></label><label>Company / organisation<input name="company" placeholder="Company name" /></label></div><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us about your product, volume or sourcing requirement..." /></label><div className="form-foot"><span>We respect your inbox. No noise, just a thoughtful reply.</span><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} <ArrowUpRight size={17} /></button></div></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-wordmark_7f2a91c3.png" alt="BONNE TRINITY" /></span></div><p>B2B sourcing, product development and supply of Baby Care &amp; Personal Hygiene products.</p><a href="https://www.linkedin.com/company/bonne-trinity/" target="_blank" rel="noreferrer" aria-label="BONNE TRINITY on LinkedIn"><Linkedin size={18} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BONNE TRINITY. All rights reserved.</span><span>53A/11 Rama Road, Kirti Nagar, New Delhi — 110015</span><span>GSTIN 07ABGFB9745E1ZB</span></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
