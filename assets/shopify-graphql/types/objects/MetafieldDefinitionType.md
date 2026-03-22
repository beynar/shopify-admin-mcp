# Object: `MetafieldDefinitionType`

A metafield definition type provides basic foundation and validation for a metafield.

## Fields

- `category`: `String!` — The category associated with the metafield definition type.
- `name`: `String!` — The name of the type for the metafield definition.
- `supportedValidations`: `[MetafieldDefinitionSupportedValidation!]!` — The supported validations for a metafield definition type.
- `supportsDefinitionMigrations`: `Boolean!` — Whether metafields without a definition can be migrated to a definition of this type.
- `valueType`: `MetafieldValueType!` *(deprecated)* — The value type for a metafield created with this definition type.

## Related Types

- [MetafieldDefinitionSupportedValidation](../../types/objects/MetafieldDefinitionSupportedValidation.md)
- [MetafieldValueType](../../types/enums/MetafieldValueType.md)
