# Input Object: `PurchasingEntityInput`

The input fields for a purchasing entity. Can either be a customer or a purchasing company.

## Input Fields

- `customerId`: `ID` — Represents a customer. Null if there's a purchasing company.
- `purchasingCompany`: `PurchasingCompanyInput` — Represents a purchasing company. Null if there's a customer.

## Related Types

- [PurchasingCompanyInput](../../types/inputs/PurchasingCompanyInput.md)
