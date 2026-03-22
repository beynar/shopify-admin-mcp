# Mutation: `shippingPackageUpdate`

**Returns:** `ShippingPackageUpdatePayload`

Updates a shipping package.

## Arguments

- **`id`**: `ID!` — The ID of the shipping package to update.
- **`shippingPackage`**: `CustomShippingPackageInput!` — Specifies the input fields for a shipping package.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomShippingPackageInput](../types/inputs/CustomShippingPackageInput.md)
- [ShippingPackageUpdatePayload](../types/objects/ShippingPackageUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ShippingPackageUpdate($id: ID!, $shippingPackage: CustomShippingPackageInput!) {
  shippingPackageUpdate(id: $id, shippingPackage: $shippingPackage) {
    userErrors {
      field
      message
    }
  }
}
```
