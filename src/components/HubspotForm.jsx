import { useEffect, useRef } from "react";
import { HUBSPOT_CONFIG, isHubspotConfigured } from "../config/hubspot.js";

const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";

export default function HubspotForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isHubspotConfigured() || !containerRef.current) return;

    const target = containerRef.current;
    const mount = () => {
      if (!window.hbspt) return;
      target.innerHTML = "";
      window.hbspt.forms.create({
        region: HUBSPOT_CONFIG.region,
        portalId: HUBSPOT_CONFIG.portalId,
        formId: HUBSPOT_CONFIG.formId,
        target: `#${target.id}`,
      });
    };

    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (window.hbspt) {
      mount();
    } else {
      if (!script) {
        script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", mount);
      return () => script.removeEventListener("load", mount);
    }
  }, []);

  return <div id="hubspot-form-target" ref={containerRef} className="hubspot-form-wrap" />;
}
