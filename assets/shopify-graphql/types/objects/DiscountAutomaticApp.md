# Object: `DiscountAutomaticApp`

The `DiscountAutomaticApp` object stores information about automatic discounts
that are managed by an app using
[Shopify Functions](https://shopify.dev/docs/apps/build/functions).
Use `DiscountAutomaticApp`when you need advanced, custom, or
dynamic discount capabilities that aren't supported by
[Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

Learn more about creating
[custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

> Note:
> The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)
object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp`
stores information about discount codes that are managed by an app using Shopify Functions.
>
> API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

## Fields

- `appDiscountType`: `AppDiscountType!` — The details about the app extension that's providing the
- `appliesOnOneTimePurchase`: `Boolean!` — Whether the discount applies on one-time purchases.
- `appliesOnSubscription`: `Boolean!` — Whether the discount applies on subscription items.
- `asyncUsageCount`: `Int!` — The number of times that the discount has been used.
- `combinesWith`: `DiscountCombinesWith!` — The
- `context`: `DiscountContext!` — The context defining which buyers can use the discount.
- `createdAt`: `DateTime!` — The date and time when the discount was created.
- `discountClass`: `DiscountClass!` *(deprecated)* — The
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `discountId`: `ID!` — The [globally-unique ID](https://shopify.dev/docs/api/usage/gids)
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `errorHistory`: `FunctionsErrorHistory` — The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors)
- `recurringCycleLimit`: `Int!` — The number of billing cycles for which the discount can be applied,
- `startsAt`: `DateTime!` — The date and time when the discount becomes active and is available to customers.
- `status`: `DiscountStatus!` — The status of the discount that describes its availability,
- `title`: `String!` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `updatedAt`: `DateTime!` — The date and time when the discount was updated.

## Related Types

- [AppDiscountType](../../types/objects/AppDiscountType.md)
- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [DiscountContext](../../types/unions/DiscountContext.md)
- [DiscountStatus](../../types/enums/DiscountStatus.md)
- [FunctionsErrorHistory](../../types/objects/FunctionsErrorHistory.md)
