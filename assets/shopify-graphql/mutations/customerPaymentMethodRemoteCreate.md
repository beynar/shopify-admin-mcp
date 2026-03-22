# Mutation: `customerPaymentMethodRemoteCreate`

**Returns:** `CustomerPaymentMethodRemoteCreatePayload`

Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment methods from external gateways and associates them with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects in Shopify.

The operation processes payment methods asynchronously. The returned [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod) initially has incomplete details while Shopify validates and processes the remote gateway information. Use the [`customerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod) query to retrieve the payment method status until all details are available or the payment method is revoked.

Learn more about [migrating customer payment methods from remote gateways](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information#step-2-import-payment-methods-for-customers).

## Arguments

- **`customerId`**: `ID!` — The ID of the customer.
- **`remoteReference`**: `CustomerPaymentMethodRemoteInput!` — Remote gateway payment method details.

## Payload Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method. Note that the returned payment method may initially be in an incomplete state. Developers should poll this payment method using the customerPaymentMethod query until all required payment details have been processed.
- `userErrors`: `[CustomerPaymentMethodRemoteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodRemoteCreatePayload](../types/objects/CustomerPaymentMethodRemoteCreatePayload.md)
- [CustomerPaymentMethodRemoteInput](../types/inputs/CustomerPaymentMethodRemoteInput.md)
- [CustomerPaymentMethodRemoteUserError](../types/objects/CustomerPaymentMethodRemoteUserError.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodRemoteCreate($customerId: ID!, $remoteReference: CustomerPaymentMethodRemoteInput!) {
  customerPaymentMethodRemoteCreate(customerId: $customerId, remoteReference: $remoteReference) {
    customerPaymentMethod {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
