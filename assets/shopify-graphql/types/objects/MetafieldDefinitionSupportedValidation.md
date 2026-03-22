# Object: `MetafieldDefinitionSupportedValidation`

The type and name for the optional validation configuration of a metafield.

For example, a supported validation might consist of a `max` name and a `number_integer` type.
This validation can then be used to enforce a maximum character length for a `single_line_text_field` metafield.

## Fields

- `name`: `String!` — The name of the metafield definition validation.
- `type`: `String!` — The type of input for the validation.
