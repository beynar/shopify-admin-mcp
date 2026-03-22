# Object: `DiscountAutomaticBasic`

The `DiscountAutomaticBasic` object lets you manage
[amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
that are automatically applied on a cart and at checkout. Amount off discounts give customers a
fixed value or a percentage off the products in an order, but don't apply to shipping costs.

The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to
specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
[collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
including limitations and considerations.

> Note:
> The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic)
object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to
receive a discount.
>
> API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

## Fields

- `asyncUsageCount`: `Int!` — The number of times that the discount has been used.
- `combinesWith`: `DiscountCombinesWith!` — The
- `context`: `DiscountContext!` — The context defining which buyers can use the discount.
- `createdAt`: `DateTime!` — The date and time when the discount was created.
- `customerGets`: `DiscountCustomerGets!` — The items in the order that qualify for the discount, their quantities, and the total value of the discount.
- `discountClass`: `MerchandiseDiscountClass!` *(deprecated)* — The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `minimumRequirement`: `DiscountMinimumRequirement` — The minimum subtotal or quantity of items that are required for the discount to be applied.
- `recurringCycleLimit`: `Int!` — The number of billing cycles for which the discount can be applied,
- `shortSummary`: `String!` — An abbreviated version of the discount
- `startsAt`: `DateTime!` — The date and time when the discount becomes active and is available to customers.
- `status`: `DiscountStatus!` — The status of the discount that describes its availability,
- `summary`: `String!` — A detailed explanation of what the discount is,
- `title`: `String!` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `updatedAt`: `DateTime!` — The date and time when the discount was updated.
- `usageCount`: `Int!` *(deprecated)* — The number of times that the discount has been used.

## Related Types

- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [DiscountContext](../../types/unions/DiscountContext.md)
- [DiscountCustomerGets](../../types/objects/DiscountCustomerGets.md)
- [DiscountMinimumRequirement](../../types/unions/DiscountMinimumRequirement.md)
- [DiscountStatus](../../types/enums/DiscountStatus.md)
- [MerchandiseDiscountClass](../../types/enums/MerchandiseDiscountClass.md)
