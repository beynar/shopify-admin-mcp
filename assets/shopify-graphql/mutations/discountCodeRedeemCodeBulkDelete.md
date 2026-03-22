# Mutation: `discountCodeRedeemCodeBulkDelete`

**Returns:** `DiscountCodeRedeemCodeBulkDeletePayload`

Asynchronously delete
[discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes)
in bulk that customers can use to redeem a discount.

## Arguments

- **`discountId`**: `ID!` — The ID of the [`DiscountCodeNode`](https://help.shopify.com/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be removed from. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.
- **`search`**: `String` — A filter made up of terms, connectives, modifiers, and comparators that you can use to search for code discounts. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).  For a list of accepted values for the `search` field, refer to the [`query` argument on the `codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#argument-query).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/docs/api/admin-graphql/latest/objects/savedsearch#field-id).
- **`ids`**: `[ID!]` — The IDs of the [`DiscountRedeemCode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcode#field-id) objects to delete. For example, `gid://shopify/DiscountRedeemCode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

## Payload Fields

- `job`: `Job` — The asynchronous job that deletes the discount codes.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeRedeemCodeBulkDeletePayload](../types/objects/DiscountCodeRedeemCodeBulkDeletePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)
- [Job](../types/objects/Job.md)

## Example Mutation

```graphql
mutation DiscountCodeRedeemCodeBulkDelete($discountId: ID!, $search: String, $savedSearchId: ID, $ids: [ID!]) {
  discountCodeRedeemCodeBulkDelete(discountId: $discountId, search: $search, savedSearchId: $savedSearchId, ids: $ids) {
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
