# Mutation: `orderEditAddCustomItem`

**Returns:** `OrderEditAddCustomItemPayload`

Adds a custom line item to an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Custom line items represent products or services not in your catalog, such as gift wrapping, installation fees, or one-off charges.

Creates a [`CalculatedLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem) with the specified title, price, and quantity. Changes remain in the edit session until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

Learn more about [adding custom line items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-custom-line-item).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the custom item is added.
- **`title`**: `String!` — The name of the custom item to add.
- **`locationId`**: `ID` — The ID of the retail [location](https://shopify.dev/api/admin-graphql/latest/objects/location) (if applicable) from which the custom item is sold. Used for tax calculations. A default location will be chosen automatically if none is provided.
- **`price`**: `MoneyInput!` — The unit price of the custom item. This value can't be negative.
- **`quantity`**: `Int!` — The quantity of the custom item. This value must be greater than zero.
- **`taxable`**: `Boolean` — Whether the custom item is taxable. Defaults to `true`.
- **`requiresShipping`**: `Boolean` — Whether the custom item requires shipping. Defaults to `false`.

## Payload Fields

- `calculatedLineItem`: `CalculatedLineItem` — The custom line item that will be added to the order based on the current edits.
- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [MoneyInput](../types/inputs/MoneyInput.md)
- [OrderEditAddCustomItemPayload](../types/objects/OrderEditAddCustomItemPayload.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditAddCustomItem($id: ID!, $title: String!, $locationId: ID, $price: MoneyInput!, $quantity: Int!, $taxable: Boolean, $requiresShipping: Boolean) {
  orderEditAddCustomItem(id: $id, title: $title, locationId: $locationId, price: $price, quantity: $quantity, taxable: $taxable, requiresShipping: $requiresShipping) {
    calculatedLineItem {
      id
    }
    calculatedOrder {
      id
    }
    orderEditSession {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
