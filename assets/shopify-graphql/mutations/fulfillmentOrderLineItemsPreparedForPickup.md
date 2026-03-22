# Mutation: `fulfillmentOrderLineItemsPreparedForPickup`

**Returns:** `FulfillmentOrderLineItemsPreparedForPickupPayload`

Marks [fulfillment order line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem) as ready for customer pickup. When executed, this mutation automatically sends a "Ready For Pickup" notification to the customer.

Use this mutation for local pickup orders after the items have been prepared and are available for the customer to collect. You can specify one or more [fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by providing the fulfillment order IDs in the [`lineItemsByFulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput) field. This allows you to mark fulfillment order line items from different fulfillment orders as ready for pickup.

## Arguments

- **`input`**: `FulfillmentOrderLineItemsPreparedForPickupInput!` — The input for marking fulfillment order line items as ready for pickup.

## Payload Fields

- `userErrors`: `[FulfillmentOrderLineItemsPreparedForPickupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrderLineItemsPreparedForPickupInput](../types/inputs/FulfillmentOrderLineItemsPreparedForPickupInput.md)
- [FulfillmentOrderLineItemsPreparedForPickupPayload](../types/objects/FulfillmentOrderLineItemsPreparedForPickupPayload.md)
- [FulfillmentOrderLineItemsPreparedForPickupUserError](../types/objects/FulfillmentOrderLineItemsPreparedForPickupUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderLineItemsPreparedForPickup($input: FulfillmentOrderLineItemsPreparedForPickupInput!) {
  fulfillmentOrderLineItemsPreparedForPickup(input: $input) {
    userErrors {
      field
      message
    }
  }
}
```
