# Mutation: `discountAutomaticDelete`

**Returns:** `DiscountAutomaticDeletePayload`

Deletes an existing automatic discount from the store, permanently removing it from all future order calculations. This mutation provides a clean way to remove promotional campaigns that are no longer needed.

For example, when a seasonal promotion ends or a flash sale concludes, merchants can use this mutation to ensure the discount no longer applies to new orders while preserving historical order data.

Use `DiscountAutomaticDelete` to:
- Remove expired promotional campaigns
- Clean up test discounts during development
- Delete automatic discounts that conflict with new promotions
- Maintain a clean discount configuration

The mutation returns the ID of the deleted discount for confirmation and any validation errors if the deletion cannot be completed. Once deleted, the automatic discount will no longer appear in discount lists or apply to new customer orders.

## Arguments

- **`id`**: `ID!` — The ID of the automatic discount to delete.

## Payload Fields

- `deletedAutomaticDiscountId`: `ID` — The ID of the automatic discount that was deleted.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticDeletePayload](../types/objects/DiscountAutomaticDeletePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticDelete($id: ID!) {
  discountAutomaticDelete(id: $id) {
    deletedAutomaticDiscountId
    userErrors {
      field
      message
    }
  }
}
```
