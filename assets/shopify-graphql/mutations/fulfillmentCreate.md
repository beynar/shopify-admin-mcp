# Mutation: `fulfillmentCreate`

**Returns:** `FulfillmentCreatePayload`

Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fulfillment orders are associated with the same [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and are assigned to the same [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

Use this mutation to mark items as fulfilled when they're ready to ship. You can specify tracking information, customer notification preferences, and which [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem) objects to fulfill from each fulfillment order. If you don't specify line items, then the mutation fulfills all items in the fulfillment order.

Learn more about [building fulfillment solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).

## Arguments

- **`fulfillment`**: `FulfillmentInput!` — The input fields used to create a fulfillment from fulfillment orders.
- **`message`**: `String` — An optional message for the fulfillment request.

## Payload Fields

- `fulfillment`: `Fulfillment` — The created fulfillment.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Fulfillment](../types/objects/Fulfillment.md)
- [FulfillmentCreatePayload](../types/objects/FulfillmentCreatePayload.md)
- [FulfillmentInput](../types/inputs/FulfillmentInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentCreate($fulfillment: FulfillmentInput!, $message: String) {
  fulfillmentCreate(fulfillment: $fulfillment, message: $message) {
    fulfillment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
