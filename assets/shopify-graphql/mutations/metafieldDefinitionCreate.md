# Mutation: `metafieldDefinitionCreate`

**Returns:** `MetafieldDefinitionCreatePayload`

Creates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition) that establishes structure and validation rules for metafields. The definition specifies the data type, validation constraints, and access permissions for metafields with a given namespace and key combination.

When you create a new definition, the system validates any existing unstructured metafields matching the same owner type, namespace, and key against it. The system updates each valid metafield's type to match the definition. Invalid metafields remain unchanged but must conform to the definition when updated.

Learn more about [creating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

## Arguments

- **`definition`**: `MetafieldDefinitionInput!` — Specifies the input fields for a metafield definition.

## Payload Fields

- `createdDefinition`: `MetafieldDefinition` — The metafield definition that was created.
- `userErrors`: `[MetafieldDefinitionCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionCreatePayload](../types/objects/MetafieldDefinitionCreatePayload.md)
- [MetafieldDefinitionCreateUserError](../types/objects/MetafieldDefinitionCreateUserError.md)
- [MetafieldDefinitionInput](../types/inputs/MetafieldDefinitionInput.md)

## Example Mutation

```graphql
mutation MetafieldDefinitionCreate($definition: MetafieldDefinitionInput!) {
  metafieldDefinitionCreate(definition: $definition) {
    createdDefinition {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
