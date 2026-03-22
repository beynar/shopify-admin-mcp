# Object: `CustomerPhoneNumber`

A phone number.

## Fields

- `marketingCollectedFrom`: `CustomerConsentCollectedFrom` — The source from which the SMS marketing information for the customer was collected.
- `marketingOptInLevel`: `CustomerMarketingOptInLevel` — The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
- `marketingState`: `CustomerSmsMarketingState!` — Whether the customer has subscribed to SMS marketing material.
- `marketingUpdatedAt`: `DateTime` — The date and time at which the marketing consent was updated.
- `phoneNumber`: `String!` — A customer's phone number.
- `sourceLocation`: `Location` — The location where the customer consented to receive marketing material by SMS.

## Related Types

- [CustomerConsentCollectedFrom](../../types/enums/CustomerConsentCollectedFrom.md)
- [CustomerMarketingOptInLevel](../../types/enums/CustomerMarketingOptInLevel.md)
- [CustomerSmsMarketingState](../../types/enums/CustomerSmsMarketingState.md)
- [Location](../../types/objects/Location.md)
