# Mutation: `orderCreateManualPayment`

**Returns:** `OrderCreateManualPaymentPayload`

Records a manual payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that isn't fully paid. Use this mutation to track payments received outside the standard checkout process, such as cash, check, bank transfer, or other offline payment methods.

You can specify the payment [amount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-amount), [method name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-paymentMethodName), and [when it was processed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-processedAt).

## Arguments

- **`id`**: `ID!` — The ID of the order to create a manual payment for.
- **`amount`**: `MoneyInput` — The manual payment amount to be created.
- **`paymentMethodName`**: `String` — The name of the payment method used for creating the payment. If none is provided, then the default manual payment method ('Other') will be used.
- **`processedAt`**: `DateTime` — The date and time ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) when a manual payment was processed. If you're importing transactions from an app or another platform, then you can set processedAt to a date and time in the past to match when the original transaction was created.

## Payload Fields

- `order`: `Order` — The order recorded a manual payment.
- `userErrors`: `[OrderCreateManualPaymentOrderCreateManualPaymentError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MoneyInput](../types/inputs/MoneyInput.md)
- [Order](../types/objects/Order.md)
- [OrderCreateManualPaymentOrderCreateManualPaymentError](../types/objects/OrderCreateManualPaymentOrderCreateManualPaymentError.md)
- [OrderCreateManualPaymentPayload](../types/objects/OrderCreateManualPaymentPayload.md)

## Example Mutation

```graphql
mutation OrderCreateManualPayment($id: ID!, $amount: MoneyInput, $paymentMethodName: String, $processedAt: DateTime) {
  orderCreateManualPayment(id: $id, amount: $amount, paymentMethodName: $paymentMethodName, processedAt: $processedAt) {
    order {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
