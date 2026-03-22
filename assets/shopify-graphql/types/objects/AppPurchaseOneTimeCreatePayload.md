# Object: `AppPurchaseOneTimeCreatePayload`

Return type for `appPurchaseOneTimeCreate` mutation.

## Fields

- `appPurchaseOneTime`: `AppPurchaseOneTime` — The newly created app one-time purchase.
- `confirmationUrl`: `URL` — The URL that the merchant can access to approve or decline the newly created app one-time purchase.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppPurchaseOneTime](../../types/objects/AppPurchaseOneTime.md)
- [UserError](../../types/objects/UserError.md)
