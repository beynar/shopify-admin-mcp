# Mutation: `shippingPackageMakeDefault`

**Returns:** `ShippingPackageMakeDefaultPayload`

Set a shipping package as the default.
The default shipping package is the one used to calculate shipping costs on checkout.

## Arguments

- **`id`**: `ID!` — The ID of the shipping package to set as the default.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ShippingPackageMakeDefaultPayload](../types/objects/ShippingPackageMakeDefaultPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ShippingPackageMakeDefault($id: ID!) {
  shippingPackageMakeDefault(id: $id) {
    userErrors {
      field
      message
    }
  }
}
```
