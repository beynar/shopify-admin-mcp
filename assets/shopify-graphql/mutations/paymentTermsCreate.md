# Mutation: `paymentTermsCreate`

**Returns:** `PaymentTermsCreatePayload`

Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

## Arguments

- **`referenceId`**: `ID!` — Specifies the reference orderId to add the payment terms for.
- **`paymentTermsAttributes`**: `PaymentTermsCreateInput!` — The attributes used to create the payment terms.

## Payload Fields

- `paymentTerms`: `PaymentTerms` — The created payment terms.
- `userErrors`: `[PaymentTermsCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentTerms](../types/objects/PaymentTerms.md)
- [PaymentTermsCreateInput](../types/inputs/PaymentTermsCreateInput.md)
- [PaymentTermsCreatePayload](../types/objects/PaymentTermsCreatePayload.md)
- [PaymentTermsCreateUserError](../types/objects/PaymentTermsCreateUserError.md)

## Example Mutation

```graphql
mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
  paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
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
