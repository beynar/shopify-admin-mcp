# Mutation: `draftOrderCreate`

**Returns:** `DraftOrderCreatePayload`

Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)
with attributes such as customer information, line items, shipping and billing addresses, and payment terms.
Draft orders are useful for merchants that need to:

- Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
- Send invoices to customers with a secure checkout link.
- Use custom items to represent additional costs or products not in inventory.
- Re-create orders manually from active sales channels.
- Sell products at discount or wholesale rates.
- Take pre-orders.

After creating a draft order, you can:
- Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
- Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
- Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
- Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
- Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

> Note:
> When you create a draft order, you can't [reserve or hold inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order by default.
> However, you can reserve inventory using the [`reserveInventoryUntil`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.reserveInventoryUntil) input.

## Arguments

- **`input`**: `DraftOrderInput!` — The fields used to create the draft order.

## Payload Fields

- `draftOrder`: `DraftOrder` — The created draft order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrder](../types/objects/DraftOrder.md)
- [DraftOrderCreatePayload](../types/objects/DraftOrderCreatePayload.md)
- [DraftOrderInput](../types/inputs/DraftOrderInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
    draftOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
