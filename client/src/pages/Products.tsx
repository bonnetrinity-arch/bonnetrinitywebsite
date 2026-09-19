import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { CTASection, PageIntro, products } from "@/components/SiteLayout";

export default function Products() {
  const [filter, setFilter] = useState("All products");
  const filters = ["All products", "Baby care", "Personal hygiene", "Material solutions"];
  const shown = products.filter((p) => filter === "All products" || p.category === filter);
  return <SiteLayout><main><PageIntro eyebrow="01 / PRODUCT RANGE" title={<>Made for <i>real life.</i></>} text="A focused range of everyday care products and material formats, available for distribution, private label and OEM conversations." />
    <section className="inner-products"><div className="container"><div className="inner-filter-bar">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="inner-product-grid">{shown.map((product, i) => <article className={`product-card product-${product.tone}`} key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span className="product-index">{String(i + 1).padStart(2, "0")}</span></div><div className="product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.meta}</p><div className="product-specs"><span>{product.spec}</span><span>{product.moq}</span><span>{product.export}</span></div></div><Link href={`/enquire?product=${encodeURIComponent(product.name)}`} aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={18} /></Link></div></article>)}</div></div></section><CTASection title="Need a custom range?" /></main></SiteLayout>;
}
