# Object: `CustomerEmailAddress`

A customer's email address with marketing consent. This includes the email address, marketing subscription status, and opt-in level according to [M3AAWG best practices guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).

It also provides the timestamp of when customers last updated marketing consent and URLs for unsubscribing from marketing emails or opting in or out of email open tracking. The [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation) field indicates where the customer consented to receive marketing material.

## Fields

- `emailAddress`: `String!` — The customer's default email address.
- `marketingOptInLevel`: `CustomerMarketingOptInLevel` — The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
- `marketingState`: `CustomerEmailAddressMarketingState!` — Whether the customer has subscribed to email marketing.
- `marketingUnsubscribeUrl`: `URL!` — The URL to unsubscribe a member from all mailing lists.
- `marketingUpdatedAt`: `DateTime` — The date and time at which the marketing consent was updated.
- `openTrackingLevel`: `CustomerEmailAddressOpenTrackingLevel!` — Whether the customer has opted in to having their opened emails tracked.
- `openTrackingUrl`: `URL!` — The URL that can be used to opt a customer in or out of email open tracking.
- `sourceLocation`: `Location` — The location where the customer consented to receive marketing material by email.
- `validFormat`: `Boolean!` — Whether the email address is formatted correctly.

## Related Types

- [CustomerEmailAddressMarketingState](../../types/enums/CustomerEmailAddressMarketingState.md)
- [CustomerEmailAddressOpenTrackingLevel](../../types/enums/CustomerEmailAddressOpenTrackingLevel.md)
- [CustomerMarketingOptInLevel](../../types/enums/CustomerMarketingOptInLevel.md)
- [Location](../../types/objects/Location.md)
