# Mutation: `discountCodeAppUpdate`

**Returns:** `DiscountCodeAppUpdatePayload`

Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

> Note:
> To update automatic discounts, use [`discountAutomaticAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate).

## Arguments

- **`id`**: `ID!` — The ID of the discount to update.
- **`codeAppDiscount`**: `DiscountCodeAppInput!` — The input fields required to update the discount.

## Payload Fields

- `codeAppDiscount`: `DiscountCodeApp` — The updated discount that the app provides.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeApp](../types/objects/DiscountCodeApp.md)
- [DiscountCodeAppInput](../types/inputs/DiscountCodeAppInput.md)
- [DiscountCodeAppUpdatePayload](../types/objects/DiscountCodeAppUpdatePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeAppUpdate($id: ID!, $codeAppDiscount: DiscountCodeAppInput!) {
  discountCodeAppUpdate(id: $id, codeAppDiscount: $codeAppDiscount) {
    codeAppDiscount {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
