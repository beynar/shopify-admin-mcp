# Object: `SubscriptionBillingAttemptOutOfStockProductVariantsError`

An inventory error caused by an issue with one or more of the contract merchandise lines.

**Implements:** `SubscriptionBillingAttemptProcessingError`

## Fields

- `code`: `SubscriptionBillingAttemptErrorCode!` — The code for the error.
- `message`: `String!` — An explanation of the error.
- `outOfStockProductVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` *(deprecated)* — A list of responsible product variants.

## Related Types

- [SubscriptionBillingAttemptErrorCode](../../types/enums/SubscriptionBillingAttemptErrorCode.md)
