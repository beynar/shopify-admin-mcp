# Object: `ExchangeV2LineItem`

Contains information about an item in the exchange.

## Fields

- `customAttributes`: `[Attribute!]!` — A list of attributes that represent custom features or special requests.
- `discountedTotalSet`: `MoneyBag!` — The total line price, in shop and presentment currencies, after discounts are applied.
- `discountedUnitPriceSet`: `MoneyBag!` — The price, in shop and presentment currencies,
- `fulfillmentService`: `FulfillmentService` — Name of the service provider who fulfilled the order.
- `giftCard`: `Boolean!` — Indiciates if this line item is a gift card.
- `giftCards`: `[GiftCard!]!` — The gift cards associated with the line item.
- `isGiftCard`: `Boolean!` — Whether the line item represents the purchase of a gift card.
- `lineItem`: `LineItem` — The line item associated with this object.
- `name`: `String!` — The name of the product.
- `originalTotalSet`: `MoneyBag!` — The total price, in shop and presentment currencies, before discounts are applied.
- `originalUnitPriceSet`: `MoneyBag!` — The price, in shop and presentment currencies,
- `quantity`: `Int!` — The number of products that were purchased.
- `requiresShipping`: `Boolean!` — Whether physical shipping is required for the variant.
- `sku`: `String` — The SKU number of the product variant.
- `taxLines`: `[TaxLine!]!` — The TaxLine object connected to this line item.
- `taxable`: `Boolean!` — Whether the variant is taxable.
- `title`: `String!` — The title of the product or variant. This field only applies to custom line items.
- `variant`: `ProductVariant` — The product variant of the line item.
- `variantTitle`: `String` — The name of the variant.
- `vendor`: `String` — The name of the vendor who created the product variant.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [FulfillmentService](../../types/objects/FulfillmentService.md)
- [GiftCard](../../types/objects/GiftCard.md)
- [LineItem](../../types/objects/LineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
- [TaxLine](../../types/objects/TaxLine.md)
