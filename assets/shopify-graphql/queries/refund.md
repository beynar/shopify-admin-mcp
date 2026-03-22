# Query: `refund`

**Returns:** `Refund`

Retrieves a [refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund) by its ID.
A refund represents a financial record of money returned to a customer from an order.
It provides a comprehensive view of all refunded amounts, transactions, and restocking
instructions associated with returning products or correcting order issues.

Use the `refund` query to retrieve information associated with the following workflows:

- Displaying refund details in order management interfaces
- Building customer service tools for reviewing refund history
- Creating reports on refunded amounts and reasons
- Auditing refund transactions and payment gateway records
- Tracking inventory impacts from refunded items

A refund is associated with an
[order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
and includes [refund line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem)
that specify which items were refunded. Each refund processes through
[order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)
that handle the actual money transfer back to the customer.

## Arguments

- **`id`**: `ID!` — The ID of the Refund to return.

## Return Type Fields

- `createdAt`: `DateTime` — The date and time when the refund was created.
- `duties`: `[RefundDuty!]` — A list of the refunded duties as part of this refund.
- `id`: `ID!` — A globally-unique ID.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `note`: `String` — The optional note associated with the refund.
- `order`: `Order!` — The order associated with the refund.
- `orderAdjustments`: `OrderAdjustmentConnection!` — The order adjustments that are attached with the refund.
- `processedAt`: `DateTime!` — The date and time when the refund was processed.
- `refundLineItems`: `RefundLineItemConnection!` — The `RefundLineItem` resources attached to the refund.
- `refundShippingLines`: `RefundShippingLineConnection!` — The `RefundShippingLine` resources attached to the refund.
- `return`: `Return` — The return associated with the refund.
- `staffMember`: `StaffMember` — The staff member who created the refund.
- `totalRefundedSet`: `MoneyBag!` — The total amount across all transactions for the refund, in shop and presentment currencies.
- `transactions`: `OrderTransactionConnection!` — The transactions associated with the refund.
- `updatedAt`: `DateTime!` — The date and time when the refund was updated.

## Related Types

- [MoneyBag](../types/objects/MoneyBag.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Order](../types/objects/Order.md)
- [Refund](../types/objects/Refund.md)
- [RefundDuty](../types/objects/RefundDuty.md)
- [Return](../types/objects/Return.md)
- [StaffMember](../types/objects/StaffMember.md)

## Example Query

```graphql
query Refund($id: ID!) {
  refund(id: $id) {
    createdAt
    legacyResourceId
    note
    processedAt
  }
}
```
