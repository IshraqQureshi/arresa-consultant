import { useEffect, useRef } from "react";
import { HUBSPOT_CONFIG } from "../config/hubspot.js";

export default function HubspotForm() {
  const { region, portalId, formId } = HUBSPOT_CONFIG;
  const scriptSrc = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
  const containerRef = useRef(null);

  // Don't compete with the initial page load for network/main-thread time —
  // only fetch and run HubSpot's embed script once this section is about
  // to be visible.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const loadScript = () => {
      if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.defer = true;
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadScript();
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [scriptSrc]);

  return (
    <div
      ref={containerRef}
      className="hs-form-frame hubspot-form-wrap"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}
