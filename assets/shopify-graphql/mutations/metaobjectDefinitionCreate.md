# Mutation: `metaobjectDefinitionCreate`

**Returns:** `MetaobjectDefinitionCreatePayload`

Creates a metaobject definition that establishes the structure for custom data objects in your store. The definition specifies the fields, data types, and access permissions that all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of this type share.

Use the `type` field to create a unique namespace for your metaobjects. Prefix the type with `$app:` to reserve the definition for your app's exclusive use. The definition can include capabilities like publishable status or translation eligibility, to extend how metaobjects integrate with Shopify's features.

Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

## Arguments

- **`definition`**: `MetaobjectDefinitionCreateInput!` — The input fields for creating a metaobject definition.

## Payload Fields

- `metaobjectDefinition`: `MetaobjectDefinition` — The created metaobject definition.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetaobjectDefinition](../types/objects/MetaobjectDefinition.md)
- [MetaobjectDefinitionCreateInput](../types/inputs/MetaobjectDefinitionCreateInput.md)
- [MetaobjectDefinitionCreatePayload](../types/objects/MetaobjectDefinitionCreatePayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectDefinitionCreate($definition: MetaobjectDefinitionCreateInput!) {
  metaobjectDefinitionCreate(definition: $definition) {
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
