# Object: `DiscountCodeApp`

The `DiscountCodeApp` object stores information about code discounts
that are managed by an app using
[Shopify Functions](https://shopify.dev/docs/apps/build/functions).
Use `DiscountCodeApp` when you need advanced, custom, or
dynamic discount capabilities that aren't supported by
[Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

Learn more about creating
[custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

> Note:
> The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)
object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp`
stores information about automatic discounts that are managed by an app using Shopify Functions.

## Fields

- `appDiscountType`: `AppDiscountType!` — The details about the app extension that's providing the
- `appliesOnOneTimePurchase`: `Boolean!` — Whether the discount applies on regular one-time-purchase items.
- `appliesOnSubscription`: `Boolean!` — Whether the discount applies to subscriptions items.
- `appliesOncePerCustomer`: `Boolean!` — Whether a customer can only use the discount once.
- `asyncUsageCount`: `Int!` — The number of times that the discount has been used.
- `codes` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`: `DiscountRedeemCodeConnection!` — A list codes that customers can use to redeem the discount.
- `codesCount`: `Count` — The number of codes that a customer can use to redeem the discount.
- `combinesWith`: `DiscountCombinesWith!` — The
- `context`: `DiscountContext!` — The context defining which buyers can use the discount.
- `createdAt`: `DateTime!` — The date and time when the discount was created.
- `customerSelection`: `DiscountCustomerSelection!` *(deprecated)* — The customers that can use the discount.
- `discountClass`: `DiscountClass!` *(deprecated)* — The
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `discountId`: `ID!` — The [globally-unique ID](https://shopify.dev/docs/api/usage/gids)
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `errorHistory`: `FunctionsErrorHistory` — The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors)
- `hasTimelineComment`: `Boolean!` — Whether there are
- `recurringCycleLimit`: `Int` — The number of billing cycles for which the discount can be applied,
- `shareableUrls`: `[DiscountShareableUrl!]!` — A list of URLs that the app can use to share the discount.
- `startsAt`: `DateTime!` — The date and time when the discount becomes active and is available to customers.
- `status`: `DiscountStatus!` — The status of the discount that describes its availability,
- `title`: `String!` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `totalSales`: `MoneyV2` — The total sales from orders where the discount was used.
- `updatedAt`: `DateTime!` — The date and time when the discount was updated.
- `usageLimit`: `Int` — The maximum number of times the discount can be redeemed.

## Related Types

- [AppDiscountType](../../types/objects/AppDiscountType.md)
- [Count](../../types/objects/Count.md)
- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCodeSortKeys](../../types/enums/DiscountCodeSortKeys.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [DiscountContext](../../types/unions/DiscountContext.md)
- [DiscountCustomerSelection](../../types/unions/DiscountCustomerSelection.md)
- [DiscountShareableUrl](../../types/objects/DiscountShareableUrl.md)
- [DiscountStatus](../../types/enums/DiscountStatus.md)
- [FunctionsErrorHistory](../../types/objects/FunctionsErrorHistory.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
