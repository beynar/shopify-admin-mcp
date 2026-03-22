# Object: `CalculatedDraftOrder`

Calculated pricing, taxes, and discounts for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). Includes the complete financial breakdown with line items, discounts, shipping costs, tax calculations, and totals in both shop and presentment currencies.

Available [`ShippingRate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate) options are included when a valid shipping address and line items are present.

> Note:
> Returns alerts and warnings when issues occur during calculation, such as insufficient inventory or incompatible discounts.

## Fields

- `acceptAutomaticDiscounts`: `Boolean` — Whether or not to accept automatic discounts on the draft order during calculation.
- `alerts`: `[ResourceAlert!]!` — The list of alerts raised while calculating.
- `allVariantPricesOverridden`: `Boolean!` — Whether all variant prices have been overridden.
- `anyVariantPricesOverridden`: `Boolean!` — Whether any variant prices have been overridden.
- `appliedDiscount`: `DraftOrderAppliedDiscount` — The custom order-level discount applied.
- `availableShippingRates`: `[ShippingRate!]!` — The available shipping rates.
- `billingAddressMatchesShippingAddress`: `Boolean!` — Whether the billing address matches the shipping address.
- `currencyCode`: `CurrencyCode!` — The shop currency used for calculation.
- `customer`: `Customer` — The customer who will be sent an invoice.
- `discountCodes`: `[String!]!` — All discount codes applied.
- `lineItems`: `[CalculatedDraftOrderLineItem!]!` — The list of the line items in the calculated draft order.
- `lineItemsSubtotalPrice`: `MoneyBag!` — A subtotal of the line items and corresponding discounts,
- `marketName`: `String!` *(deprecated)* — The name of the selected market.
- `marketRegionCountryCode`: `CountryCode!` *(deprecated)* — The selected country code that determines the pricing.
- `phone`: `String` — The assigned phone number.
- `platformDiscounts`: `[DraftOrderPlatformDiscount!]!` — The list of platform discounts applied.
- `presentmentCurrencyCode`: `CurrencyCode!` — The payment currency used for calculation.
- `purchasingEntity`: `PurchasingEntity` — The purchasing entity.
- `shippingLine`: `ShippingLine` — The line item containing the shipping information and costs.
- `subtotalPrice`: `Money!` *(deprecated)* — The subtotal, in shop currency, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.
- `subtotalPriceSet`: `MoneyBag!` — The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.
- `taxLines`: `[TaxLine!]!` — The list of of taxes lines charged for each line item and shipping line.
- `taxesIncluded`: `Boolean!` — Whether the line item prices include taxes.
- `totalDiscountsSet`: `MoneyBag!` — Total discounts.
- `totalLineItemsPriceSet`: `MoneyBag!` — Total price of line items, excluding discounts.
- `totalPrice`: `Money!` *(deprecated)* — The total price, in shop currency, includes taxes, shipping charges, and discounts.
- `totalPriceSet`: `MoneyBag!` — The total price, includes taxes, shipping charges, and discounts.
- `totalQuantityOfLineItems`: `Int!` — The sum of individual line item quantities.
- `totalShippingPrice`: `Money!` *(deprecated)* — The total shipping price in shop currency.
- `totalShippingPriceSet`: `MoneyBag!` — The total shipping price.
- `totalTax`: `Money!` *(deprecated)* — The total tax in shop currency.
- `totalTaxSet`: `MoneyBag!` — The total tax.
- `transformerFingerprint`: `String` — Fingerprint of the current cart.
- `warnings`: `[DraftOrderWarning!]!` — The list of warnings raised while calculating.

## Related Types

- [CalculatedDraftOrderLineItem](../../types/objects/CalculatedDraftOrderLineItem.md)
- [CountryCode](../../types/enums/CountryCode.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [Customer](../../types/objects/Customer.md)
- [DraftOrderAppliedDiscount](../../types/objects/DraftOrderAppliedDiscount.md)
- [DraftOrderPlatformDiscount](../../types/objects/DraftOrderPlatformDiscount.md)
- [DraftOrderWarning](../../types/interfaces/DraftOrderWarning.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [PurchasingEntity](../../types/unions/PurchasingEntity.md)
- [ResourceAlert](../../types/objects/ResourceAlert.md)
- [ShippingLine](../../types/objects/ShippingLine.md)
- [ShippingRate](../../types/objects/ShippingRate.md)
- [TaxLine](../../types/objects/TaxLine.md)
