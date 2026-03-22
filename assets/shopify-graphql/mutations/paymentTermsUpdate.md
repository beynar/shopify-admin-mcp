# Mutation: `paymentTermsUpdate`

**Returns:** `PaymentTermsUpdatePayload`

Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

## Arguments

- **`input`**: `PaymentTermsUpdateInput!` — The input fields used to update the payment terms.

## Payload Fields

- `paymentTerms`: `PaymentTerms` — The updated payment terms.
- `userErrors`: `[PaymentTermsUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentTerms](../types/objects/PaymentTerms.md)
- [PaymentTermsUpdateInput](../types/inputs/PaymentTermsUpdateInput.md)
- [PaymentTermsUpdatePayload](../types/objects/PaymentTermsUpdatePayload.md)
- [PaymentTermsUpdateUserError](../types/objects/PaymentTermsUpdateUserError.md)

## Example Mutation

```graphql
mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
  paymentTermsUpdate(input: $input) {
    paymentTerms {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
