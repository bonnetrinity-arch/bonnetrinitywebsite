import { ReactNode } from "react";
import SiteLayout, { PageIntro } from "@/components/SiteLayout";
import Seo from "@/components/Seo";

export default function LegalPage({ eyebrow, title, text, updated, children, seoTitle, path }: { eyebrow: string; title: ReactNode; text: string; updated: string; children: ReactNode; seoTitle: string; path: string }) {
  return (
    <SiteLayout>
      <Seo title={`${seoTitle} | BONNE TRINITY`} description={text} path={path} />
      <main>
        <PageIntro eyebrow={eyebrow} title={title} text={text} />
        <section className="legal-page">
          <div className="container">
            <p className="legal-updated">Last updated: {updated}</p>
            {children}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
