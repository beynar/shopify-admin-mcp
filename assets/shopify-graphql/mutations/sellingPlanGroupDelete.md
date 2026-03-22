# Mutation: `sellingPlanGroupDelete`

**Returns:** `SellingPlanGroupDeletePayload`

Delete a Selling Plan Group. This does not affect subscription contracts.

## Arguments

- **`id`**: `ID!` — The id of the selling plan group to delete.

## Payload Fields

- `deletedSellingPlanGroupId`: `ID` — The ID of the deleted selling plan group object.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroupDeletePayload](../types/objects/SellingPlanGroupDeletePayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupDelete($id: ID!) {
  sellingPlanGroupDelete(id: $id) {
    deletedSellingPlanGroupId
    userErrors {
      field
      message
    }
  }
}
```
