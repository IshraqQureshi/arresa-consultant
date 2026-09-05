import { WHO_WE_ARE_CHECKLIST, MISSION_LIST } from "../data/content.js";
import { CheckIcon, TickDot } from "./Icons.jsx";

export default function WhoWeAre() {
  return (
    <section className="who-we-are" id="about">
      <div className="container who-grid">
        <div className="who-copy">
          <span className="eyebrow">Who We Are</span>
          <h2 className="section-title">A Team Built for Kenyan Entrepreneurs</h2>
          <p>
            We are a business formation company dedicated to helping entrepreneurs in Kenya establish legally
            structured U.S. companies with confidence. Based in Kenya, we specialize in assisting non-U.S.
            residents who want to access the U.S. market through a professionally registered LLC.
          </p>
          <p>
            Our mission is simple: to make U.S. business formation easy, affordable, transparent, and accessible
            for entrepreneurs in Kenya and international founders alike.
          </p>

          <ul className="who-checklist">
            {WHO_WE_ARE_CHECKLIST.map((item) => (
              <li key={item}>
                <TickDot />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mission-card">
          <h3>Our Mission</h3>
          <blockquote>
            &ldquo;To make U.S. business formation easy, affordable, transparent, and accessible for entrepreneurs
            in Kenya and international founders alike.&rdquo;
          </blockquote>
          <ul className="mission-list">
            {MISSION_LIST.map((item) => (
              <li key={item}>
                <CheckIcon size={14} className="tick" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
