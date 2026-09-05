// Fill these in once the HubSpot form is created, then the live embed
// replaces the placeholder form automatically — no other code changes needed.
//
// Where to find these values: HubSpot > Marketing > Forms > (your form) > Embed code.
export const HUBSPOT_CONFIG = {
  region: "eu1",
  portalId: "149263675",
  formId: "b5d61c58-e1ef-4fdc-991f-ee242e8218a2",
};

export const isHubspotConfigured = () =>
  Boolean(HUBSPOT_CONFIG.region && HUBSPOT_CONFIG.portalId && HUBSPOT_CONFIG.formId);
