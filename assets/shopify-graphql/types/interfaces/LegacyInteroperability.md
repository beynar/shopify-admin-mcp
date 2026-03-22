# Interface: `LegacyInteroperability`

Interoperability metadata for types that directly correspond to a REST Admin API resource.
For example, on the Product type, LegacyInteroperability returns metadata for the corresponding [Product object](https://shopify.dev/api/admin-graphql/latest/objects/product) in the REST Admin API.

## Fields

- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.

## Possible Types

- [Customer](../../types/objects/Customer.md)
- [DraftOrder](../../types/objects/DraftOrder.md)
- [Fulfillment](../../types/objects/Fulfillment.md)
- [InventoryItem](../../types/objects/InventoryItem.md)
- [Location](../../types/objects/Location.md)
- [MarketingEvent](../../types/objects/MarketingEvent.md)
- [Metafield](../../types/objects/Metafield.md)
- [Order](../../types/objects/Order.md)
- [PriceRule](../../types/objects/PriceRule.md)
- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
- [Refund](../../types/objects/Refund.md)
- [SavedSearch](../../types/objects/SavedSearch.md)
- [ScriptTag](../../types/objects/ScriptTag.md)
- [ShopifyPaymentsDispute](../../types/objects/ShopifyPaymentsDispute.md)
- [ShopifyPaymentsPayout](../../types/objects/ShopifyPaymentsPayout.md)
- [WebhookSubscription](../../types/objects/WebhookSubscription.md)
