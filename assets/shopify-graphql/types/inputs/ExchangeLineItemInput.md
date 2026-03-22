# Input Object: `ExchangeLineItemInput`

The input fields for new line items to be added to the order as part of an exchange.

## Input Fields

- `giftCardCodes`: `[String!]` — The gift card codes associated with the physical gift cards.
- `variantId`: `ID` — The ID of the product variant to be added to the order as part of an exchange.
- `quantity`: `Int!` — The quantity of the item to be added.
- `appliedDiscount`: `ExchangeLineItemAppliedDiscountInput` — The discount to be applied to the exchange line item.

## Related Types

- [ExchangeLineItemAppliedDiscountInput](../../types/inputs/ExchangeLineItemAppliedDiscountInput.md)
