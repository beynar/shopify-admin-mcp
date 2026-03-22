# Object: `SubscriptionDraft`

The `SubscriptionDraft` object represents a draft version of a
[subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)
before it's committed. It serves as a staging area for making changes to an existing subscription or creating
a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

Use the `SubscriptionDraft` object to:

- Add, remove, or modify subscription lines and their quantities
- Manage discounts (add, remove, or update manual and code-based discounts)
- Configure delivery options and shipping methods
- Set up billing and delivery policies
- Manage customer payment methods
- Add custom attributes and notes to generated orders
- Configure billing cycles and next billing dates
- Preview the projected state of the subscription

Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes
are committed. This allows you to preview the impact of your modifications before applying them. The draft can be
associated with an existing subscription contract (for modifications) or used to create a new subscription.

The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription
contract and the draft is no longer accessible.

Learn more about
[how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)
and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract),
[update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and
[combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

**Implements:** `Node`

## Fields

- `billingCycle`: `SubscriptionBillingCycle` — The billing cycle that the subscription contract will be associated with.
- `billingPolicy`: `SubscriptionBillingPolicy!` — The billing policy for the subscription contract.
- `concatenatedBillingCycles` `(first, after, last, before, reverse, sortKey)`: `SubscriptionBillingCycleConnection!` — The billing cycles of the contracts that will be concatenated to the subscription contract.
- `currencyCode`: `CurrencyCode!` — The currency used for the subscription contract.
- `customAttributes`: `[Attribute!]!` — A list of the custom attributes to be added to the generated orders.
- `customer`: `Customer!` — The customer to whom the subscription contract belongs.
- `customerPaymentMethod` `(showRevoked)`: `CustomerPaymentMethod` — The customer payment method used for the subscription contract.
- `deliveryMethod`: `SubscriptionDeliveryMethod` — The delivery method for each billing of the subscription contract.
- `deliveryOptions` `(deliveryAddress)`: `SubscriptionDeliveryOptionResult` — The available delivery options for a given delivery address. Returns `null` for pending requests.
- `deliveryPolicy`: `SubscriptionDeliveryPolicy!` — The delivery policy for the subscription contract.
- `deliveryPrice`: `MoneyV2` — The delivery price for each billing the subscription contract.
- `discounts` `(first, after, last, before, reverse)`: `SubscriptionDiscountConnection!` — The list of subscription discounts which will be associated with the subscription contract.
- `discountsAdded` `(first, after, last, before, reverse)`: `SubscriptionDiscountConnection!` — The list of subscription discounts to be added to the subscription contract.
- `discountsRemoved` `(first, after, last, before, reverse)`: `SubscriptionDiscountConnection!` — The list of subscription discounts to be removed from the subscription contract.
- `discountsUpdated` `(first, after, last, before, reverse)`: `SubscriptionDiscountConnection!` — The list of subscription discounts to be updated on the subscription contract.
- `id`: `ID!` — A globally-unique ID.
- `lines` `(first, after, last, before, reverse)`: `SubscriptionLineConnection!` — The list of subscription lines which will be associated with the subscription contract.
- `linesAdded` `(first, after, last, before, reverse)`: `SubscriptionLineConnection!` — The list of subscription lines to be added to the subscription contract.
- `linesRemoved` `(first, after, last, before, reverse)`: `SubscriptionLineConnection!` — The list of subscription lines to be removed from the subscription contract.
- `nextBillingDate`: `DateTime` — The next billing date for the subscription contract.
- `note`: `String` — The note field that will be applied to the generated orders.
- `originalContract`: `SubscriptionContract` — The original subscription contract.
- `shippingOptions` `(deliveryAddress)`: `SubscriptionShippingOptionResult` *(deprecated)* — Available Shipping Options for a given delivery address. Returns NULL for pending requests.
- `status`: `SubscriptionContractSubscriptionStatus` — The current status of the subscription contract.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [Customer](../../types/objects/Customer.md)
- [CustomerPaymentMethod](../../types/objects/CustomerPaymentMethod.md)
- [MailingAddressInput](../../types/inputs/MailingAddressInput.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [SubscriptionBillingCycle](../../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCyclesSortKeys](../../types/enums/SubscriptionBillingCyclesSortKeys.md)
- [SubscriptionBillingPolicy](../../types/objects/SubscriptionBillingPolicy.md)
- [SubscriptionContract](../../types/objects/SubscriptionContract.md)
- [SubscriptionContractSubscriptionStatus](../../types/enums/SubscriptionContractSubscriptionStatus.md)
- [SubscriptionDeliveryMethod](../../types/unions/SubscriptionDeliveryMethod.md)
- [SubscriptionDeliveryOptionResult](../../types/unions/SubscriptionDeliveryOptionResult.md)
- [SubscriptionDeliveryPolicy](../../types/objects/SubscriptionDeliveryPolicy.md)
- [SubscriptionShippingOptionResult](../../types/unions/SubscriptionShippingOptionResult.md)
