# Object: `AppSubscriptionCreatePayload`

Return type for `appSubscriptionCreate` mutation.

## Fields

- `appSubscription`: `AppSubscription` — The newly-created app subscription.
- `confirmationUrl`: `URL` — The URL pointing to the page where the merchant approves or declines the charges for an app subscription.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppSubscription](../../types/objects/AppSubscription.md)
- [UserError](../../types/objects/UserError.md)
