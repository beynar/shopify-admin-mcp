# Query: `customerPaymentMethod`

**Returns:** `CustomerPaymentMethod`

Returns a CustomerPaymentMethod resource by its ID.

## Arguments

- **`id`**: `ID!` — The ID of the CustomerPaymentMethod to return.
- **`showRevoked`**: `Boolean` = `false` — Whether to show the customer's revoked payment method.

## Return Type Fields

- `customer`: `Customer` — The customer to whom the payment method belongs.
- `id`: `ID!` — The ID of this payment method.
- `instrument`: `CustomerPaymentInstrument` — The instrument for this payment method.
- `mandates`: `PaymentMandateResourceConnection!` — The mandates associated with the payment method.
- `revokedAt`: `DateTime` — The time that the payment method was revoked.
- `revokedReason`: `CustomerPaymentMethodRevocationReason` — The revocation reason for this payment method.
- `subscriptionContracts`: `SubscriptionContractConnection!` — List Subscription Contracts.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerPaymentInstrument](../types/unions/CustomerPaymentInstrument.md)
- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodRevocationReason](../types/enums/CustomerPaymentMethodRevocationReason.md)

## Example Query

```graphql
query CustomerPaymentMethod($id: ID!, $showRevoked: Boolean) {
  customerPaymentMethod(id: $id, showRevoked: $showRevoked) {
    revokedAt
  }
}
```
