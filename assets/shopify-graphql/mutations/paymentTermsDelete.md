# Mutation: `paymentTermsDelete`

**Returns:** `PaymentTermsDeletePayload`

Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

## Arguments

- **`input`**: `PaymentTermsDeleteInput!` — The input fields used to delete the payment terms.

## Payload Fields

- `deletedId`: `ID` — The deleted payment terms ID.
- `userErrors`: `[PaymentTermsDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentTermsDeleteInput](../types/inputs/PaymentTermsDeleteInput.md)
- [PaymentTermsDeletePayload](../types/objects/PaymentTermsDeletePayload.md)
- [PaymentTermsDeleteUserError](../types/objects/PaymentTermsDeleteUserError.md)

## Example Mutation

```graphql
mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
  paymentTermsDelete(input: $input) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
