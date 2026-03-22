# Mutation: `metafieldDefinitionUpdate`

**Returns:** `MetafieldDefinitionUpdatePayload`

Updates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition)'s configuration and settings. You can modify the definition's name, description, validation rules, access settings, capabilities, and constraints.

The mutation updates access settings that control visibility across different APIs, such as the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), [Storefront API](https://shopify.dev/docs/api/storefront), and [Customer Account API](https://shopify.dev/docs/api/customer). It also enables capabilities like admin filtering or unique value validation, and modifies constraints that determine which resource subtypes the definition applies to.

> Note: The type, namespace, key, and owner type identify the definition and so can't be changed.

Learn more about [updating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

## Arguments

- **`definition`**: `MetafieldDefinitionUpdateInput!` — The input fields for the metafield definition update.

## Payload Fields

- `updatedDefinition`: `MetafieldDefinition` — The metafield definition that was updated.
- `userErrors`: `[MetafieldDefinitionUpdateUserError!]!` — The list of errors that occurred from executing the mutation.
- `validationJob`: `Job` — The asynchronous job updating the metafield definition's validation_status.

## Related Types

- [Job](../types/objects/Job.md)
- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionUpdateInput](../types/inputs/MetafieldDefinitionUpdateInput.md)
- [MetafieldDefinitionUpdatePayload](../types/objects/MetafieldDefinitionUpdatePayload.md)
- [MetafieldDefinitionUpdateUserError](../types/objects/MetafieldDefinitionUpdateUserError.md)

## Example Mutation

```graphql
mutation MetafieldDefinitionUpdate($definition: MetafieldDefinitionUpdateInput!) {
  metafieldDefinitionUpdate(definition: $definition) {
    updatedDefinition {
      id
    }
    userErrors {
      field
      message
    }
    validationJob {
      id
    }
  }
}
```
