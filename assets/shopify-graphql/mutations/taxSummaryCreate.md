# Mutation: `taxSummaryCreate`

**Returns:** `TaxSummaryCreatePayload`

Creates a tax summary for a given order.
If both an order ID and a start and end time are provided, the order ID will be used.

## Arguments

- **`orderId`**: `ID` — The ID of the order to create the tax summary for.
- **`startTime`**: `DateTime` — The start time of the range of orders to create the tax summary for.
- **`endTime`**: `DateTime` — The end time of the range of orders to create the tax summary for.

## Payload Fields

- `enqueuedOrders`: `[Order!]` — A list of orders that were successfully enqueued to create a tax summary.
- `userErrors`: `[TaxSummaryCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [TaxSummaryCreatePayload](../types/objects/TaxSummaryCreatePayload.md)
- [TaxSummaryCreateUserError](../types/objects/TaxSummaryCreateUserError.md)

## Example Mutation

```graphql
mutation TaxSummaryCreate($orderId: ID, $startTime: DateTime, $endTime: DateTime) {
  taxSummaryCreate(orderId: $orderId, startTime: $startTime, endTime: $endTime) {
    enqueuedOrders {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
