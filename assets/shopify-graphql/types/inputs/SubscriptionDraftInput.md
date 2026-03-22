# Input Object: `SubscriptionDraftInput`

The input fields required to create a Subscription Draft.

## Input Fields

- `status`: `SubscriptionContractSubscriptionStatus` — The current status of the subscription contract.
- `paymentMethodId`: `ID` — The ID of the payment method to be used for the subscription contract.
- `nextBillingDate`: `DateTime` — The next billing date for the subscription contract.
- `billingPolicy`: `SubscriptionBillingPolicyInput` — The billing policy for the subscription contract.
- `deliveryPolicy`: `SubscriptionDeliveryPolicyInput` — The delivery policy for the subscription contract.
- `deliveryPrice`: `Decimal` — The shipping price for each renewal the subscription contract.
- `deliveryMethod`: `SubscriptionDeliveryMethodInput` — The delivery method for the subscription contract.
- `note`: `String` — The note field that will be applied to the generated orders.
- `customAttributes`: `[AttributeInput!]` — A list of the custom attributes added to the subscription contract.

## Related Types

- [AttributeInput](../../types/inputs/AttributeInput.md)
- [SubscriptionBillingPolicyInput](../../types/inputs/SubscriptionBillingPolicyInput.md)
- [SubscriptionContractSubscriptionStatus](../../types/enums/SubscriptionContractSubscriptionStatus.md)
- [SubscriptionDeliveryMethodInput](../../types/inputs/SubscriptionDeliveryMethodInput.md)
- [SubscriptionDeliveryPolicyInput](../../types/inputs/SubscriptionDeliveryPolicyInput.md)
