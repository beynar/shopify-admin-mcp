# Mutation: `metaobjectDefinitionUpdate`

**Returns:** `MetaobjectDefinitionUpdatePayload`

Updates a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s configuration and field structure. You can modify the definition's name, description, display name key, access controls, and capabilities, as well as those of all its fields.

The mutation supports reordering fields when `resetFieldOrder` is `true`, which arranges submitted fields first followed by alphabetized omitted fields.

Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

## Arguments

- **`id`**: `ID!` — The ID of the metaobject definition to update.
- **`definition`**: `MetaobjectDefinitionUpdateInput!` — The input fields for updating a metaobject definition.

## Payload Fields

- `metaobjectDefinition`: `MetaobjectDefinition` — The updated metaobject definition.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetaobjectDefinition](../types/objects/MetaobjectDefinition.md)
- [MetaobjectDefinitionUpdateInput](../types/inputs/MetaobjectDefinitionUpdateInput.md)
- [MetaobjectDefinitionUpdatePayload](../types/objects/MetaobjectDefinitionUpdatePayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectDefinitionUpdate($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
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
