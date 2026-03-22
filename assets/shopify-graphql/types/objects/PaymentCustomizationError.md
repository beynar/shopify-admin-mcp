# Object: `PaymentCustomizationError`

An error that occurs during the execution of a payment customization mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `PaymentCustomizationErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [PaymentCustomizationErrorCode](../../types/enums/PaymentCustomizationErrorCode.md)
