# Input Object: `BuyerExperienceConfigurationInput`

The input fields specifying the behavior of checkout for a B2B buyer.

## Input Fields

- `checkoutToDraft`: `Boolean` — Whether to checkout to draft order for merchant review.
- `paymentTermsTemplateId`: `ID` — Represents the merchant configured payment terms.
- `editableShippingAddress`: `Boolean` — Whether to allow customers to edit their shipping address at checkout.
- `deposit`: `DepositInput` — The input fields configuring the deposit a B2B buyer.

## Related Types

- [DepositInput](../../types/inputs/DepositInput.md)
