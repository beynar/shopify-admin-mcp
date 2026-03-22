# Input Object: `OptionCreateInput`

The input fields for creating a product option.

## Input Fields

- `name`: `String` — Name of the option.
- `position`: `Int` — Position of the option.
- `values`: `[OptionValueCreateInput!]` — Values associated with the option.
- `linkedMetafield`: `LinkedMetafieldCreateInput` — Specifies the metafield the option is linked to.

## Related Types

- [LinkedMetafieldCreateInput](../../types/inputs/LinkedMetafieldCreateInput.md)
- [OptionValueCreateInput](../../types/inputs/OptionValueCreateInput.md)
