import { FormEvent, useState } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  Baby,
  Check,
  ChevronDown,
  Globe2,
  Handshake,
  Leaf,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteLayout";

const categories = [
  {
    number: "01",
    eyebrow: "Carefully sourced",
    title: "Baby care",
    text: "Thoughtfully sourced baby-care essentials designed for everyday comfort, care and convenience.",
    details: "Feeding bottles, nipples, soothers, teethers and toothbrush formats for baby-care brands, distributors and retailers.",
    detailPoints: ["Food-grade and BPA-free formats", "Private-label and OEM pathways", "India and export enquiries"],
    icon: Baby,
    tone: "terracotta",
  },
  {
    number: "02",
    eyebrow: "Made for daily life",
    title: "Personal hygiene",
    text: "High-utility, trusted formats that help partners build products people reach for every day.",
    details: "Absorbent care formats and personal-hygiene solutions developed around your market, pack and distribution brief.",
    detailPoints: ["Adult care pad formats", "Private-label pack configurations", "Export documentation support"],
    icon: Sparkles,
    tone: "sage",
  },
];

const audiences = ["Brands", "Distributors", "Retailers", "Private-label / OEM"];

const products = [
  { name: "Orthodontic souther nipple", category: "Baby care", meta: "3+ months · Food-grade silicone", image: "/assets/bonne-nipple_9124056e.jpeg", tone: "coral" },
  { name: "Baby toothbrush with cover", category: "Baby care", meta: "12+ months · BPA-free", image: "/assets/toothbrush_08840fc6.jpeg", tone: "mint" },
  { name: "Adult care pad range", category: "Personal hygiene", meta: "Absorbent formats · Private label", image: "/assets/bonne-pad_c54c9b7c.jpeg", tone: "yellow" },
  { name: "Care pad range · back", category: "Personal hygiene", meta: "Packaging and specification view", image: "/assets/bonne-pad-back_45efe2ce.jpeg", tone: "sky" },
];

const productDetails = {
  "Baby care": { spec: "Food-grade silicone / BPA-free formats", moq: "MOQ from 1,000 units", export: "India + export enquiries" },
  "Personal hygiene": { spec: "Absorbent non-woven and hygiene formats", moq: "MOQ from 5,000 units", export: "Export documentation support" },
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [flippedCategory, setFlippedCategory] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [productFilter, setProductFilter] = useState("All products");

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

    if (accessKey === "f854a96c-906d-4bd4-8b33-c0be1fc5e4bc") {
      toast.error("Add your Web3Forms access key to activate submissions.");
      setIsSubmitting(false);
      return;
    }

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
        <section className="hero-section hero-editorial">
          <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
          <div className="container hero-editorial-inner">
            <div className="hero-editorial-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-line" /> CARE · COMFORT · SMILES</div>
              <h1>Thoughtful products.<br /><i>Better everyday care.</i></h1>
              <p className="hero-lede">BONNE TRINITY helps brands, buyers and distributors build dependable care ranges — from baby essentials to personal hygiene.</p>
              <div className="hero-actions"><a className="button button-dark" href="#products">Explore the range <ArrowUpRight size={17} /></a><a className="text-link" href="#enquire">Tell us what you need <span>↗</span></a></div>
            </div>
            <div className="hero-editorial-art" aria-label="BONNE TRINITY product range">
              <div className="hero-art-ring" />
              <div className="hero-product hero-product-main"><img src="/assets/bonne-nipple_9124056e.jpeg" alt="BONNE orthodontic souther nipple" /><span>01 / BABY CARE</span></div>
              <div className="hero-product hero-product-small"><img src="/assets/toothbrush_08840fc6.jpeg" alt="BONNE baby toothbrush" /><span>02 / DAILY CARE</span></div>
            </div>
          </div>
          <div className="hero-bottomline container"><span>Scroll to discover <ChevronDown size={15} /></span></div>
        </section>

        <section className="intro-section" id="about">
          <div className="container intro-grid">
            <div className="section-label">01 / WHO WE ARE</div>
            <div className="intro-copy"><h2>A grounded partner for <i>growing brands.</i></h2><p>We are BONNE TRINITY — a New Delhi-based partnership company led by Gavish Aneja and Hriday Aneja. We develop, source, private-label, supply and distribute through trusted manufacturing and sourcing partners, helping ambitious businesses move with confidence.</p><a className="text-link" href="#enquire">Meet us in a conversation <span>↗</span></a></div>
            <div className="intro-aside"><div className="aside-number">02</div><p>A newer venture, backed by a family manufacturing network and a clear view of what partners need.</p></div>
          </div>
        </section>

        <section className="network-section" aria-labelledby="network-title">
          <div className="container network-grid">
            <div className="network-lead"><div className="section-label">01A / OUR BACKGROUND</div><h2>Experience<br />you can <i>build on.</i></h2><p>Backed by established family manufacturing experience since 1963.</p></div>
            <div className="network-content"><div className="network-note"><span className="network-note-mark">✳</span><span>ASSOCIATED FAMILY BUSINESSES<br />& MANUFACTURING PARTNERS</span></div><div className="partner-business"><div className="partner-meta"><span>EST. 2001</span><span>NOIDA · UTTAR PRADESH</span></div><h3>Bonny Poly Plast <i>Pvt. Ltd.</i></h3><p>Baby feeding bottles, baby nipples and PET bottles.</p><div className="partner-line"><span>01</span><span>Established manufacturing experience</span></div></div><div className="partner-business"><div className="partner-meta"><span>EST. 1998</span><span>NOIDA · UTTAR PRADESH</span></div><h3>Bonny Baby Care <i>Pvt. Ltd.</i></h3><p>Baby feeding bottles, baby nipples, silicone soothers, baby teethers and other baby-care products.</p><div className="partner-line"><span>02</span><span>Established manufacturing experience</span></div></div><div className="network-media"><img src="/assets/factory-1_6d60273a.jpeg" alt="Associated manufacturing partner factory floor" /><span>MANUFACTURING NETWORK / NOIDA</span></div><div className="network-footnote"><span>Manufacturing partners, not a BONNE TRINITY-owned factory.</span><ArrowUpRight size={16} /></div></div>
          </div>
        </section>

        <section className="categories-section" id="what-we-do">
          <div className="container">
            <div className="section-heading"><div><div className="section-label">02 / WHAT WE DO</div><h2>Two ways to<br /><i>move forward.</i></h2></div><p>From the first conversation to the final format, our role is to help you find a practical, dependable route to market.</p></div>
            <div className="category-grid">{categories.map(({ number, eyebrow, title, text, details, detailPoints, icon: Icon, tone }) => {
              const isFlippable = title !== "Material solutions";
              const isFlipped = flippedCategory === title;
              return <article className={`category-card ${tone} ${isFlippable ? "category-card-flippable" : ""} ${isFlipped ? "is-flipped" : ""}`} key={title}>
                <div className="category-card-inner">
                  <div className="category-face category-front">
                    <div className="category-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div>
                    <div className="category-bottom"><div className="category-eyebrow">{eyebrow}</div><h3>{title}</h3><p>{text}</p>{isFlippable ? <button type="button" className="category-explore" onClick={() => setFlippedCategory(isFlipped ? null : title)} aria-expanded={isFlipped}>Explore <ArrowUpRight size={19} /></button> : <a className="category-explore" href="#enquire" aria-label={`Enquire about ${title}`}>Explore <ArrowUpRight size={19} /></a>}</div>
                  </div>
                  {isFlippable && <div className="category-face category-back"><div className="category-top"><span>{number} / DETAILS</span><Icon size={22} strokeWidth={1.5} /></div><div className="category-bottom"><div className="category-eyebrow">Built around your brief</div><h3>{title}</h3><p>{details}</p><ul>{detailPoints?.map((point) => <li key={point}>{point}</li>)}</ul><button type="button" className="category-explore category-explore-back" onClick={() => setFlippedCategory(null)}>Back to overview <ArrowUpRight size={19} /></button></div></div>}
                </div>
              </article>;
            })}</div>
          </div>
        </section>

        <section className="showcase-section" id="products">
          <div className="container">
            <div className="section-heading showcase-heading"><div><div className="section-label">02A / PRODUCT SHOWCASE</div><h2>Made for <i>real life.</i></h2></div><p>Explore a selection of product and packaging formats from the BONNE TRINITY range. Share your brief for specifications, quantities and private-label pathways.</p></div>
            <div className="showcase-filters" role="tablist" aria-label="Filter products">{["All products", "Baby care", "Personal hygiene"].map((filter) => <button key={filter} className={productFilter === filter ? "active" : ""} onClick={() => setProductFilter(filter)} role="tab" aria-selected={productFilter === filter}>{filter}</button>)}</div>
            <div className="product-grid">{products.filter((product) => productFilter === "All products" || product.category === productFilter).map((product, index) => { const details = productDetails[product.category as keyof typeof productDetails]; return <article className={`product-card product-${product.tone}`} key={product.name}><div className="product-image"><img src={product.image} alt={product.name} loading={index > 2 ? "lazy" : "eager"} /><span className="product-index">{String(index + 1).padStart(2, "0")}</span></div><div className="product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.meta}</p><div className="product-specs"><span>{details.spec}</span><span>{details.moq}</span><span>{details.export}</span></div></div><a href="#enquire" aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={18} /></a></div></article>; })}</div>
            <div className="showcase-footer"><span>Need a specific format, volume or customization?</span><a className="text-link" href="#enquire">Start with your brief <span>↗</span></a></div>
          </div>
        </section>

        <section className="partners-section" id="partners">
          <div className="container partners-grid"><div className="partners-art"><div className="art-circle" /><div className="art-cross">＋</div><div className="art-note"><Globe2 size={17} /><span>OPEN TO<br />THE WORLD</span></div><div className="art-word">PARTNER<br /><i>well.</i></div></div><div className="partners-copy"><div className="section-label">03 / WHO WE SERVE</div><h2>Useful at every<br /><i>stage of growth.</i></h2><p>Whether you are sourcing your first range, expanding distribution or building a private-label line, we shape the conversation around your actual brief.</p><div className="audience-list">{audiences.map((item, index) => <Link className="audience-list-item" href="/who-we-serve" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></Link>)}</div></div></div>
        </section>

        <section className="trust-section"><div className="container trust-grid"><div className="trust-lead"><div className="section-label">04 / THE BONNE TRINITY DIFFERENCE</div><h2>Small enough<br />to <i>listen.</i><br />Ready enough<br />to deliver.</h2></div><div className="trust-points"><div className="trust-point"><ShieldCheck size={24} /><div><h3>Dependable by nature</h3><p>Clear communication, thoughtful recommendations and a steady hand from first brief to next step.</p></div></div><div className="trust-point"><Handshake size={24} /><div><h3>Partnership over transaction</h3><p>We build relationships with people who want a long-term business ally, not just another vendor.</p></div></div><div className="trust-point"><Leaf size={24} /><div><h3>Practical, not performative</h3><p>Good ideas need to work in the real world. We keep the process focused, flexible and useful.</p></div></div></div></div></section>

        <section className="enquiry-section" id="enquire"><div className="container enquiry-grid"><div className="enquiry-intro"><div className="section-label">05 / START A CONVERSATION</div><h2>Let’s make<br /><i>something useful.</i></h2><p>Tell us a little about what you are looking for. We’ll come back to you with the right next step.</p><div className="contact-list"><a href="mailto:care@bonnetrinity.com"><Mail size={18} /> care@bonnetrinity.com</a><a href="tel:+919811643325"><Phone size={18} /> +91 98116 43325</a><a href="https://wa.me/918588879611" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div><div className="form-card">{sent ? <div className="success-state"><div className="success-icon"><Check size={24} /></div><div className="section-label">MESSAGE RECEIVED</div><h3>Thank you for reaching out.</h3><p>Our team will review your enquiry and get back to you soon.</p><button className="button button-dark" onClick={() => setSent(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f854a96c-906d-4bd4-8b33-c0be1fc5e4bc"} /><input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" /><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone number<input required type="tel" name="phone" placeholder="+91 00000 00000" /></label><label>Company / organisation<input name="company" placeholder="Company name" /></label></div><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us about your product, volume or sourcing requirement..." /></label><div className="form-foot"><span>We respect your inbox. No noise, just a thoughtful reply.</span><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} <ArrowUpRight size={17} /></button></div></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark brand-logo brand-logo-wide"><img src="/assets/bonne-logo-transparent_6a9211c0.png" alt="BONNE TRINITY" /></span></div><p>Care · Comfort · Smiles.</p><a href="https://www.linkedin.com/company/bonne-trinity/" target="_blank" rel="noreferrer" aria-label="BONNE TRINITY on LinkedIn"><Linkedin size={18} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BONNE TRINITY. All rights reserved.</span><span>53A/11 Rama Road, Kirti Nagar, New Delhi — 110015</span><span>GSTIN 07ABGFB9745E1ZB</span></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
