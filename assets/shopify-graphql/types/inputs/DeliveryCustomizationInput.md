# Input Object: `DeliveryCustomizationInput`

The input fields to create and update a delivery customization.

## Input Fields

- `functionHandle`: `String` — Function handle scoped to your current app ID. Only finds functions within your app.
- `title`: `String` — The title of the delivery customization.
- `enabled`: `Boolean` — The enabled status of the delivery customization.
- `metafields`: `[MetafieldInput!]` = `[]` — Additional metafields to associate to the delivery customization.

## Related Types

- [MetafieldInput](../../types/inputs/MetafieldInput.md)
