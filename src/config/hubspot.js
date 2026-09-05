// Fill these in once the HubSpot form is created, then the live embed
// replaces the placeholder form automatically — no other code changes needed.
//
// Where to find these values: HubSpot > Marketing > Forms > (your form) > Embed code.
export const HUBSPOT_CONFIG = {
  region: "", // e.g. "na1"
  portalId: "", // e.g. "12345678"
  formId: "", // e.g. "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
};

export const isHubspotConfigured = () =>
  Boolean(HUBSPOT_CONFIG.region && HUBSPOT_CONFIG.portalId && HUBSPOT_CONFIG.formId);
