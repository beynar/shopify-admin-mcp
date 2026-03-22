# Mutation: `metaobjectCreate`

**Returns:** `MetaobjectCreatePayload`

Creates a metaobject entry based on an existing [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). The type must match a definition that already exists in the shop.

Specify field values using key-value pairs that correspond to the field definitions. The mutation generates a unique handle automatically if you don't provide one. You can also configure capabilities like publishable status to control the metaobject's visibility across channels.

Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

## Arguments

- **`metaobject`**: `MetaobjectCreateInput!` — The parameters for the metaobject to create.

## Payload Fields

- `metaobject`: `Metaobject` — The created metaobject.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Metaobject](../types/objects/Metaobject.md)
- [MetaobjectCreateInput](../types/inputs/MetaobjectCreateInput.md)
- [MetaobjectCreatePayload](../types/objects/MetaobjectCreatePayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectCreate($metaobject: MetaobjectCreateInput!) {
  metaobjectCreate(metaobject: $metaobject) {
    metaobject {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
