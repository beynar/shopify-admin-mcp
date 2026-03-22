# Mutation: `orderMarkAsPaid`

**Returns:** `OrderMarkAsPaidPayload`

Marks an order as paid by recording a payment transaction for the outstanding amount.

Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout
process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

- Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
- Payments were received offline and need to be recorded in the system
- Previously authorized payments need to be captured manually
- Orders require manual payment reconciliation due to external payment processing

The mutation validates that the order can be marked as paid before processing.
An order can be marked as paid only if it has a positive outstanding balance and its
[financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus)
isn't already `PAID`. The mutation will either create a new sale transaction for the full
outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

After successfully marking an order as paid, the order's financial status is updated to
reflect the payment, and payment events are logged for tracking and analytics
purposes.

Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps)
in apps.

## Arguments

- **`input`**: `OrderMarkAsPaidInput!` — The input for the mutation.

## Payload Fields

- `order`: `Order` — The order marked as paid.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderMarkAsPaidInput](../types/inputs/OrderMarkAsPaidInput.md)
- [OrderMarkAsPaidPayload](../types/objects/OrderMarkAsPaidPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderMarkAsPaid($input: OrderMarkAsPaidInput!) {
  orderMarkAsPaid(input: $input) {
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
