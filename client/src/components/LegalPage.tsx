import { ReactNode } from "react";
import SiteLayout, { PageIntro } from "@/components/SiteLayout";

export default function LegalPage({ eyebrow, title, text, updated, children }: { eyebrow: string; title: ReactNode; text: string; updated: string; children: ReactNode }) {
  return (
    <SiteLayout>
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
