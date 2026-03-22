# Object: `SubscriptionBillingAttemptInsufficientStockProductVariantsError`

An inventory error caused by an issue with one or more of the contract merchandise lines.

**Implements:** `SubscriptionBillingAttemptProcessingError`

## Fields

- `code`: `SubscriptionBillingAttemptErrorCode!` — The code for the error.
- `insufficientStockProductVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — A list of product variants that caused the insufficient inventory error.
- `message`: `String!` — An explanation of the error.

## Related Types

- [SubscriptionBillingAttemptErrorCode](../../types/enums/SubscriptionBillingAttemptErrorCode.md)
