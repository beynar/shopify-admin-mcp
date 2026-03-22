# Mutation: `orderCapture`

**Returns:** `OrderCapturePayload`

Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously
reserved by an authorization transaction.

The `orderCapture` mutation can be used in the following scenarios:

- To capture the full amount of an authorized transaction
- To capture a partial payment by specifying an amount less than the total order amount
- To perform multiple captures on the same order, as long as the order transaction is
[multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

> Note:
> Multi-capture functionality is only available to stores on a
[Shopify Plus plan](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan).
For multi-currency orders, the [`currency`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency)
field is required and should match the presentment currency from the order.

After capturing a payment, you can:

- View the transaction details including status, amount, and processing information.
- Track the captured amount in both shop and presentment currencies.
- Monitor the transaction's settlement status.

Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

## Arguments

- **`input`**: `OrderCaptureInput!` — The input for the mutation.

## Payload Fields

- `transaction`: `OrderTransaction` — The created capture transaction.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OrderCaptureInput](../types/inputs/OrderCaptureInput.md)
- [OrderCapturePayload](../types/objects/OrderCapturePayload.md)
- [OrderTransaction](../types/objects/OrderTransaction.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderCapture($input: OrderCaptureInput!) {
  orderCapture(input: $input) {
    transaction {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
