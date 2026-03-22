# Input Object: `DiscountAutomaticAppInput`

The input fields for creating or updating an automatic discount
that's managed by an app.

Use these input fields when you need advanced, custom, or
dynamic discount capabilities that aren't supported by
[Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

## Input Fields

- `combinesWith`: `DiscountCombinesWithInput` — The
- `discountClasses`: `[DiscountClass!]` — Determines which discount effects the discount can apply.
- `title`: `String` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `startsAt`: `DateTime` — The date and time when the discount becomes active and is available to customers.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `context`: `DiscountContextInput` — The context defining which buyers can use the discount.
- `functionHandle`: `String` — The handle of the function providing the discount.
- `metafields`: `[MetafieldInput!]` = `[]` — Additional metafields to associate to the discount.
- `appliesOnSubscription`: `Boolean` = `false` — Whether the discount applies on subscription items.
- `appliesOnOneTimePurchase`: `Boolean` = `true` — Whether the discount applies on one-time purchases.
- `recurringCycleLimit`: `Int` = `1` — The number of billing cycles for which the discount can be applied,

## Related Types

- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
