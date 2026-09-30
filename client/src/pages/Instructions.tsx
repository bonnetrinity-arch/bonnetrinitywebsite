import LegalPage from "@/components/LegalPage";

export default function Instructions() {
  return (
    <LegalPage eyebrow="INSTRUCTIONS" title={<>Using and caring for <i>your BONNE products.</i></>} text="General guidance for the safe use, cleaning and storage of BONNE TRINITY baby care and personal hygiene products." updated="September 2026">
      <section>
        <h3>Before first use</h3>
        <p>Wash and sterilize all feeding items — bottles, sippers, nipples and teethers — before their first use, and inspect every part for damage or wear. Discard and replace any item that shows cracks, tears or discolouration.</p>
      </section>
      <section>
        <h3>Feeding bottles, sippers and soothers</h3>
        <ul>
          <li>Sterilize by boiling for 5 minutes, or using a steam steriliser, before first use and regularly thereafter.</li>
          <li>Check the nipple or spout for wear before every use — pull it in different directions to make sure it does not tear or come apart.</li>
          <li>Never leave a baby unattended while feeding, and never use a feeding item as a substitute for adult supervision.</li>
          <li>Hand wash or use the top rack of a dishwasher; avoid abrasive cleaners that can scratch silicone or glass surfaces.</li>
          <li>Replace nipples, spouts and soothers every 4–6 weeks, or sooner if any damage is noticed.</li>
        </ul>
      </section>
      <section>
        <h3>Baby toothbrushes and finger brushes</h3>
        <ul>
          <li>Rinse thoroughly with clean water before and after every use.</li>
          <li>Store in the provided cover or case to keep bristles clean and hygienic between uses.</li>
          <li>Replace every 1–2 months, or sooner if bristles fray.</li>
          <li>Always supervise young children during brushing.</li>
        </ul>
      </section>
      <section>
        <h3>Sanitary pads and adult diapers</h3>
        <ul>
          <li>Store in a cool, dry place away from direct sunlight.</li>
          <li>Check the size guide on the pack before use to choose the right fit.</li>
          <li>Change regularly for hygiene and comfort, and dispose of used products responsibly.</li>
          <li>Discontinue use and consult a doctor if any irritation occurs.</li>
        </ul>
      </section>
      <section>
        <h3>General safety</h3>
        <p>Keep all packaging, small parts and caps away from children to avoid choking hazards. Do not expose products to direct flame or microwave unless specifically indicated as microwave-safe on the packaging. If you have questions about using a specific BONNE product, reach out to our team and we'll be glad to help.</p>
      </section>
    </LegalPage>
  );
}
