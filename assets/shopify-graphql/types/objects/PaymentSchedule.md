# Object: `PaymentSchedule`

Represents the payment schedule for a single payment defined in the payment terms.

**Implements:** `Node`

## Fields

- `amount`: `MoneyV2!` *(deprecated)* — Amount owed for this payment schedule.
- `balanceDue`: `MoneyV2!` — Remaining balance to be captured for this payment schedule.
- `completedAt`: `DateTime` — Date and time when the payment schedule is paid or fulfilled.
- `due`: `Boolean!` — Whether the payment schedule is due.
- `dueAt`: `DateTime` — Date and time when the payment schedule is due.
- `id`: `ID!` — A globally-unique ID.
- `issuedAt`: `DateTime` — Date and time when the invoice is sent.
- `paymentTerms`: `PaymentTerms!` — The payment terms the payment schedule belongs to.
- `totalBalance`: `MoneyV2!` — Remaining balance to be paid or authorized by the customer for this payment schedule.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [PaymentTerms](../../types/objects/PaymentTerms.md)
