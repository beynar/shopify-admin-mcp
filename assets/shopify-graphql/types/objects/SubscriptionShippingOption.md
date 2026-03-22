# Object: `SubscriptionShippingOption`

A shipping option to deliver a subscription contract.

## Fields

- `carrierService`: `DeliveryCarrierService` *(deprecated)* — The carrier service that's providing this shipping option.
- `code`: `String!` — The code of the shipping option.
- `description`: `String` — The description of the shipping option.
- `phoneRequired`: `Boolean` — If a phone number is required for the shipping option.
- `presentmentTitle`: `String` — The presentment title of the shipping option.
- `price`: `MoneyV2` — The price of the shipping option.
- `title`: `String!` — The title of the shipping option.

## Related Types

- [DeliveryCarrierService](../../types/objects/DeliveryCarrierService.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
