# Object: `DiscountAutomaticBxgy`

The `DiscountAutomaticBxgy` object lets you manage
[buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering
them additional items at a discounted price or for free when they purchase a specified quantity of items.

The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to
specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
[collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
including limitations and considerations.

> Note:
> The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy)
object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to
receive a discount.
>
> API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

**Implements:** `HasEvents`, `Node`

## Fields

- `asyncUsageCount`: `Int!` — The number of times that the discount has been used.
- `combinesWith`: `DiscountCombinesWith!` — The
- `context`: `DiscountContext!` — The context defining which buyers can use the discount.
- `createdAt`: `DateTime!` — The date and time when the discount was created.
- `customerBuys`: `DiscountCustomerBuys!` — The items eligible for the discount and the required quantity of each to receive the discount.
- `customerGets`: `DiscountCustomerGets!` — The items in the order that qualify for the discount, their quantities, and the total value of the discount.
- `discountClass`: `MerchandiseDiscountClass!` *(deprecated)* — The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` *(deprecated)* — A legacy unique ID for the discount.
- `startsAt`: `DateTime!` — The date and time when the discount becomes active and is available to customers.
- `status`: `DiscountStatus!` — The status of the discount that describes its availability,
- `summary`: `String!` — A detailed explanation of what the discount is,
- `title`: `String!` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `updatedAt`: `DateTime!` — The date and time when the discount was updated.
- `usageCount`: `Int!` *(deprecated)* — The number of times that the discount has been used.
- `usesPerOrderLimit`: `Int` — The maximum number of times that the discount can be applied to an order.

## Related Types

- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [DiscountContext](../../types/unions/DiscountContext.md)
- [DiscountCustomerBuys](../../types/objects/DiscountCustomerBuys.md)
- [DiscountCustomerGets](../../types/objects/DiscountCustomerGets.md)
- [DiscountStatus](../../types/enums/DiscountStatus.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [MerchandiseDiscountClass](../../types/enums/MerchandiseDiscountClass.md)
