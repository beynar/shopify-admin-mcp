# Mutation: `discountRedeemCodeBulkAdd`

**Returns:** `DiscountRedeemCodeBulkAddPayload`

Asynchronously add
[discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes)
in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation
to automate the distribution of discount codes through emails or other
marketing channels.

## Arguments

- **`discountId`**: `ID!` — The ID of the [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be added to. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.
- **`codes`**: `[DiscountRedeemCodeInput!]!` — The list of codes to associate with the [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes). Maximum: 250 codes.

## Payload Fields

- `bulkCreation`: `DiscountRedeemCodeBulkCreation` — The ID of bulk operation that creates multiple unique discount codes.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountRedeemCodeBulkAddPayload](../types/objects/DiscountRedeemCodeBulkAddPayload.md)
- [DiscountRedeemCodeBulkCreation](../types/objects/DiscountRedeemCodeBulkCreation.md)
- [DiscountRedeemCodeInput](../types/inputs/DiscountRedeemCodeInput.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
  discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
    bulkCreation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
