# Mutation: `discountAutomaticBulkDelete`

**Returns:** `DiscountAutomaticBulkDeletePayload`

Deletes multiple automatic discounts in a single operation, providing efficient bulk management for stores with extensive discount catalogs. This mutation processes deletions asynchronously to handle large volumes without blocking other operations.

For example, when cleaning up expired seasonal promotions or removing outdated automatic discounts across product categories, merchants can delete dozens of discounts simultaneously rather than processing each individually.

Use `DiscountAutomaticBulkDelete` to:
- Remove multiple automatic discounts efficiently
- Clean up expired or obsolete promotions
- Streamline discount management workflows
- Process large-scale discount removals asynchronously

The operation returns a job object for tracking deletion progress and any validation errors encountered during processing.

Learn more about [discount management](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomatic).

## Arguments

- **`search`**: `String` — The search query for filtering automatic discounts to delete.  For more information on the list of supported fields and search syntax, refer to the [AutomaticDiscountNodes query section](https://shopify.dev/api/admin-graphql/latest/queries/automaticDiscountNodes#argument-automaticdiscountnodes-query).
- **`savedSearchId`**: `ID` — The ID of the saved search to use for filtering automatic discounts to delete.
- **`ids`**: `[ID!]` — The IDs of the automatic discounts to delete.

## Payload Fields

- `job`: `Job` — The asynchronous job removing the automatic discounts.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticBulkDeletePayload](../types/objects/DiscountAutomaticBulkDeletePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)
- [Job](../types/objects/Job.md)

## Example Mutation

```graphql
mutation DiscountAutomaticBulkDelete($search: String, $savedSearchId: ID, $ids: [ID!]) {
  discountAutomaticBulkDelete(search: $search, savedSearchId: $savedSearchId, ids: $ids) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
