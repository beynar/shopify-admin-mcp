# Object: `DiscountAutomaticFreeShipping`

The `DiscountAutomaticFreeShipping` object lets you manage
[free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that
merchants offer to customers to waive shipping costs and encourage online purchases.

The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to
specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
[collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
including limitations and considerations.

> Note:
> The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping)
object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to
receive a discount.
>
> API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

## Fields

- `appliesOnOneTimePurchase`: `Boolean!` — Whether the discount applies on one-time purchases.
- `appliesOnSubscription`: `Boolean!` — Whether the discount applies on subscription items.
- `asyncUsageCount`: `Int!` — The number of times that the discount has been used.
- `combinesWith`: `DiscountCombinesWith!` — The
- `context`: `DiscountContext!` — The context defining which buyers can use the discount.
- `createdAt`: `DateTime!` — The date and time when the discount was created.
- `destinationSelection`: `DiscountShippingDestinationSelection!` — The countries that qualify for the discount.
- `discountClass`: `ShippingDiscountClass!` *(deprecated)* — The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `hasTimelineComment`: `Boolean!` — Whether there are
- `maximumShippingPrice`: `MoneyV2` — The maximum shipping price amount accepted to qualify for the discount.
- `minimumRequirement`: `DiscountMinimumRequirement` — The minimum subtotal or quantity of items that are required for the discount to be applied.
- `recurringCycleLimit`: `Int!` — The number of billing cycles for which the discount can be applied,
- `shortSummary`: `String!` — An abbreviated version of the discount
- `startsAt`: `DateTime!` — The date and time when the discount becomes active and is available to customers.
- `status`: `DiscountStatus!` — The status of the discount that describes its availability,
- `summary`: `String!` — A detailed explanation of what the discount is,
- `title`: `String!` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `totalSales`: `MoneyV2` — The total sales from orders where the discount was used.
- `updatedAt`: `DateTime!` — The date and time when the discount was updated.

## Related Types

- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [DiscountContext](../../types/unions/DiscountContext.md)
- [DiscountMinimumRequirement](../../types/unions/DiscountMinimumRequirement.md)
- [DiscountShippingDestinationSelection](../../types/unions/DiscountShippingDestinationSelection.md)
- [DiscountStatus](../../types/enums/DiscountStatus.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [ShippingDiscountClass](../../types/enums/ShippingDiscountClass.md)
