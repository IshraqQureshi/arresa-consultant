import { BENEFITS } from "../data/content.js";

export default function Benefits() {
  return (
    <section className="benefits" id="why-llc">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Key Benefits</span>
          <h2 className="section-title">Why Register a U.S. LLC?</h2>
          <p className="section-sub">
            A U.S. LLC is one of the most powerful structures for Kenyan entrepreneurs who want to expand
            internationally.
          </p>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-icon" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
