# Interface: `AppPurchase`

Services and features purchased once by the store.

## Fields

- `createdAt`: `DateTime!` — The date and time when the app purchase occurred.
- `name`: `String!` — The name of the app purchase.
- `price`: `MoneyV2!` — The amount to be charged to the store for the app purchase.
- `status`: `AppPurchaseStatus!` — The status of the app purchase.
- `test`: `Boolean!` — Whether the app purchase is a test transaction.

## Possible Types

- [AppPurchaseOneTime](../../types/objects/AppPurchaseOneTime.md)

## Related Types

- [AppPurchaseStatus](../../types/enums/AppPurchaseStatus.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
