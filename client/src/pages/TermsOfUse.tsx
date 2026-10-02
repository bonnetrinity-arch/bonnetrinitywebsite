import LegalPage from "@/components/LegalPage";

export default function TermsOfUse() {
  return (
    <LegalPage eyebrow="TERMS OF USE" title={<>The fine print, <i>kept simple.</i></>} text="These terms govern your use of the BONNE TRINITY website. By using this site, you agree to them." updated="September 2026" seoTitle="Terms of Use" path="/terms-of-use">
      <section>
        <h3>About this website</h3>
        <p>This website is operated by BONNE TRINITY, a B2B company focused on sourcing, developing and supplying Baby Care and Personal Hygiene products for distributors and retailers. Content on this site — including product information, images and descriptions — is provided for general informational purposes for prospective business partners.</p>
      </section>
      <section>
        <h3>Use of the site</h3>
        <ul>
          <li>This website and its content are intended for legitimate business enquiries related to sourcing, distribution, private label and OEM conversations.</li>
          <li>You agree not to misuse this website, attempt to gain unauthorised access to it, or use it in a way that could damage or overburden it.</li>
          <li>Enquiry and contact forms should be used to submit genuine business enquiries only.</li>
        </ul>
      </section>
      <section>
        <h3>Intellectual property</h3>
        <p>The BONNE TRINITY name, logo, product names and the content of this website are the property of BONNE TRINITY or its associated partners, and may not be copied, reproduced or used without our prior written permission.</p>
      </section>
      <section>
        <h3>Product information</h3>
        <p>We make reasonable efforts to keep product descriptions, specifications and images accurate and up to date. However, actual products, packaging and specifications may vary, and final details for any order are confirmed directly with our team as part of the business enquiry process.</p>
      </section>
      <section>
        <h3>Limitation of liability</h3>
        <p>This website and its content are provided on an "as is" basis. To the extent permitted by law, BONNE TRINITY is not liable for any indirect or consequential loss arising from your use of this website. Nothing in these terms limits liability that cannot be excluded under applicable law.</p>
      </section>
      <section>
        <h3>Changes to these terms</h3>
        <p>We may update these Terms of Use from time to time to reflect changes to our business or this website. The date at the top of this page shows when it was last updated.</p>
      </section>
      <section>
        <h3>Governing law</h3>
        <p>These terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in New Delhi, India.</p>
      </section>
      <section>
        <h3>Contact us</h3>
        <p>For any questions about these Terms of Use, write to us at <a href="mailto:care@bonnetrinity.com">care@bonnetrinity.com</a>.</p>
      </section>
    </LegalPage>
  );
}
