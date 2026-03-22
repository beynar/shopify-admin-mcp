# Object: `DeliveryMethod`

Information about the delivery method selected for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). Includes the method type, expected delivery timeframe, and any additional information needed for delivery.

The delivery method stores details from checkout such as the carrier, branded promises like Shop Promise, and the delivery option name shown to the buyer. Additional information like delivery instructions or contact phone numbers helps fulfill the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) correctly.

**Implements:** `Node`

## Fields

- `additionalInformation`: `DeliveryMethodAdditionalInformation` — The Additional information to consider when performing the delivery.
- `brandedPromise`: `DeliveryBrandedPromise` — The branded promise that was presented to the buyer during checkout.  For example: Shop Promise.
- `id`: `ID!` — A globally-unique ID.
- `maxDeliveryDateTime`: `DateTime` — The latest delivery date and time when the fulfillment is expected to arrive at the buyer's location.
- `methodType`: `DeliveryMethodType!` — The type of the delivery method.
- `minDeliveryDateTime`: `DateTime` — The earliest delivery date and time when the fulfillment is expected to arrive at the buyer's location.
- `presentedName`: `String` — The name of the delivery option that was presented to the buyer during checkout.
- `serviceCode`: `String` — A reference to the shipping method.
- `sourceReference`: `String` — Source reference is promise provider specific data associated with delivery promise.

## Related Types

- [DeliveryBrandedPromise](../../types/objects/DeliveryBrandedPromise.md)
- [DeliveryMethodAdditionalInformation](../../types/objects/DeliveryMethodAdditionalInformation.md)
- [DeliveryMethodType](../../types/enums/DeliveryMethodType.md)
