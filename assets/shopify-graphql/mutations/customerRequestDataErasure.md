# Mutation: `customerRequestDataErasure`

**Returns:** `CustomerRequestDataErasurePayload`

Enqueues a request to erase customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#erase-customer-personal-data).

To cancel the data erasure request use the [customerCancelDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerCancelDataErasure).

## Arguments

- **`customerId`**: `ID!` — The ID of the customer to erase.

## Payload Fields

- `customerId`: `ID` — The ID of the customer that will be erased.
- `userErrors`: `[CustomerRequestDataErasureUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerRequestDataErasurePayload](../types/objects/CustomerRequestDataErasurePayload.md)
- [CustomerRequestDataErasureUserError](../types/objects/CustomerRequestDataErasureUserError.md)

## Example Mutation

```graphql
mutation CustomerRequestDataErasure($customerId: ID!) {
  customerRequestDataErasure(customerId: $customerId) {
    customerId
    userErrors {
      field
      message
    }
  }
}
```
