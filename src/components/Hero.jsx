export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="dot" aria-hidden="true" />
            Kenya &rarr; United States
          </span>
          <h1 className="hero-title">
            Launch Your
            <br />
            <span className="accent">U.S. Business</span>
            <br />
            From Kenya
          </h1>
          <p className="hero-text">
            We help Kenyan entrepreneurs register their U.S. LLC, get an EIN, and open a U.S. business bank account
            — completely online, stress-free.
          </p>
          <div className="hero-actions">
            <a href="#get-started" className="btn btn-primary btn-hero">
              Start Your U.S. LLC Today
            </a>
            <a href="#how-it-works" className="btn btn-outline-light btn-hero">
              How It Works
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-frame">
            <img
              src="/img/hero-image.jpeg"
              alt="Kenyan entrepreneur who successfully registered her U.S. LLC through Arresa Consultant"
              width="420"
              height="483"
              loading="eager"
            />
          </div>
          <div className="hero-media-badge">
            <span className="check" aria-hidden="true">
              ✅
            </span>
            LLC Registered
          </div>
        </div>
      </div>
    </section>
  );
}
