# Input Object: `MetafieldDefinitionValidationInput`

The name and value for a metafield definition validation.

For example, for a metafield definition of `single_line_text_field` type, you can set a validation with the name `min` and a value of `10`.
This validation will ensure that the value of the metafield is at least 10 characters.

Refer to the [list of supported validations](https://shopify.dev/apps/build/custom-data/metafields/list-of-validation-options).

## Input Fields

- `name`: `String!` — The name for the metafield definition validation.
- `value`: `String!` — The value for the metafield definition validation.
