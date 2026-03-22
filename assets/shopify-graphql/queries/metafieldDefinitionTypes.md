# Query: `metafieldDefinitionTypes`

**Returns:** `[MetafieldDefinitionType!]!`

The available metafield types that you can use when creating [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition) objects. Each type specifies what kind of data it stores (such as boolean, color, date, or references), its category, and which validations it supports.

For a list of supported types and their capabilities, refer to the [metafield types documentation](https://shopify.dev/docs/apps/metafields/types).

## Return Type Fields

- `category`: `String!` — The category associated with the metafield definition type.
- `name`: `String!` — The name of the type for the metafield definition.
- `supportedValidations`: `[MetafieldDefinitionSupportedValidation!]!` — The supported validations for a metafield definition type.
- `supportsDefinitionMigrations`: `Boolean!` — Whether metafields without a definition can be migrated to a definition of this type.

## Related Types

- [MetafieldDefinitionSupportedValidation](../types/objects/MetafieldDefinitionSupportedValidation.md)
- [MetafieldDefinitionType](../types/objects/MetafieldDefinitionType.md)
- [MetafieldValueType](../types/enums/MetafieldValueType.md)

## Example Query

```graphql
query {
  metafieldDefinitionTypes {
    category
    name
    supportsDefinitionMigrations
  }
}
```
