# Object: `AppDiscountType`

The details about the app extension that's providing the
[discount type](https://help.shopify.com/manual/discounts/discount-types).
This information includes the app extension's name and
[client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets),
[App Bridge configuration](https://shopify.dev/docs/api/app-bridge),
[discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations),
[function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries),
and other metadata about the discount type, including the discount type's name and description.

## Fields

- `app`: `App!` — The name of the app extension that's providing the
- `appBridge`: `FunctionsAppBridge!` — The [App Bridge configuration](https://shopify.dev/docs/api/app-bridge)
- `appKey`: `String!` — The [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets)
- `description`: `String` — A description of the
- `discountClass`: `DiscountClass!` *(deprecated)* — The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `discountClasses`: `[DiscountClass!]!` — The list of [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `functionId`: `String!` — The
- `targetType`: `DiscountApplicationTargetType!` *(deprecated)* — The type of line item on an order that the
- `title`: `String!` — The name of the [discount type](https://help.shopify.com/manual/discounts/discount-types)

## Related Types

- [App](../../types/objects/App.md)
- [DiscountApplicationTargetType](../../types/enums/DiscountApplicationTargetType.md)
- [DiscountClass](../../types/enums/DiscountClass.md)
- [FunctionsAppBridge](../../types/objects/FunctionsAppBridge.md)
