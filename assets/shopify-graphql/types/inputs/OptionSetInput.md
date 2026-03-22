# Input Object: `OptionSetInput`

The input fields for creating or updating a product option.

## Input Fields

- `id`: `ID` — Specifies the product option to update.
- `name`: `String` — Name of the option.
- `position`: `Int` — Position of the option.
- `values`: `[OptionValueSetInput!]` — Value associated with an option.
- `linkedMetafield`: `LinkedMetafieldCreateInput` — Specifies the metafield the option is linked to.

## Related Types

- [LinkedMetafieldCreateInput](../../types/inputs/LinkedMetafieldCreateInput.md)
- [OptionValueSetInput](../../types/inputs/OptionValueSetInput.md)
