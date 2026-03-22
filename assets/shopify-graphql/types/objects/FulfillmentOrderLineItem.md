# Object: `FulfillmentOrderLineItem`

Associates an order line item with the quantities that require fulfillment as part of a fulfillment order. Each Fulfillment Order Line Item object tracks the total quantity to fulfill and the remaining quantity yet to be fulfilled, along with details about the line item being fulfilled and pricing information.

The line item provides additional fulfillment data including whether the item requires shipping. Financial summaries show pricing details with discounts applied, while warning messages alert merchants to any issues that might affect fulfillment.

**Implements:** `Node`

## Fields

- `financialSummaries`: `[FulfillmentOrderLineItemFinancialSummary!]!` — The financial summary for the Fulfillment Order's Line Items.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated to the line item's variant.
- `inventoryItemId`: `ID` — The ID of the inventory item.
- `lineItem`: `LineItem!` — The associated order line item.
- `originalUnitPriceSet`: `MoneyBag!` *(deprecated)* — The variant unit price without discounts applied, in shop and presentment currencies.
- `productTitle`: `String!` — The title of the product.
- `remainingQuantity`: `Int!` — The number of units remaining to be fulfilled.
- `requiresShipping`: `Boolean!` — Whether physical shipping is required for the variant.
- `sku`: `String` — The variant SKU number.
- `totalQuantity`: `Int!` — The total number of units to be fulfilled.
- `variant`: `ProductVariant` — The product variant associated to the fulfillment order line item.
- `variantTitle`: `String` — The name of the variant.
- `vendor`: `String` — The name of the vendor who made the variant.
- `warnings`: `[FulfillmentOrderLineItemWarning!]!` — Warning messages for a fulfillment order line item.
- `weight`: `Weight` — The weight of a line item unit.

## Related Types

- [FulfillmentOrderLineItemFinancialSummary](../../types/objects/FulfillmentOrderLineItemFinancialSummary.md)
- [FulfillmentOrderLineItemWarning](../../types/objects/FulfillmentOrderLineItemWarning.md)
- [Image](../../types/objects/Image.md)
- [LineItem](../../types/objects/LineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
- [Weight](../../types/objects/Weight.md)
