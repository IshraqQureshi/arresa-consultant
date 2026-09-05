import { HOW_IT_WORKS_STEPS } from "../data/content.js";
import { ArrowRightIcon } from "./Icons.jsx";

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Simple Process</span>
          <h2 className="section-title light">How It Works</h2>
          <p className="section-sub light">
            Starting your U.S. company from Kenya is simple. Four steps to a fully operational U.S. business.
          </p>
        </div>

        <ol className="steps-grid">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="how-it-works-cta">
          <a href="#get-started" className="btn btn-primary">
            Begin Your Application
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
