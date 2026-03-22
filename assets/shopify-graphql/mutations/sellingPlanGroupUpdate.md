# Mutation: `sellingPlanGroupUpdate`

**Returns:** `SellingPlanGroupUpdatePayload`

Update a Selling Plan Group.

## Arguments

- **`id`**: `ID!` — The Selling Plan Group to update.
- **`input`**: `SellingPlanGroupInput!` — The properties of the Selling Plan Group to update.

## Payload Fields

- `deletedSellingPlanIds`: `[ID!]` — The IDs of the deleted Subscription Plans.
- `sellingPlanGroup`: `SellingPlanGroup` — The updated Selling Plan Group.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroup](../types/objects/SellingPlanGroup.md)
- [SellingPlanGroupInput](../types/inputs/SellingPlanGroupInput.md)
- [SellingPlanGroupUpdatePayload](../types/objects/SellingPlanGroupUpdatePayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
  sellingPlanGroupUpdate(id: $id, input: $input) {
    deletedSellingPlanIds
    sellingPlanGroup {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
