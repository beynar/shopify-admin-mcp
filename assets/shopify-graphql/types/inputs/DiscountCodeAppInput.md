# Input Object: `DiscountCodeAppInput`

The input fields for creating or updating a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

Use these input fields when you need advanced or custom discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

## Input Fields

- `combinesWith`: `DiscountCombinesWithInput` — The
- `discountClasses`: `[DiscountClass!]` — Determines which discount effects the discount can apply.
- `title`: `String` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `startsAt`: `DateTime` — The date and time when the discount becomes active and is available to customers.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `appliesOncePerCustomer`: `Boolean` — Whether a customer can only use the discount once.
- `code`: `String` — The code that customers use to apply the discount.
- `usageLimit`: `Int` — The maximum number of times the discount can be redeemed.
- `context`: `DiscountContextInput` — The context defining which buyers can use the discount.
- `functionHandle`: `String` — The handle of the function providing the discount.
- `appliesOnSubscription`: `Boolean` = `false` — Whether the discount applies to subscriptions items.
- `appliesOnOneTimePurchase`: `Boolean` = `true` — Whether the discount applies on regular one-time-purchase items.
- `recurringCycleLimit`: `Int` = `1` — The number of times a discount applies on recurring purchases (subscriptions).         0 will apply infinitely whereas 1 will only apply to the first checkout.
- `metafields`: `[MetafieldInput!]` = `[]` — Additional metafields to associate to the discount. [Metafields](https://shopify.dev/docs/apps/build/custom-data) provide dynamic function configuration with different parameters, such as `percentage` for a percentage discount. Merchants can set metafield values in the Shopify admin, which makes the discount function more flexible and customizable.

## Related Types

- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
