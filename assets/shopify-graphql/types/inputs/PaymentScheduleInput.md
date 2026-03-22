# Input Object: `PaymentScheduleInput`

The input fields used to create a payment schedule for payment terms.

## Input Fields

- `issuedAt`: `DateTime` — Specifies the date and time that the payment schedule was issued. This field must be provided for net type payment terms.
- `dueAt`: `DateTime` — Specifies the date and time when the payment schedule is due. This field must be provided for fixed type payment terms.
