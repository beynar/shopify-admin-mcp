# Input Object: `ValidationUpdateInput`

The input fields required to update a validation.

## Input Fields

- `enable`: `Boolean` = `false` — Whether the validation should be live on the merchant checkout.
- `blockOnFailure`: `Boolean` = `false` — Whether the validation should block on failures other than expected violations.
- `metafields`: `[MetafieldInput!]` = `[]` — Additional metafields to associate to the validation.
- `title`: `String` — The title of the validation.

## Related Types

- [MetafieldInput](../../types/inputs/MetafieldInput.md)
