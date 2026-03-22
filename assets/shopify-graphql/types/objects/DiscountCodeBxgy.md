# Object: `DiscountCodeBxgy`

The `DiscountCodeBxgy` object lets you manage
[buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers
by offering them additional items at a discounted price or for free when they purchase a specified quantity
of items.

The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to
specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
[collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
including limitations and considerations.

> Note:
> The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy)
object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied,
without the need for customers to enter a code.

## Fields

- `appliesOncePerCustomer`: `Boolean!` — Whether a customer can only use the discount once.
- `asyncUsageCount`: `Int!` — The number of times that the discount has been used.
- `codes` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`: `DiscountRedeemCodeConnection!` — A list codes that customers can use to redeem the discount.
- `codesCount`: `Count` — The number of codes that a customer can use to redeem the discount.
- `combinesWith`: `DiscountCombinesWith!` — The
- `context`: `DiscountContext!` — The context defining which buyers can use the discount.
- `createdAt`: `DateTime!` — The date and time when the discount was created.
- `customerBuys`: `DiscountCustomerBuys!` — The items eligible for the discount and the required quantity of each to receive the discount.
- `customerGets`: `DiscountCustomerGets!` — The items in the order that qualify for the discount, their quantities, and the total value of the discount.
- `customerSelection`: `DiscountCustomerSelection!` *(deprecated)* — The customers that can use the discount.
- `discountClass`: `MerchandiseDiscountClass!` *(deprecated)* — The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `hasTimelineComment`: `Boolean!` — Whether there are
- `shareableUrls`: `[DiscountShareableUrl!]!` — A list of URLs that the app can use to share the discount.
- `startsAt`: `DateTime!` — The date and time when the discount becomes active and is available to customers.
- `status`: `DiscountStatus!` — The status of the discount that describes its availability,
- `summary`: `String!` — A detailed explanation of what the discount is,
- `title`: `String!` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `totalSales`: `MoneyV2` — The total sales from orders where the discount was used.
- `updatedAt`: `DateTime!` — The date and time when the discount was updated.
- `usageLimit`: `Int` — The maximum number of times the discount can be redeemed.
- `usesPerOrderLimit`: `Int` — The maximum number of times that the discount can be applied to an order.

## Related Types

- [Count](../../types/objects/Count.md)
- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCodeSortKeys](../../types/enums/DiscountCodeSortKeys.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [DiscountContext](../../types/unions/DiscountContext.md)
- [DiscountCustomerBuys](../../types/objects/DiscountCustomerBuys.md)
- [DiscountCustomerGets](../../types/objects/DiscountCustomerGets.md)
- [DiscountCustomerSelection](../../types/unions/DiscountCustomerSelection.md)
- [DiscountShareableUrl](../../types/objects/DiscountShareableUrl.md)
- [DiscountStatus](../../types/enums/DiscountStatus.md)
- [MerchandiseDiscountClass](../../types/enums/MerchandiseDiscountClass.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
