import { useEffect } from "react";
import { HUBSPOT_CONFIG } from "../config/hubspot.js";

export default function HubspotForm() {
  const { region, portalId, formId } = HUBSPOT_CONFIG;
  const scriptSrc = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;

  useEffect(() => {
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.defer = true;
    document.body.appendChild(script);
  }, [scriptSrc]);

  return (
    <div
      className="hs-form-frame hubspot-form-wrap"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}
