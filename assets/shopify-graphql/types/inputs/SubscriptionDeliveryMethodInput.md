# Input Object: `SubscriptionDeliveryMethodInput`

Specifies delivery method fields for a subscription draft.
This is an input union: one, and only one, field can be provided.
The field provided will determine which delivery method is to be used.

## Input Fields

- `shipping`: `SubscriptionDeliveryMethodShippingInput` — The input fields for the shipping delivery method.
- `localDelivery`: `SubscriptionDeliveryMethodLocalDeliveryInput` — The input fields for the local delivery method.
- `pickup`: `SubscriptionDeliveryMethodPickupInput` — The input fields for the pickup delivery method.

## Related Types

- [SubscriptionDeliveryMethodLocalDeliveryInput](../../types/inputs/SubscriptionDeliveryMethodLocalDeliveryInput.md)
- [SubscriptionDeliveryMethodPickupInput](../../types/inputs/SubscriptionDeliveryMethodPickupInput.md)
- [SubscriptionDeliveryMethodShippingInput](../../types/inputs/SubscriptionDeliveryMethodShippingInput.md)
