# Input Object: `SubscriptionContractCreateInput`

The input fields required to create a Subscription Contract.

## Input Fields

- `customerId`: `ID!` — The ID of the customer to associate with the subscription contract.
- `nextBillingDate`: `DateTime!` — The next billing date for the subscription contract.
- `currencyCode`: `CurrencyCode!` — The currency used for the subscription contract.
- `contract`: `SubscriptionDraftInput!` — The attributes used as input for the Subscription Draft.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [SubscriptionDraftInput](../../types/inputs/SubscriptionDraftInput.md)
