# Mutation: `productFullSync`

**Returns:** `ProductFullSyncPayload`

Runs the full product sync for a given shop.

## Arguments

- **`beforeUpdatedAt`**: `DateTime` — Syncs only products that haven't changed since the specified timestamp.
- **`id`**: `ID!` — The product feed which needs syncing.
- **`updatedAtSince`**: `DateTime` — Syncs only products that have changed since the specified timestamp.

## Payload Fields

- `id`: `ID` — The ID for the full sync operation.
- `userErrors`: `[ProductFullSyncUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductFullSyncPayload](../types/objects/ProductFullSyncPayload.md)
- [ProductFullSyncUserError](../types/objects/ProductFullSyncUserError.md)

## Example Mutation

```graphql
mutation ProductFullSync($beforeUpdatedAt: DateTime, $id: ID!, $updatedAtSince: DateTime) {
  productFullSync(beforeUpdatedAt: $beforeUpdatedAt, id: $id, updatedAtSince: $updatedAtSince) {
    id
    userErrors {
      field
      message
    }
  }
}
```
