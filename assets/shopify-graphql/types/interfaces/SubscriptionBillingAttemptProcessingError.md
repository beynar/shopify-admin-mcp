# Interface: `SubscriptionBillingAttemptProcessingError`

An error that prevented a billing attempt.

## Fields

- `code`: `SubscriptionBillingAttemptErrorCode!` — The code for the error.
- `message`: `String!` — An explanation of the error.

## Possible Types

- [SubscriptionBillingAttemptGenericError](../../types/objects/SubscriptionBillingAttemptGenericError.md)
- [SubscriptionBillingAttemptInsufficientStockProductVariantsError](../../types/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError.md)
- [SubscriptionBillingAttemptOutOfStockProductVariantsError](../../types/objects/SubscriptionBillingAttemptOutOfStockProductVariantsError.md)

## Related Types

- [SubscriptionBillingAttemptErrorCode](../../types/enums/SubscriptionBillingAttemptErrorCode.md)
