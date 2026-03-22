# Query: `appDiscountTypes`

**Returns:** `[AppDiscountType!]!`

A list of app discount types installed by apps.

## Return Type Fields

- `app`: `App!` — The name of the app extension that's providing the
- `appBridge`: `FunctionsAppBridge!` — The [App Bridge configuration](https://shopify.dev/docs/api/app-bridge)
- `appKey`: `String!` — The [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets)
- `description`: `String` — A description of the
- `discountClasses`: `[DiscountClass!]!` — The list of [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
- `functionId`: `String!` — The
- `title`: `String!` — The name of the [discount type](https://help.shopify.com/manual/discounts/discount-types)

## Related Types

- [App](../types/objects/App.md)
- [AppDiscountType](../types/objects/AppDiscountType.md)
- [DiscountApplicationTargetType](../types/enums/DiscountApplicationTargetType.md)
- [DiscountClass](../types/enums/DiscountClass.md)
- [FunctionsAppBridge](../types/objects/FunctionsAppBridge.md)

## Example Query

```graphql
query {
  appDiscountTypes {
    appKey
    description
    functionId
    title
  }
}
```
