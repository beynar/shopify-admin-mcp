# Object: `BuyerExperienceConfiguration`

Settings describing the behavior of checkout for a B2B buyer.

## Fields

- `checkoutToDraft`: `Boolean!` — Whether to checkout to draft order for merchant review.
- `deposit`: `DepositConfiguration` — The portion required to be paid at checkout.
- `editableShippingAddress`: `Boolean!` — Whether to allow customers to use editable shipping addresses.
- `payNowOnly`: `Boolean!` *(deprecated)* — Whether a buyer must pay at checkout or they can also choose to pay
- `paymentTermsTemplate`: `PaymentTermsTemplate` — Represents the merchant configured payment terms.

## Related Types

- [DepositConfiguration](../../types/unions/DepositConfiguration.md)
- [PaymentTermsTemplate](../../types/objects/PaymentTermsTemplate.md)
