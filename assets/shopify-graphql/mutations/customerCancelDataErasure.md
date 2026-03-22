# Mutation: `customerCancelDataErasure`

**Returns:** `CustomerCancelDataErasurePayload`

Cancels a pending erasure of a customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#cancel-customer-data-erasure).

To request an erasure of a customer's data use the [customerRequestDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerRequestDataErasure).

## Arguments

- **`customerId`**: `ID!` — The ID of the customer for whom to cancel a pending data erasure.

## Payload Fields

- `customerId`: `ID` — The ID of the customer whose pending data erasure has been cancelled.
- `userErrors`: `[CustomerCancelDataErasureUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerCancelDataErasurePayload](../types/objects/CustomerCancelDataErasurePayload.md)
- [CustomerCancelDataErasureUserError](../types/objects/CustomerCancelDataErasureUserError.md)

## Example Mutation

```graphql
mutation CustomerCancelDataErasure($customerId: ID!) {
  customerCancelDataErasure(customerId: $customerId) {
    customerId
    userErrors {
      field
      message
    }
  }
}
```
