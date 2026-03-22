# Mutation: `draftOrderUpdate`

**Returns:** `DraftOrderUpdatePayload`

Updates a draft order.

If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts
are created but not immediately completed when opening the merchant credit card modal in the admin, and when a
buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress
and the draft is updated before the checkout completes. This will not interfere with the checkout and order
creation, but if the link from draft to checkout is broken the draft will remain open even after the order is
created.

## Arguments

- **`id`**: `ID!` — Specifies the draft order to update.
- **`input`**: `DraftOrderInput!` — The draft order properties to update.

## Payload Fields

- `draftOrder`: `DraftOrder` — The updated draft order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrder](../types/objects/DraftOrder.md)
- [DraftOrderInput](../types/inputs/DraftOrderInput.md)
- [DraftOrderUpdatePayload](../types/objects/DraftOrderUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
  draftOrderUpdate(id: $id, input: $input) {
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
