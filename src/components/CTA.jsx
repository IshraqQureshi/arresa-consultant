import { useState } from "react";
import { BUSINESS_TYPES, US_STATES } from "../data/content.js";
import { isHubspotConfigured } from "../config/hubspot.js";
import HubspotForm from "./HubspotForm.jsx";
import SearchableSelect from "./SearchableSelect.jsx";

// Placeholder enquiry form shown until the HubSpot form (src/config/hubspot.js)
// is configured — matches the approved design pixel-for-pixel. Once HubSpot
// IDs are set, HubspotForm renders instead and this is no longer used.
function PlaceholderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="form-success is-visible">
        <span className="check-badge" aria-hidden="true">
          ✓
        </span>
        <h3>Thank you!</h3>
        <p>Your enquiry has been received. We typically respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" autoComplete="email" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input type="tel" id="phone" name="phone" placeholder="+254 ..." autoComplete="tel" required />
      </div>

      <div className="form-group">
        <label htmlFor="businessType">Type of Business</label>
        <select id="businessType" name="businessType" defaultValue="" required>
          <option value="" disabled>
            Select your business type
          </option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <SearchableSelect
          id="state"
          name="state"
          label="Preferred U.S. State"
          placeholder="Search for a state..."
          options={US_STATES}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message (Optional)</label>
        <textarea id="message" name="message" placeholder="Tell us about your business goals..." />
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send My Enquiry"}
      </button>
      <p className="form-note">We typically respond within 24 hours. No spam, ever.</p>
    </form>
  );
}

export default function CTA() {
  const hubspotReady = isHubspotConfigured();

  return (
    <section className="cta" id="get-started">
      <div className="container">
        <h2 className="section-title">Ready to Launch Your U.S. Business?</h2>
        <p className="section-sub">
          Contact us today. We will guide you through every step — from choosing the right state to getting your
          EIN and business bank account.
        </p>

        <div className="form-card">
          {/* <h3>Get Started Today</h3> */}
          {hubspotReady ? <HubspotForm /> : <PlaceholderForm />}
        </div>
      </div>
    </section>
  );
}
