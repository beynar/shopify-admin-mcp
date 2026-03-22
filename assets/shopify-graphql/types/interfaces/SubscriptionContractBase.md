# Interface: `SubscriptionContractBase`

Represents subscription contract common fields.

## Fields

- `app`: `App` — The subscription app that the subscription contract is registered to.
- `appAdminUrl`: `URL` — The URL of the subscription contract page on the subscription app.
- `currencyCode`: `CurrencyCode!` — The currency that's used for the subscription contract.
- `customAttributes`: `[Attribute!]!` — A list of the custom attributes to be added to the generated orders.
- `customer`: `Customer` — The customer to whom the subscription contract belongs.
- `customerPaymentMethod` `(showRevoked)`: `CustomerPaymentMethod` — The customer payment method that's used for the subscription contract.
- `deliveryMethod`: `SubscriptionDeliveryMethod` — The delivery method for each billing of the subscription contract.
- `deliveryPrice`: `MoneyV2!` — The delivery price for each billing of the subscription contract.
- `discounts` `(first, after, last, before, reverse)`: `SubscriptionManualDiscountConnection!` — The list of subscription discounts associated with the subscription contract.
- `lineCount`: `Int!` *(deprecated)* — The number of lines associated with the subscription contract.
- `lines` `(first, after, last, before, reverse)`: `SubscriptionLineConnection!` — The list of subscription lines associated with the subscription contract.
- `linesCount`: `Count` — The number of lines associated with the subscription contract.
- `note`: `String` — The note field that will be applied to the generated orders.
- `orders` `(first, after, last, before, reverse)`: `OrderConnection!` — A list of the subscription contract's orders.
- `updatedAt`: `DateTime!` — The date and time when the subscription contract was updated.

## Possible Types

- [SubscriptionBillingCycleEditedContract](../../types/objects/SubscriptionBillingCycleEditedContract.md)
- [SubscriptionContract](../../types/objects/SubscriptionContract.md)

## Related Types

- [App](../../types/objects/App.md)
- [Attribute](../../types/objects/Attribute.md)
- [Count](../../types/objects/Count.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [Customer](../../types/objects/Customer.md)
- [CustomerPaymentMethod](../../types/objects/CustomerPaymentMethod.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [SubscriptionDeliveryMethod](../../types/unions/SubscriptionDeliveryMethod.md)
