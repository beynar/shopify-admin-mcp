# Input Object: `OrderCreateLineItemInput`

The input fields for a line item to create for an order.

## Input Fields

- `fulfillmentService`: `String` — The handle of a fulfillment service that stocks the product variant belonging to a line item.
- `giftCard`: `Boolean` = `false` — Whether the item is a gift card. If true, then the item is not taxed or considered for shipping charges.
- `priceSet`: `MoneyBagInput` — The price of the item before discounts have been applied in the shop currency.
- `productId`: `ID` — The ID of the product that the line item belongs to. Can be `null` if the original product associated with the order is deleted at a later date.
- `properties`: `[OrderCreateLineItemPropertyInput!]` — An array of custom information for the item that has been added to the cart. Often used to provide product customization options.
- `quantity`: `Int!` — The number of items that were purchased.
- `requiresShipping`: `Boolean` = `false` — Whether the item requires shipping.
- `sku`: `String` — The item's SKU (stock keeping unit).
- `taxLines`: `[OrderCreateTaxLineInput!]` — A list of tax line objects, each of which details a tax applied to the item.
- `taxable`: `Boolean` = `true` — Whether the item was taxable.
- `title`: `String` — The title of the product.
- `variantId`: `ID` — The ID of the product variant. If both `productId` and `variantId` are provided, then the product ID that corresponds to the `variantId` is used.
- `variantTitle`: `String` — The title of the product variant.
- `vendor`: `String` — The name of the item's supplier.
- `weight`: `WeightInput` — The weight of the line item. This will take precedence over the weight of the product variant, if one was specified.

## Related Types

- [MoneyBagInput](../../types/inputs/MoneyBagInput.md)
- [OrderCreateLineItemPropertyInput](../../types/inputs/OrderCreateLineItemPropertyInput.md)
- [OrderCreateTaxLineInput](../../types/inputs/OrderCreateTaxLineInput.md)
- [WeightInput](../../types/inputs/WeightInput.md)
