# Object: `ScriptTag`

<div class="note"><h4>Theme app extensions</h4>
  <p>If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>

<div class="note"><h4>Script tag deprecation</h4>
  <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>


A script tag represents remote JavaScript code that is loaded into the pages of a shop's storefront or the **Order status** page of checkout.

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `cache`: `Boolean!` — Whether the Shopify CDN can cache and serve the script tag.
- `createdAt`: `DateTime!` — The date and time when the script tag was created.
- `displayScope`: `ScriptTagDisplayScope!` — The page or pages on the online store that the script should be included.
- `id`: `ID!` — A globally-unique ID.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `src`: `URL!` — The URL to the remote script.
- `updatedAt`: `DateTime!` — The date and time when the script tag was last updated.

## Related Types

- [ScriptTagDisplayScope](../../types/enums/ScriptTagDisplayScope.md)
