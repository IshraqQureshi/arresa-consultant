const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/img/logo.png" alt="Arresa Consultant" width="163" height="66" fetchPriority="low" />
            <p>Helping Kenyan entrepreneurs build U.S. businesses — completely online, affordable, and stress-free.</p>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>📍 Based in Kenya</li>
              <li>🌐 Serving clients internationally</li>
              <li>💬 WhatsApp enquiries welcome</li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">
          &copy; {year} Arresa Consultant. All rights reserved. &middot; U.S. LLC Formation Services for Kenyan
          Entrepreneurs
        </p>
      </div>
    </footer>
  );
}
