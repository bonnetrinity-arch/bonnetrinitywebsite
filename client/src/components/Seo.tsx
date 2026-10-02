import { Helmet } from "react-helmet-async";

const SITE_URL = "https://bonnetrinity.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/hero-carousel/hero-2.webp`;

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  structuredData,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}) {
  const canonical = `${SITE_URL}${path}`;
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BONNE TRINITY" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BONNE TRINITY",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/bonne-wordmark_7f2a91c3.png`,
  description: "BONNE TRINITY is a B2B company sourcing, developing and supplying baby care and personal hygiene products for distributors and retailers in India and global markets.",
  sameAs: ["https://www.linkedin.com/company/bonne-trinity/"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BONNE TRINITY",
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  telephone: "+91-85888-79611",
  address: {
    "@type": "PostalAddress",
    streetAddress: "53A/11 Rama Road, Kirti Nagar",
    addressLocality: "New Delhi",
    postalCode: "110015",
    addressCountry: "IN",
  },
};
