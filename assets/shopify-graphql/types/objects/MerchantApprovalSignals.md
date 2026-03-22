# Object: `MerchantApprovalSignals`

Merchant approval for accelerated onboarding to channel integration apps.

## Fields

- `identityVerified`: `Boolean!` — Whether the shop's Shopify Payments account identity is verified. Returns `false` if the identity is unverified or if the shop doesn't have a Shopify Payments account.
- `verifiedByShopify`: `Boolean!` — Whether Shopify has pre-verified the merchant's business for onboarding to channel integration apps. Returns `false` if the shop isn't marked for verification.
- `verifiedByShopifyTier`: `String!` — Which tier of the Shopify verification was determined for the merchant's business for onboarding to channel integration apps.
