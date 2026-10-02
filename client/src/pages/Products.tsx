import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { CTASection, PageIntro, products } from "@/components/SiteLayout";
import Seo from "@/components/Seo";

type Product = (typeof products)[number];

function ProductImage({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;
  if (images.length === 0) return <div className="product-image-placeholder">Product photo coming soon</div>;
  return (
    <>
      <img src={images[index]} alt={name} />
      {hasMultiple && (
        <>
          <button type="button" className="product-image-arrow product-image-arrow-prev" aria-label="Previous image" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}><ChevronLeft size={18} /></button>
          <button type="button" className="product-image-arrow product-image-arrow-next" aria-label="Next image" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}><ChevronRight size={18} /></button>
          <div className="product-image-dots">{images.map((_, i) => <span key={i} className={i === index ? "active" : ""} />)}</div>
        </>
      )}
    </>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="product-modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={onClose}>
      <div className="product-modal-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="product-modal-close" onClick={onClose} aria-label="Close product details"><X size={22} /></button>
        <div className="product-modal-image"><ProductImage images={product.images} name={product.name} /></div>
        <div className="product-modal-body">
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
          <p className="product-modal-meta">{product.meta}</p>
          <p className="product-modal-description">{product.description}</p>
          <ul className="product-modal-features">{product.features.map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul>
          <Link className="button button-dark" href={`/enquire?product=${encodeURIComponent(product.name)}`}>Enquire about this product <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function Products() {
  const [filter, setFilter] = useState(() => {
    if (typeof window === "undefined") return "All products";
    const c = new URLSearchParams(window.location.search).get("category");
    return c && ["Baby care", "Personal hygiene"].includes(c) ? c : "All products";
  });
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const filters = ["All products", "Baby care", "Personal hygiene"];
  const shown = products.filter((p) => filter === "All products" || p.category === filter);
  const seoTitle = filter === "All products"
    ? "Baby Care & Personal Hygiene Products — Distributor & Private Label Catalog | BONNE TRINITY"
    : `${filter} Products — Wholesale & Distributor Catalog | BONNE TRINITY`;
  const seoDescription = filter === "All products"
    ? "Browse BONNE TRINITY's baby care and personal hygiene product range — feeding bottles, soothers, sippers, sanitary pads and adult diapers, available for distributors, retailers and private label partners across India."
    : `Explore BONNE TRINITY's ${filter.toLowerCase()} product range for distributors, retailers and private label partners. Wholesale pricing and MOQs available on enquiry.`;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: shown.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.meta,
        category: p.category,
        image: p.images[0] ? `https://bonnetrinity.com${p.images[0]}` : undefined,
      },
    })),
  };
  return <SiteLayout>
    <Seo title={seoTitle} description={seoDescription} path="/products" structuredData={itemListSchema} />
    <main><PageIntro eyebrow="01 / PRODUCT RANGE" title={<>Made for <i>real life.</i></>} text="A focused range of everyday baby care and personal hygiene products, available for distribution, private label and OEM conversations." />
    <section className="inner-products"><div className="container"><div className="inner-filter-bar">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="inner-product-grid">{shown.map((product, i) => <article className={`product-card product-${product.tone}`} key={product.name} onClick={() => setActiveProduct(product)}><div className="product-image"><ProductImage images={product.images} name={product.name} /><span className="product-index">{String(i + 1).padStart(2, "0")}</span></div><div className="product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.meta}</p><div className="product-specs"><span>{product.spec}</span><span>{product.moq}</span><span>{product.export}</span></div></div><Link href={`/enquire?product=${encodeURIComponent(product.name)}`} aria-label={`Enquire about ${product.name}`} onClick={(e) => e.stopPropagation()}><ArrowUpRight size={18} /></Link></div></article>)}</div></div></section><CTASection title="Need a custom range?" /></main>
    {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
  </SiteLayout>;
}
