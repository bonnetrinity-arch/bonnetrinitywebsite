import LegalPage from "@/components/LegalPage";

export default function PrivacyNotice() {
  return (
    <LegalPage eyebrow="PRIVACY NOTICE" title={<>How we handle <i>your information.</i></>} text="This notice explains what information BONNE TRINITY collects through this website, how we use it, and the choices you have." updated="September 2026" seoTitle="Privacy Notice" path="/privacy-notice">
      <section>
        <h3>Information we collect</h3>
        <p>We collect information you provide directly to us, such as when you submit a business enquiry or contact form on this website. This may include your name, company name, email address, phone number and the details of your enquiry.</p>
        <p>We do not knowingly collect sensitive personal information, and we do not require account creation or payment details to use this website.</p>
      </section>
      <section>
        <h3>How we use it</h3>
        <ul>
          <li>To respond to your enquiries and understand your sourcing, distribution or partnership requirements.</li>
          <li>To follow up on a conversation you've started with our team.</li>
          <li>To improve our website and the products and information we offer.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </section>
      <section>
        <h3>Sharing of information</h3>
        <p>We may share your information with our associated manufacturing and sourcing partners strictly where necessary to respond to a specific enquiry (for example, a product or capacity question), and with service providers who help us operate this website (such as form and email delivery services), under confidentiality obligations.</p>
      </section>
      <section>
        <h3>Cookies</h3>
        <p>This website may use basic cookies or similar technologies to help it function correctly and understand overall site usage. You can control cookies through your browser settings.</p>
      </section>
      <section>
        <h3>Your choices</h3>
        <p>You can ask us to review, correct or delete the personal information we hold about you, or ask us to stop contacting you, at any time by writing to us at the email address below.</p>
      </section>
      <section>
        <h3>Contact us</h3>
        <p>For any questions about this Privacy Notice or how your information is handled, write to us at <a href="mailto:care@bonnetrinity.com">care@bonnetrinity.com</a>.</p>
      </section>
    </LegalPage>
  );
}
