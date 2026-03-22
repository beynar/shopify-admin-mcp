# Query: `return`

**Returns:** `Return`

Retrieves a return by its ID. A return represents the intent of a buyer to ship one or more items from an
order back to a merchant or a third-party fulfillment location.

Use the `return` query to retrieve information associated with the following workflows:

- [Managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
- [Processing exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges)
- [Tracking reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders)

A return is associated with an
[order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem).
Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses),
which indicates the state of the return.

## Arguments

- **`id`**: `ID!` — The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) of the return to retrieve.

## Return Type Fields

- `closedAt`: `DateTime` — The date and time when the return was closed.
- `createdAt`: `DateTime!` — The date and time when the return was created.
- `decline`: `ReturnDecline` — Additional information about the declined return.
- `exchangeLineItems`: `ExchangeLineItemConnection!` — The exchange line items attached to the return.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the return.
- `order`: `Order!` — The order that the return belongs to.
- `refunds`: `RefundConnection!` — The list of refunds associated with the return.
- `requestApprovedAt`: `DateTime` — The date and time when the return was approved.
- `returnLineItems`: `ReturnLineItemTypeConnection!` — The return line items attached to the return.
- `returnShippingFees`: `[ReturnShippingFee!]!` — The return shipping fees for the return.
- `reverseFulfillmentOrders`: `ReverseFulfillmentOrderConnection!` — The list of reverse fulfillment orders for the return.
- `staffMember`: `StaffMember` — The staff member that created the return.
- `status`: `ReturnStatus!` — The status of the return.
- `suggestedFinancialOutcome`: `SuggestedReturnFinancialOutcome` — A suggested financial outcome for the return.
- `totalQuantity`: `Int!` — The sum of all return line item quantities for the return.
- `transactions`: `OrderTransactionConnection!` — The order transactions created from the return.

## Related Types

- [Order](../types/objects/Order.md)
- [Return](../types/objects/Return.md)
- [ReturnDecline](../types/objects/ReturnDecline.md)
- [ReturnShippingFee](../types/objects/ReturnShippingFee.md)
- [ReturnStatus](../types/enums/ReturnStatus.md)
- [StaffMember](../types/objects/StaffMember.md)
- [SuggestedReturnFinancialOutcome](../types/objects/SuggestedReturnFinancialOutcome.md)
- [SuggestedReturnRefund](../types/objects/SuggestedReturnRefund.md)

## Example Query

```graphql
query Return($id: ID!) {
  return(id: $id) {
    closedAt
    createdAt
    name
    requestApprovedAt
  }
}
```
