# Query: `subscriptionDraft`

**Returns:** `SubscriptionDraft`

Returns a Subscription Draft resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the Subscription Draft to return.

## Return Type Fields

- `billingCycle`: `SubscriptionBillingCycle` — The billing cycle that the subscription contract will be associated with.
- `billingPolicy`: `SubscriptionBillingPolicy!` — The billing policy for the subscription contract.
- `concatenatedBillingCycles`: `SubscriptionBillingCycleConnection!` — The billing cycles of the contracts that will be concatenated to the subscription contract.
- `currencyCode`: `CurrencyCode!` — The currency used for the subscription contract.
- `customAttributes`: `[Attribute!]!` — A list of the custom attributes to be added to the generated orders.
- `customer`: `Customer!` — The customer to whom the subscription contract belongs.
- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method used for the subscription contract.
- `deliveryMethod`: `SubscriptionDeliveryMethod` — The delivery method for each billing of the subscription contract.
- `deliveryOptions`: `SubscriptionDeliveryOptionResult` — The available delivery options for a given delivery address. Returns `null` for pending requests.
- `deliveryPolicy`: `SubscriptionDeliveryPolicy!` — The delivery policy for the subscription contract.
- `deliveryPrice`: `MoneyV2` — The delivery price for each billing the subscription contract.
- `discounts`: `SubscriptionDiscountConnection!` — The list of subscription discounts which will be associated with the subscription contract.
- `discountsAdded`: `SubscriptionDiscountConnection!` — The list of subscription discounts to be added to the subscription contract.
- `discountsRemoved`: `SubscriptionDiscountConnection!` — The list of subscription discounts to be removed from the subscription contract.
- `discountsUpdated`: `SubscriptionDiscountConnection!` — The list of subscription discounts to be updated on the subscription contract.
- `id`: `ID!` — A globally-unique ID.
- `lines`: `SubscriptionLineConnection!` — The list of subscription lines which will be associated with the subscription contract.
- `linesAdded`: `SubscriptionLineConnection!` — The list of subscription lines to be added to the subscription contract.
- `linesRemoved`: `SubscriptionLineConnection!` — The list of subscription lines to be removed from the subscription contract.
- `nextBillingDate`: `DateTime` — The next billing date for the subscription contract.
- `note`: `String` — The note field that will be applied to the generated orders.
- `originalContract`: `SubscriptionContract` — The original subscription contract.
- `status`: `SubscriptionContractSubscriptionStatus` — The current status of the subscription contract.

## Related Types

- [Attribute](../types/objects/Attribute.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [Customer](../types/objects/Customer.md)
- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingPolicy](../types/objects/SubscriptionBillingPolicy.md)
- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractSubscriptionStatus](../types/enums/SubscriptionContractSubscriptionStatus.md)
- [SubscriptionDeliveryMethod](../types/unions/SubscriptionDeliveryMethod.md)
- [SubscriptionDeliveryOptionResult](../types/unions/SubscriptionDeliveryOptionResult.md)
- [SubscriptionDeliveryPolicy](../types/objects/SubscriptionDeliveryPolicy.md)
- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionShippingOptionResult](../types/unions/SubscriptionShippingOptionResult.md)

## Example Query

```graphql
query SubscriptionDraft($id: ID!) {
  subscriptionDraft(id: $id) {
    nextBillingDate
    note
  }
}
```
