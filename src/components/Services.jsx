import { useState } from "react";
import { SERVICE_TABS } from "../data/content.js";
import { TickBadge } from "./Icons.jsx";

export default function Services() {
  const [activeId, setActiveId] = useState(SERVICE_TABS[0].id);
  const active = SERVICE_TABS.find((tab) => tab.id === activeId) ?? SERVICE_TABS[0];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Complete U.S. Business Setup Services</h2>
          <p className="section-sub">
            From registration to compliance — everything your U.S. business needs, handled by experts from Kenya.
          </p>
        </div>

        <div className="services-panel">
          <div className="tab-list" role="tablist" aria-label="Our services">
            {SERVICE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={tab.id === activeId}
                aria-controls={`panel-${tab.id}`}
                className={`tab-btn ${tab.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(tab.id)}
              >
                <span className="tab-icon" aria-hidden="true">
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            <div
              className="tab-panel is-active"
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              key={active.id}
            >
              <div className="tab-panel-icon" aria-hidden="true">
                {active.icon}
              </div>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <ul className="check-list">
                {active.items.map((item) => (
                  <li key={item}>
                    <TickBadge />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
