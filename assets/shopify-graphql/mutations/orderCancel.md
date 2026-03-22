# Mutation: `orderCancel`

**Returns:** `OrderCancelPayload`

Cancels an order, with options for refunding, restocking inventory, and customer notification.

> Caution:
> Order cancellation is irreversible. An order that has been cancelled can't be restored to its original state.

Use the `orderCancel` mutation to programmatically cancel orders in scenarios such as:

- Customer-requested cancellations due to size, color, or other preference changes
- Payment processing failures or declined transactions
- Fraud detection and prevention
- Insufficient inventory availability
- Staff errors in order processing
- Wholesale or B2B order management workflows

The `orderCancel` mutation provides flexible refund options including refunding to original payment methods
or issuing store credit. If a payment was only authorized (temporarily held) but not yet charged,
that hold will be automatically released when the order is cancelled, even if you choose not to refund other payments.

The mutation supports different cancellation reasons: customer requests, payment declines, fraud,
inventory issues, staff errors, or other unspecified reasons. Each cancellation can include optional
staff notes for internal documentation (notes aren't visible to customers).

An order can only be cancelled if it meets the following criteria:

- The order hasn't already been cancelled.
- The order has no pending payment authorizations.
- The order has no active returns in progress.
- The order has no outstanding fulfillments that can't be cancelled.

Orders might be assigned to locations that become
[deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations)
after the order was created. When cancelling such orders, inventory behavior depends on payment status:

- **Paid orders**: Cancellation will fail with an error if restocking is enabled, since inventory
can't be returned to deactivated locations.
- **Unpaid orders**: Cancellation succeeds but inventory is not restocked anywhere, even when the
restock option is enabled. The committed inventory effectively becomes unavailable rather than being
returned to stock at the deactivated location.

After you cancel an order, you can still make limited updates to certain fields (like
notes and tags) using the
[`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).

For partial refunds or more complex refund scenarios on active orders,
such as refunding only specific line items while keeping the rest of the order fulfilled,
consider using the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)
mutation instead of full order cancellation.

Learn how to build apps that integrate with
[order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

## Arguments

- **`orderId`**: `ID!` — The ID of the order to be canceled.
- **`refundMethod`**: `OrderCancelRefundMethodInput` — Indicates how to refund the amount paid by the customer. Authorized payments will be voided regardless of this setting.
- **`restock`**: `Boolean!` — Whether to restock the inventory committed to the order. For unpaid orders fulfilled from locations that have been deactivated, inventory will not be restocked to the deactivated locations even if this argument is set to true.
- **`reason`**: `OrderCancelReason!` — The reason for canceling the order.
- **`notifyCustomer`**: `Boolean` = `false` — Whether to send a notification to the customer about the order cancellation.
- **`staffNote`**: `String` = `null` — A staff-facing note about the order cancellation. This is not visible to the customer. Maximum length of 255 characters.

## Payload Fields

- `job`: `Job` — The job that asynchronously cancels the order.
- `orderCancelUserErrors`: `[OrderCancelUserError!]!` — The list of errors that occurred from executing the mutation.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [OrderCancelPayload](../types/objects/OrderCancelPayload.md)
- [OrderCancelReason](../types/enums/OrderCancelReason.md)
- [OrderCancelRefundMethodInput](../types/inputs/OrderCancelRefundMethodInput.md)
- [OrderCancelUserError](../types/objects/OrderCancelUserError.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput, $restock: Boolean!, $reason: OrderCancelReason!, $notifyCustomer: Boolean, $staffNote: String) {
  orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason, notifyCustomer: $notifyCustomer, staffNote: $staffNote) {
    job {
      id
    }
    orderCancelUserErrors {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
