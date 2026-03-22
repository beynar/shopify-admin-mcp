# Mutation: `discountCodeAppCreate`

**Returns:** `DiscountCodeAppCreatePayload`

Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity
of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

> Note:
> To create automatic discounts with custom logic, use [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).

## Arguments

- **`codeAppDiscount`**: `DiscountCodeAppInput!` — The input data used to create the discount.

## Payload Fields

- `codeAppDiscount`: `DiscountCodeApp` — The discount that the app provides.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeApp](../types/objects/DiscountCodeApp.md)
- [DiscountCodeAppCreatePayload](../types/objects/DiscountCodeAppCreatePayload.md)
- [DiscountCodeAppInput](../types/inputs/DiscountCodeAppInput.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
  discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
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
