# Mutation: `discountCodeDelete`

**Returns:** `DiscountCodeDeletePayload`

Removes a code discount from the store, making it permanently unavailable for customer use. This mutation provides a clean way to eliminate discount codes that are no longer needed or have been replaced.

For example, when a seasonal promotion ends or a discount code has been compromised, merchants can delete it entirely rather than just deactivating it, ensuring customers cannot attempt to use expired promotional codes.

Use `DiscountCodeDelete` to:
- persistently remove outdated promotional codes
- Clean up discount code lists after campaigns end
- Eliminate compromised or leaked discount codes
- Maintain organized discount management

Once deleted, the discount code cannot be recovered and any customer attempts to use it will fail. This differs from deactivation, which preserves the code for potential future reactivation.

## Arguments

- **`id`**: `ID!` — The ID of the code discount to delete.

## Payload Fields

- `deletedCodeDiscountId`: `ID` — The ID of the code discount that was deleted.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeDeletePayload](../types/objects/DiscountCodeDeletePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeDelete($id: ID!) {
  discountCodeDelete(id: $id) {
    deletedCodeDiscountId
    userErrors {
      field
      message
    }
  }
}
```
