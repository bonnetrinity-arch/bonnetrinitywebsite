import { FormEvent, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Baby,
  BarChart3,
  Brush,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CupSoda,
  Factory,
  Globe2,
  Handshake,
  Heart,
  Leaf,
  Mail,
  MessageCircle,
  Milk,
  Package,
  Phone,
  Settings,
  ShieldCheck,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";

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
    image: "/assets/personal-hygiene-lineup.webp",
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
  { image: "/assets/hero-carousel/hero-2.webp", alt: "Mother and child with BONNE TRINITY products", productsHref: "/products?category=Baby%20care", productsLabel: "View Baby Care Products" },
  { image: "/assets/hero-carousel/hero-1.webp", alt: "BONNE TRINITY baby care product lineup", productsHref: "/products?category=Baby%20care", productsLabel: "View Baby Care Products" },
  { image: "/assets/hero-carousel/hero-3.webp", alt: "BONNE TRINITY adult diapers and sanitary pads lineup", productsHref: "/products?category=Personal%20hygiene", productsLabel: "View Personal Hygiene Products" },
];

const storyMilestones = [
  { year: "1963", icon: Star, position: "top", text: "BONNE was founded by the late Shri Nand Lal Aneja. Bonne got registered as a brand." },
  { year: "1970", icon: Users, position: "bottom", text: "Baby Care Marketing was established by Mr. Subhash Aneja, as a trading firm which initially focused on feeding nipples." },
  { year: "1998", icon: Settings, position: "top", text: "Bonny Baby Care Pvt. Ltd. was established, with a focus on manufacturing PET bottles." },
  { year: "2001", icon: Factory, position: "bottom", text: "Bonny Poly Plast Pvt. Ltd. was established by Mr. Anurag Aneja, expanding manufacturing capabilities with modern machinery and a broader focus on baby-care products." },
  { year: "2012", icon: Globe2, position: "top", text: "International sales and private-label supply began for baby feeding nipples and bottles in the Philippines and Dubai." },
];

const storyFinal = { year: "2026", icon: BarChart3, text: "BONNE TRINITY was established by Hriday Aneja and Gavish Aneja as a trading and sourcing company focused on new and premium baby-care products, including glass and steel sippers." };

const storyHygiene = { year: "2026", icon: ShieldCheck, text: "Personal hygiene products were added as a product line into BONNE TRINITY, including sanitary pads and adult diapers." };

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
        <section className={`hero-section hero-carousel${activeHeroSlide === 0 ? " hero-carousel--has-copy" : ""}`} aria-label="BONNE TRINITY product highlights">
          <div className="hero-carousel-slides" aria-live="polite">
            {heroSlides.map((slide, index) => (
              <div className={`hero-carousel-slide ${index === activeHeroSlide ? "is-active" : ""}`} key={slide.image} aria-hidden={index !== activeHeroSlide}>
                <img src={slide.image} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className={`hero-carousel-overlay${activeHeroSlide === 0 ? " has-copy" : ""}`} />
          {activeHeroSlide === 0 && (
            <div className="hero-carousel-copy">
              <h1>Care That Fits<br />Every Stage of Life.</h1>
              <p>Quality baby care and personal hygiene products, thoughtfully sourced for distributors and retailers.</p>
              <div className="hero-carousel-actions">
                <a className="button button-dark" href="/products">Explore Products <ArrowRight size={16} /></a>
                <a className="button button-outline" href="/enquire">Enquire Now <ArrowUpRight size={16} /></a>
              </div>
            </div>
          )}
          <Link className="hero-carousel-view-products" href={heroSlides[activeHeroSlide].productsHref}>{heroSlides[activeHeroSlide].productsLabel} <ArrowUpRight size={14} /></Link>
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
                <a className="button button-whatsapp" href="https://wa.me/919811643325" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Connect on WhatsApp</a>
              </div>
              <div className="about-hero-stats">
                <div className="about-hero-stat tone-blue"><span className="about-hero-stat-icon"><Building2 size={18} strokeWidth={1.75} /></span><span>B2B Focused</span></div>
                <div className="about-hero-stat tone-pink"><span className="about-hero-stat-icon"><Award size={18} strokeWidth={1.75} /></span><span>Family Experience<br />Since 1963</span></div>
                <div className="about-hero-stat tone-mint"><span className="about-hero-stat-icon"><Package size={18} strokeWidth={1.75} /></span><span>Baby Care &amp;<br />Personal Hygiene</span></div>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-hero-blob" aria-hidden="true" />
              <img src="/assets/who-we-are-machine_a1b2c3d4.jpg" alt="BONNE TRINITY manufacturing equipment" />
              <div className="about-hero-badge about-hero-badge-top">Trusted Products.<br />Stronger Partnerships.</div>
              <div className="about-hero-badge about-hero-badge-bottom">Building Better Care Together</div>
            </div>
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
        </section>

        <section className="partners-people-section" id="meet-the-partners">
          <div className="container partners-people-heading">
            <div className="about-hero-label"><span /> MEET THE PARTNERS <span /></div>
            <h2>A Shared Vision<br />for <i>Healthier Generations.</i></h2>
            <p>BONNE TRINITY is led by a family that brings together decades of industry experience with a fresh, forward-looking perspective. Together, we are committed to making quality Baby Care and Personal Hygiene products more accessible to distributors and retailers across India and global markets.</p>
            <div className="partners-people-stats">
              <div className="partners-people-stat"><span className="partners-people-stat-icon"><Users size={18} strokeWidth={1.75} /></span><span>Family<br />Leadership</span></div>
              <div className="partners-people-stat"><span className="partners-people-stat-icon"><BarChart3 size={18} strokeWidth={1.75} /></span><span>Experience<br />Meets Innovation</span></div>
              <div className="partners-people-stat"><span className="partners-people-stat-icon"><Handshake size={18} strokeWidth={1.75} /></span><span>Long-Term<br />Partnerships</span></div>
            </div>
          </div>
          <div className="container partners-people-media">
            <div className="partners-people-photo"><img src="/assets/legacy/partners-family.jpg" alt="BONNE TRINITY partners: Gavish Aneja, Mr. Anurag Aneja and Hriday Aneja" /></div>
            <div className="partners-people-cards">
              <div className="partners-people-card"><h4>Gavish Aneja</h4><span className="partners-people-role">PARTNER AT BONNE TRINITY</span><p>Focuses on business development, strategic partnerships and expanding BONNE TRINITY&rsquo;s global footprint.</p></div>
              <div className="partners-people-card"><h4>Mr. Anurag Aneja</h4><span className="partners-people-role">DIRECTOR AT BONNY POLY PLAST PVT. LTD.</span><p>Brings decades of experience in the baby-care industry and provides strategic guidance to the business.</p></div>
              <div className="partners-people-card"><h4>Hriday Aneja</h4><span className="partners-people-role">PARTNER AT BONNE TRINITY</span><p>Focuses on product development, market research and building long-term relationships with distributors and retailers.</p></div>
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

        <section className="story-section" id="our-story">
          <div className="container">
            <div className="story-heading">
              <div className="about-hero-label"><span /> OUR STORY <span /></div>
              <h2>From a Family Legacy to a <i>Growing Tomorrow.</i></h2>
              <p>From a family manufacturing legacy to BONNE TRINITY, our journey has grown through decades of experience, product knowledge and evolving opportunities.</p>
            </div>
            <div className="story-groups"><span className="story-group-legacy">Family &amp; Business Legacy</span><span className="story-group-final">BONNE TRINITY</span></div>
            <div className="story-track">
              <span className="story-line" />
              <span className="story-divider" />
              <div className="story-mobile-label"><span /> Family &amp; Business Legacy <span /></div>
              {storyMilestones.map(({ year, icon: Icon, position, text }, i) => (
                <div className={`story-block pos-${position}`} style={{ gridColumn: i + 1, gridRow: position === "top" ? 1 : 3 }} key={year}>
                  <span className="story-icon"><Icon size={20} strokeWidth={1.75} /></span>
                  <div className="story-text"><span className="story-year">{year}</span><p>{text}</p></div>
                </div>
              ))}
              {storyMilestones.map((_, i) => <span className="story-dot" style={{ gridColumn: i + 1, gridRow: 2 }} key={i} />)}
              <div className="story-mobile-label story-mobile-label-final"><span /> BONNE TRINITY <span /></div>
              <div className="story-block pos-top" style={{ gridColumn: 6, gridRow: 1 }}>
                <span className="story-icon"><storyFinal.icon size={20} strokeWidth={1.75} /></span>
                <div className="story-text"><span className="story-year">{storyFinal.year}</span><p>{storyFinal.text}</p></div>
              </div>
              <span className="story-dot" style={{ gridColumn: 6, gridRow: 2 }} />
              <div className="story-block pos-bottom" style={{ gridColumn: 7, gridRow: 3 }}>
                <span className="story-icon"><storyHygiene.icon size={20} strokeWidth={1.75} /></span>
                <div className="story-text"><span className="story-year">{storyHygiene.year}</span><p>{storyHygiene.text}</p></div>
              </div>
              <span className="story-dot story-dot-final" style={{ gridColumn: 7, gridRow: 2 }} />
            </div>
          </div>
        </section>

        <section className="enquiry-section" id="enquire"><div className="container enquiry-grid"><div className="enquiry-intro"><div className="section-label">09 / CONTACT</div><h2>Let’s Work<br /><i>Together.</i></h2><p>Have a question, sourcing requirement or partnership opportunity? We’d be happy to hear from you.</p><div className="contact-list"><a href="mailto:care@bonnetrinity.com"><Mail size={18} /> care@bonnetrinity.com</a><a href="tel:+918588879611"><Phone size={18} /> +91 85888 79611 / +91 98116 43325</a><a href="https://wa.me/919811643325" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div><div className="form-card">{sent ? <div className="success-state"><div className="success-icon"><Check size={24} /></div><div className="section-label">MESSAGE RECEIVED</div><h3>Thank you for reaching out.</h3><p>Our team will review your enquiry and get back to you soon.</p><button className="button button-dark" onClick={() => setSent(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f854a96c-906d-4bd4-8b33-c0be1fc5e4bc"} /><input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" /><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone number<input required type="tel" name="phone" placeholder="+91 00000 00000" /></label><label>Company / organisation<input required name="company" placeholder="Company name" /></label></div><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us about your product, volume or sourcing requirement..." /></label><div className="form-foot"><span>We respect your inbox. No noise, just a thoughtful reply.</span><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} <ArrowUpRight size={17} /></button></div></form>}</div></div></section>
      </main>

      <SiteFooter />
      <a className="floating-whatsapp" href="https://wa.me/919811643325" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
