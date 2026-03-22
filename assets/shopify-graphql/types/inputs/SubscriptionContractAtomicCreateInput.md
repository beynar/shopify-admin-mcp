# Input Object: `SubscriptionContractAtomicCreateInput`

The input fields required to create a Subscription Contract.

## Input Fields

- `customerId`: `ID!` — The ID of the customer to associate with the subscription contract.
- `nextBillingDate`: `DateTime!` — The next billing date for the subscription contract.This field is independent of billing cycles.It stores metadata set by the apps, and thus not managed by Shopify.It can be queried from subscriptionContract.nextBillingDate.
- `currencyCode`: `CurrencyCode!` — The currency used for the subscription contract.
- `contract`: `SubscriptionDraftInput!` — The attributes used as input for the Subscription Draft.
- `lines`: `[SubscriptionAtomicLineInput!]!` — A list of new Subscription Lines.
- `discountCodes`: `[String!]` = `[]` — A list of discount redeem codes to apply to the subscription contract.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [SubscriptionAtomicLineInput](../../types/inputs/SubscriptionAtomicLineInput.md)
- [SubscriptionDraftInput](../../types/inputs/SubscriptionDraftInput.md)
