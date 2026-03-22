# Input Object: `DraftOrderAppliedDiscountInput`

The input fields for applying an order-level discount to a draft order.

## Input Fields

- `amountWithCurrency`: `MoneyInput` — The applied amount of the discount in the specified currency.
- `description`: `String` — Reason for the discount.
- `title`: `String` — Title of the discount.
- `value`: `Float!` — The value of the discount.
- `valueType`: `DraftOrderAppliedDiscountType!` — The type of discount.

## Related Types

- [DraftOrderAppliedDiscountType](../../types/enums/DraftOrderAppliedDiscountType.md)
- [MoneyInput](../../types/inputs/MoneyInput.md)
