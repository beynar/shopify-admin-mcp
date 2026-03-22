# Mutation: `fulfillmentOrderSplit`

**Returns:** `FulfillmentOrderSplitPayload`

Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

## Arguments

- **`fulfillmentOrderSplits`**: `[FulfillmentOrderSplitInput!]!` — The fulfillment orders, line items and quantities to be split into new fulfillment orders.

## Payload Fields

- `fulfillmentOrderSplits`: `[FulfillmentOrderSplitResult!]` — The result of the fulfillment order splits.
- `userErrors`: `[FulfillmentOrderSplitUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrderSplitInput](../types/inputs/FulfillmentOrderSplitInput.md)
- [FulfillmentOrderSplitPayload](../types/objects/FulfillmentOrderSplitPayload.md)
- [FulfillmentOrderSplitResult](../types/objects/FulfillmentOrderSplitResult.md)
- [FulfillmentOrderSplitUserError](../types/objects/FulfillmentOrderSplitUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
  fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
    fulfillmentOrderSplits {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
