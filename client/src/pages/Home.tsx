import { FormEvent, useState } from "react";
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
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const categories = [
  {
    number: "01",
    eyebrow: "Gentle by design",
    title: "Baby care",
    text: "Thoughtful, dependable solutions for everyday care — made for brands and buyers who do not compromise on comfort.",
    icon: Baby,
    tone: "terracotta",
  },
  {
    number: "02",
    eyebrow: "Made for daily life",
    title: "Personal hygiene",
    text: "High-utility formats and materials that help partners build products people trust and reach for every day.",
    icon: Sparkles,
    tone: "sage",
  },
  {
    number: "03",
    eyebrow: "Built around your brief",
    title: "Material solutions",
    text: "Flexible sourcing and private-label pathways for brands, distributors and retailers looking for a responsive partner.",
    icon: PackageCheck,
    tone: "sand",
  },
];

const audiences = ["Brands", "Distributors", "Retailers", "Private-label / OEM"];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
    data.set("access_key", accessKey);
    data.set("subject", "New BONNE TRINITY website enquiry");
    data.set("from_name", "BONNE TRINITY Website");
    data.set("botcheck", "");

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
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
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Material solutions for better care.</span>
          <div className="topline-contact">
            <a href="mailto:care@bonnetrinity.com">care@bonnetrinity.com</a>
            <span className="topline-dot" />
            <a href="tel:+919811643325">+91 98116 43325</a>
          </div>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="BONNE TRINITY home">
            <span className="brand-mark"><span>BT</span></span>
            <span className="brand-name">BONNE <em>TRINITY</em></span>
          </a>
          <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
            <a href="#what-we-do" onClick={() => setMobileOpen(false)}>What we do</a>
            <a href="#partners" onClick={() => setMobileOpen(false)}>Who we serve</a>
            <a href="#about" onClick={() => setMobileOpen(false)}>About us</a>
            <a className="nav-cta" href="#enquire" onClick={() => setMobileOpen(false)}>Start a conversation <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT B2B PARTNER · INDIA</div>
              <h1>Better everyday care, <i>made possible.</i></h1>
              <p className="hero-lede">BONNE TRINITY brings together baby care, personal hygiene and material solutions for partners building products people rely on.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#what-we-do">Explore our capabilities <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#enquire">Tell us what you need <span>↗</span></a>
              </div>
              <div className="hero-proof"><Check size={15} /> Built for brands, buyers and long-term partnerships</div>
            </div>
            <div className="hero-visual" aria-label="Abstract editorial illustration">
              <div className="visual-stamp"><span>BT</span><small>CARE<br />MATERIALS<br />PARTNERS</small></div>
              <div className="visual-card visual-card-back"><span>01</span><strong>Care is<br /><i>closer</i> than<br />you think.</strong></div>
              <div className="visual-card visual-card-front">
                <div className="card-topline"><span>FIELD NOTE / 001</span><span>NEW DELHI</span></div>
                <div className="bottle-shape"><div className="bottle-cap" /><div className="bottle-body"><span>bonne</span><small>everyday<br />essentials</small></div></div>
                <div className="card-bottomline"><span>FORM / FUNCTION</span><span>01—03</span></div>
              </div>
              <div className="visual-caption">A considered approach to<br /><strong>everyday essentials.</strong></div>
            </div>
          </div>
          <div className="hero-scroll"><span>Scroll to discover</span><ChevronDown size={18} /></div>
        </section>

        <section className="marquee" aria-label="Our focus areas">
          <div className="marquee-track"><span>CARE</span><span className="marquee-dot">✳</span><span>MATERIALS</span><span className="marquee-dot">✳</span><span>PARTNERSHIPS</span><span className="marquee-dot">✳</span><span>CARE</span><span className="marquee-dot">✳</span><span>MATERIALS</span></div>
        </section>

        <section className="intro-section" id="about">
          <div className="container intro-grid">
            <div className="section-label">01 / WHO WE ARE</div>
            <div className="intro-copy"><h2>A grounded partner for <i>growing brands.</i></h2><p>We are BONNE TRINITY — a New Delhi-based partnership company working across baby care, personal hygiene and material solutions. We make it easier for ambitious businesses to find the right product pathway, move with confidence and grow with a partner who listens.</p><a className="text-link" href="#enquire">Meet us in a conversation <span>↗</span></a></div>
            <div className="intro-aside"><div className="aside-number">02</div><p>Partners who value clarity, quality and responsive collaboration.</p></div>
          </div>
        </section>

        <section className="categories-section" id="what-we-do">
          <div className="container">
            <div className="section-heading"><div><div className="section-label">02 / WHAT WE DO</div><h2>Three ways to<br /><i>move forward.</i></h2></div><p>From the first conversation to the final format, our role is to help you find a practical, dependable route to market.</p></div>
            <div className="category-grid">{categories.map(({ number, eyebrow, title, text, icon: Icon, tone }) => <article className={`category-card ${tone}`} key={title}><div className="category-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><div className="category-bottom"><div className="category-eyebrow">{eyebrow}</div><h3>{title}</h3><p>{text}</p><a href="#enquire" aria-label={`Enquire about ${title}`}>Explore <ArrowUpRight size={16} /></a></div></article>)}</div>
          </div>
        </section>

        <section className="partners-section" id="partners">
          <div className="container partners-grid"><div className="partners-art"><div className="art-circle" /><div className="art-cross">＋</div><div className="art-note"><Globe2 size={17} /><span>OPEN TO<br />THE WORLD</span></div><div className="art-word">PARTNER<br /><i>well.</i></div></div><div className="partners-copy"><div className="section-label">03 / WHO WE SERVE</div><h2>Useful at every<br /><i>stage of growth.</i></h2><p>Whether you are sourcing your first range, expanding distribution or building a private-label line, we shape the conversation around your actual brief.</p><div className="audience-list">{audiences.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></div>)}</div></div></div>
        </section>

        <section className="trust-section"><div className="container trust-grid"><div className="trust-lead"><div className="section-label">04 / THE BONNE TRINITY DIFFERENCE</div><h2>Small enough<br />to <i>listen.</i><br />Ready enough<br />to deliver.</h2></div><div className="trust-points"><div className="trust-point"><ShieldCheck size={24} /><div><h3>Dependable by nature</h3><p>Clear communication, thoughtful recommendations and a steady hand from first brief to next step.</p></div></div><div className="trust-point"><Handshake size={24} /><div><h3>Partnership over transaction</h3><p>We build relationships with people who want a long-term business ally, not just another vendor.</p></div></div><div className="trust-point"><Leaf size={24} /><div><h3>Practical, not performative</h3><p>Good ideas need to work in the real world. We keep the process focused, flexible and useful.</p></div></div></div></div></section>

        <section className="enquiry-section" id="enquire"><div className="container enquiry-grid"><div className="enquiry-intro"><div className="section-label">05 / START A CONVERSATION</div><h2>Let’s make<br /><i>something useful.</i></h2><p>Tell us a little about what you are looking for. We’ll come back to you with the right next step.</p><div className="contact-list"><a href="mailto:care@bonnetrinity.com"><Mail size={18} /> care@bonnetrinity.com</a><a href="tel:+919811643325"><Phone size={18} /> +91 98116 43325</a><a href="https://wa.me/918588879611" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div><div className="form-card">{sent ? <div className="success-state"><div className="success-icon"><Check size={24} /></div><div className="section-label">MESSAGE RECEIVED</div><h3>Thank you for reaching out.</h3><p>Our team will review your enquiry and get back to you soon.</p><button className="button button-dark" onClick={() => setSent(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"} /><input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" /><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone number<input required type="tel" name="phone" placeholder="+91 00000 00000" /></label><label>Company / organisation<input name="company" placeholder="Company name" /></label></div><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us about your product, volume or sourcing requirement..." /></label><div className="form-foot"><span>We respect your inbox. No noise, just a thoughtful reply.</span><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send enquiry"} <ArrowUpRight size={17} /></button></div></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-top"><div className="brand footer-brand"><span className="brand-mark"><span>BT</span></span><span className="brand-name">BONNE <em>TRINITY</em></span></div><p>Material solutions for better care.</p><a href="https://www.linkedin.com/company/bonne-trinity/" target="_blank" rel="noreferrer" aria-label="BONNE TRINITY on LinkedIn"><Linkedin size={18} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BONNE TRINITY. All rights reserved.</span><span>53A/11 Rama Road, Kirti Nagar, New Delhi — 110015</span><span>GSTIN 07ABGFB9745E1ZB</span></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/918588879611" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
