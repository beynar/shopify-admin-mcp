# Mutation: `discountAutomaticAppCreate`

**Returns:** `DiscountAutomaticAppCreatePayload`

Creates an automatic discount that's managed by an app.
Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions)
when you need advanced, custom, or dynamic discount capabilities that aren't supported by
[Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to create an automatic discount using an app's
"Volume" discount type that applies a percentage
off when customers purchase more than the minimum quantity of a product. For an example implementation,
refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

> Note:
> To create code discounts with custom logic, use the
[`discountCodeAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)
mutation.

## Arguments

- **`automaticAppDiscount`**: `DiscountAutomaticAppInput!` — The input data used to create the automatic discount.

## Payload Fields

- `automaticAppDiscount`: `DiscountAutomaticApp` — The automatic discount that the app manages.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticApp](../types/objects/DiscountAutomaticApp.md)
- [DiscountAutomaticAppCreatePayload](../types/objects/DiscountAutomaticAppCreatePayload.md)
- [DiscountAutomaticAppInput](../types/inputs/DiscountAutomaticAppInput.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
  discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
    automaticAppDiscount {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
