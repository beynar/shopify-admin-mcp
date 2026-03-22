# Mutation: `shippingPackageDelete`

**Returns:** `ShippingPackageDeletePayload`

Deletes a shipping package.

## Arguments

- **`id`**: `ID!` — The ID of the shipping package to remove.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted shipping package.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ShippingPackageDeletePayload](../types/objects/ShippingPackageDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ShippingPackageDelete($id: ID!) {
  shippingPackageDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
