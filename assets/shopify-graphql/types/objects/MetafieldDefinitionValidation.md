# Object: `MetafieldDefinitionValidation`

A configured metafield definition validation.

For example, for a metafield definition of `number_integer` type, you can set a validation with the name `max`
and a value of `15`. This validation will ensure that the value of the metafield is a number less than or equal to 15.

Refer to the [list of supported validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).

## Fields

- `name`: `String!` — The validation name.
- `type`: `String!` — The name for the metafield type of this validation.
- `value`: `String` — The validation value.
