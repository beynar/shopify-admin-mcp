# Mutation: `standardMetaobjectDefinitionEnable`

**Returns:** `StandardMetaobjectDefinitionEnablePayload`

Enables the specified standard metaobject definition from its template.

## Arguments

- **`type`**: `String!` — The type of the metaobject definition to enable.

## Payload Fields

- `metaobjectDefinition`: `MetaobjectDefinition` — The metaobject definition that was enabled using the standard template.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetaobjectDefinition](../types/objects/MetaobjectDefinition.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)
- [StandardMetaobjectDefinitionEnablePayload](../types/objects/StandardMetaobjectDefinitionEnablePayload.md)

## Example Mutation

```graphql
mutation StandardMetaobjectDefinitionEnable($type: String!) {
  standardMetaobjectDefinitionEnable(type: $type) {
    metaobjectDefinition {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
