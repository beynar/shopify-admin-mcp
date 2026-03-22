# Mutation: `fulfillmentOrderOpen`

**Returns:** `FulfillmentOrderOpenPayload`

Marks a scheduled fulfillment order as open.

From API version 2026-01, this will also mark a fulfillment order as open when it is assigned to a merchant managed location and has had progress reported.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order to mark as open.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was transitioned to open and is fulfillable.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderOpenPayload](../types/objects/FulfillmentOrderOpenPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderOpen($id: ID!) {
  fulfillmentOrderOpen(id: $id) {
    fulfillmentOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
