# Mutation: `metaobjectUpsert`

**Returns:** `MetaobjectUpsertPayload`

Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

## Arguments

- **`handle`**: `MetaobjectHandleInput!` — The identifier of the metaobject to upsert.
- **`metaobject`**: `MetaobjectUpsertInput!` — The parameters to upsert the metaobject.

## Payload Fields

- `metaobject`: `Metaobject` — The created or updated metaobject.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Metaobject](../types/objects/Metaobject.md)
- [MetaobjectHandleInput](../types/inputs/MetaobjectHandleInput.md)
- [MetaobjectUpsertInput](../types/inputs/MetaobjectUpsertInput.md)
- [MetaobjectUpsertPayload](../types/objects/MetaobjectUpsertPayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectUpsert($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
  metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
