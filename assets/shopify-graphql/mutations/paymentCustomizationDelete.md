# Mutation: `paymentCustomizationDelete`

**Returns:** `PaymentCustomizationDeletePayload`

Deletes a payment customization.

## Arguments

- **`id`**: `ID!` — The global ID of the payment customization.

## Payload Fields

- `deletedId`: `ID` — Returns the deleted payment customization ID.
- `userErrors`: `[PaymentCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentCustomizationDeletePayload](../types/objects/PaymentCustomizationDeletePayload.md)
- [PaymentCustomizationError](../types/objects/PaymentCustomizationError.md)

## Example Mutation

```graphql
mutation PaymentCustomizationDelete($id: ID!) {
  paymentCustomizationDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
