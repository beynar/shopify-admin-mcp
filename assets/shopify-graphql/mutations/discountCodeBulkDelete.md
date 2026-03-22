# Mutation: `discountCodeBulkDelete`

**Returns:** `DiscountCodeBulkDeletePayload`

Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:
- A search query
- A saved search ID
- A list of discount code IDs

For example, you can delete discounts for all codes that match a search criteria, or delete a predefined set of discount codes.

## Arguments

- **`search`**: `String` — The search query for filtering discounts. <br><br> For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.
- **`savedSearchId`**: `ID` — The ID of the saved search for filtering discounts to delete. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.
- **`ids`**: `[ID!]` — The IDs of the discounts to delete.

## Payload Fields

- `job`: `Job` — The asynchronous job that deletes the discounts.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeBulkDeletePayload](../types/objects/DiscountCodeBulkDeletePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)
- [Job](../types/objects/Job.md)

## Example Mutation

```graphql
mutation DiscountCodeBulkDelete($search: String, $savedSearchId: ID, $ids: [ID!]) {
  discountCodeBulkDelete(search: $search, savedSearchId: $savedSearchId, ids: $ids) {
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
