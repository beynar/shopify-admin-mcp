# Input Object: `PaymentCustomizationInput`

The input fields to create and update a payment customization.

## Input Fields

- `functionHandle`: `String` — Function handle scoped to your app ID.
- `title`: `String` — The title of the payment customization.
- `enabled`: `Boolean` — The enabled status of the payment customization.
- `metafields`: `[MetafieldInput!]` = `[]` — Additional metafields to associate to the payment customization.

## Related Types

- [MetafieldInput](../../types/inputs/MetafieldInput.md)
