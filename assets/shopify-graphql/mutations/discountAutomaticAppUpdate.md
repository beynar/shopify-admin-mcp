# Mutation: `discountAutomaticAppUpdate`

**Returns:** `DiscountAutomaticAppUpdatePayload`

Updates an existing automatic discount that's managed by an app using
[Shopify Functions](https://shopify.dev/docs/apps/build/functions).
Use this mutation when you need advanced, custom, or
dynamic discount capabilities that aren't supported by
[Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to update a new "Volume" discount type that applies a percentage
off when customers purchase more than the minimum quantity of a product. For an example implementation,
refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

> Note:
> To update code discounts with custom logic, use the
[`discountCodeAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)
mutation instead.

## Arguments

- **`id`**: `ID!` — The ID of the automatic discount to update.
- **`automaticAppDiscount`**: `DiscountAutomaticAppInput!` — The input fields required to update the automatic discount.

## Payload Fields

- `automaticAppDiscount`: `DiscountAutomaticApp` — The updated automatic discount that the app provides.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticApp](../types/objects/DiscountAutomaticApp.md)
- [DiscountAutomaticAppInput](../types/inputs/DiscountAutomaticAppInput.md)
- [DiscountAutomaticAppUpdatePayload](../types/objects/DiscountAutomaticAppUpdatePayload.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticAppUpdate($id: ID!, $automaticAppDiscount: DiscountAutomaticAppInput!) {
  discountAutomaticAppUpdate(id: $id, automaticAppDiscount: $automaticAppDiscount) {
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
