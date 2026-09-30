import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { CTASection, PageIntro, products } from "@/components/SiteLayout";

function ProductImage({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;
  if (images.length === 0) return <div className="product-image-placeholder">Product photo coming soon</div>;
  return (
    <>
      <img src={images[index]} alt={name} />
      {hasMultiple && (
        <>
          <button type="button" className="product-image-arrow product-image-arrow-prev" aria-label="Previous image" onClick={(e) => { e.preventDefault(); setIndex((i) => (i - 1 + images.length) % images.length); }}><ChevronLeft size={18} /></button>
          <button type="button" className="product-image-arrow product-image-arrow-next" aria-label="Next image" onClick={(e) => { e.preventDefault(); setIndex((i) => (i + 1) % images.length); }}><ChevronRight size={18} /></button>
          <div className="product-image-dots">{images.map((_, i) => <span key={i} className={i === index ? "active" : ""} />)}</div>
        </>
      )}
    </>
  );
}

export default function Products() {
  const [filter, setFilter] = useState(() => {
    if (typeof window === "undefined") return "All products";
    const c = new URLSearchParams(window.location.search).get("category");
    return c && ["Baby care", "Personal hygiene"].includes(c) ? c : "All products";
  });
  const filters = ["All products", "Baby care", "Personal hygiene"];
  const shown = products.filter((p) => filter === "All products" || p.category === filter);
  return <SiteLayout><main><PageIntro eyebrow="01 / PRODUCT RANGE" title={<>Made for <i>real life.</i></>} text="A focused range of everyday baby care and personal hygiene products, available for distribution, private label and OEM conversations." />
    <section className="inner-products"><div className="container"><div className="inner-filter-bar">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="inner-product-grid">{shown.map((product, i) => <article className={`product-card product-${product.tone}`} key={product.name}><div className="product-image"><ProductImage images={product.images} name={product.name} /><span className="product-index">{String(i + 1).padStart(2, "0")}</span></div><div className="product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.meta}</p><div className="product-specs"><span>{product.spec}</span><span>{product.moq}</span><span>{product.export}</span></div></div><Link href={`/enquire?product=${encodeURIComponent(product.name)}`} aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={18} /></Link></div></article>)}</div></div></section><CTASection title="Need a custom range?" /></main></SiteLayout>;
}
