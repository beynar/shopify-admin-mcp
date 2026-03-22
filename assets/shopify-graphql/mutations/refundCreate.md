# Mutation: `refundCreate`

**Returns:** `RefundCreatePayload`

Creates a refund for an order, allowing you to process returns and issue payments back to customers.

Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to
return money to customers, such as when handling returns, processing chargebacks, or correcting
order errors.

The `refundCreate` mutation supports various refund scenarios:

- Refunding line items with optional restocking
- Refunding shipping costs
- Refunding duties and import taxes
- Refunding additional fees
- Processing refunds through different payment methods
- Issuing store credit refunds (when enabled)

You can create both full and partial refunds, and optionally allow over-refunding in specific
cases.

After creating a refund, you can track its status and details through the order's
[`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds)
field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

Learn more about
[managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

> Note:
> The refunding behavior of the `refundCreate` mutation is similar to the
[`refundReturn`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)
mutation. The key difference is that the `refundCreate` mutation lets you to specify restocking behavior
for line items, whereas the `returnRefund` mutation focuses solely on handling the financial refund without
any restocking input.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `RefundInput!` — The input fields that are used in the mutation for creating a refund.

## Payload Fields

- `order`: `Order` — The order associated with the created refund.
- `refund`: `Refund` — The created refund.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [Refund](../types/objects/Refund.md)
- [RefundCreatePayload](../types/objects/RefundCreatePayload.md)
- [RefundInput](../types/inputs/RefundInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation RefundCreate($input: RefundInput!) {
  refundCreate(input: $input) {
    order {
      id
    }
    refund {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
