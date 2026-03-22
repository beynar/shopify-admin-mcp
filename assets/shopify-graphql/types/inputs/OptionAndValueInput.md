# Input Object: `OptionAndValueInput`

The input fields for the options and values of the combined listing.

## Input Fields

- `name`: `String!` — The name of the Product's Option.
- `values`: `[String!]!` — The ordered values of the Product's Option.
- `optionId`: `ID` — The ID of the option to update. If not present, the option will be created.
- `linkedMetafield`: `LinkedMetafieldInput` — The linked metafield for the product's option.

## Related Types

- [LinkedMetafieldInput](../../types/inputs/LinkedMetafieldInput.md)
