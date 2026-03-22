# Mutation: `orderEditAddVariant`

**Returns:** `OrderEditAddVariantPayload`

Adds a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) as a line item to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's being edited. The mutation respects the variant's contextual pricing.

You can specify a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) to check for inventory availability and control whether duplicate variants are allowed. The [`quantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant#arguments-quantity) must be a positive value.

Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-new-variant).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.
- **`variantId`**: `ID!` — The ID of the variant to add.
- **`locationId`**: `ID` — The ID of the [location](https://shopify.dev/api/admin-graphql/latest/objects/location) to check for inventory availability. A default location ID is chosen automatically if none is provided.
- **`quantity`**: `Int!` — The quantity of the item to add to the order. Must be a positive value.
- **`allowDuplicates`**: `Boolean` = `false` — Whether the mutation can create a line item for a variant that's already on the calculated order.

## Payload Fields

- `calculatedLineItem`: `CalculatedLineItem` — The [calculated line item](https://shopify.dev/api/admin-graphql/latest/objects/calculatedlineitem)
- `calculatedOrder`: `CalculatedOrder` — The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder)
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditAddVariantPayload](../types/objects/OrderEditAddVariantPayload.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditAddVariant($id: ID!, $variantId: ID!, $locationId: ID, $quantity: Int!, $allowDuplicates: Boolean) {
  orderEditAddVariant(id: $id, variantId: $variantId, locationId: $locationId, quantity: $quantity, allowDuplicates: $allowDuplicates) {
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
