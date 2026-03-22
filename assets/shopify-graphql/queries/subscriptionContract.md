# Query: `subscriptionContract`

**Returns:** `SubscriptionContract`

Retrieves a [`SubscriptionContract`](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract) by ID.

The contract tracks the subscription's lifecycle through various [statuses](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContract#returns-SubscriptionContract.fields.status), and links to related billing attempts, generated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects, and the customer's [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod).

## Arguments

- **`id`**: `ID!` — The ID of the Subscription Contract to return.

## Return Type Fields

- `app`: `App` — The subscription app that the subscription contract is registered to.
- `appAdminUrl`: `URL` — The URL of the subscription contract page on the subscription app.
- `billingAttempts`: `SubscriptionBillingAttemptConnection!` — The list of billing attempts associated with the subscription contract.
- `billingPolicy`: `SubscriptionBillingPolicy!` — The billing policy associated with the subscription contract.
- `createdAt`: `DateTime!` — The date and time when the subscription contract was created.
- `currencyCode`: `CurrencyCode!` — The currency that's used for the subscription contract.
- `customAttributes`: `[Attribute!]!` — A list of the custom attributes to be added to the generated orders.
- `customer`: `Customer` — The customer to whom the subscription contract belongs.
- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method that's used for the subscription contract.
- `deliveryMethod`: `SubscriptionDeliveryMethod` — The delivery method for each billing of the subscription contract.
- `deliveryPolicy`: `SubscriptionDeliveryPolicy!` — The delivery policy associated with the subscription contract.
- `deliveryPrice`: `MoneyV2!` — The delivery price for each billing of the subscription contract.
- `discounts`: `SubscriptionManualDiscountConnection!` — The list of subscription discounts associated with the subscription contract.
- `id`: `ID!` — A globally-unique ID.
- `lastBillingAttemptErrorType`: `SubscriptionContractLastBillingErrorType` — The last billing error type of the contract.
- `lastPaymentStatus`: `SubscriptionContractLastPaymentStatus` — The current status of the last payment.
- `lines`: `SubscriptionLineConnection!` — The list of subscription lines associated with the subscription contract.
- `linesCount`: `Count` — The number of lines associated with the subscription contract.
- `nextBillingDate`: `DateTime` — The next billing date for the subscription contract. This field is managed by the apps.
- `note`: `String` — The note field that will be applied to the generated orders.
- `orders`: `OrderConnection!` — A list of the subscription contract's orders.
- `originOrder`: `Order` — The order from which this contract originated.
- `revisionId`: `UnsignedInt64!` — The revision id of the contract.
- `status`: `SubscriptionContractSubscriptionStatus!` — The current status of the subscription contract.
- `updatedAt`: `DateTime!` — The date and time when the subscription contract was updated.

## Related Types

- [App](../types/objects/App.md)
- [Attribute](../types/objects/Attribute.md)
- [Count](../types/objects/Count.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [Customer](../types/objects/Customer.md)
- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Order](../types/objects/Order.md)
- [SubscriptionBillingPolicy](../types/objects/SubscriptionBillingPolicy.md)
- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractLastBillingErrorType](../types/enums/SubscriptionContractLastBillingErrorType.md)
- [SubscriptionContractLastPaymentStatus](../types/enums/SubscriptionContractLastPaymentStatus.md)
- [SubscriptionContractSubscriptionStatus](../types/enums/SubscriptionContractSubscriptionStatus.md)
- [SubscriptionDeliveryMethod](../types/unions/SubscriptionDeliveryMethod.md)
- [SubscriptionDeliveryPolicy](../types/objects/SubscriptionDeliveryPolicy.md)

## Example Query

```graphql
query SubscriptionContract($id: ID!) {
  subscriptionContract(id: $id) {
    appAdminUrl
    createdAt
    nextBillingDate
    note
  }
}
```
