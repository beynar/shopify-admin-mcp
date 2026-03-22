# Mutation: `shopifyPaymentsPayoutAlternateCurrencyCreate`

**Returns:** `ShopifyPaymentsPayoutAlternateCurrencyCreatePayload`

Creates an alternate currency payout for a Shopify Payments account.

## Arguments

- **`accountId`**: `ID` — The ID of the Shopify Payments account on which the mutation is being performed.
- **`currency`**: `CurrencyCode!` — The currency of the balance to payout.

## Payload Fields

- `payout`: `ShopifyPaymentsToolingProviderPayout` — The resulting alternate currency payout created.
- `success`: `Boolean` — Whether the alternate currency payout was created successfully.
- `userErrors`: `[ShopifyPaymentsPayoutAlternateCurrencyCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CurrencyCode](../types/enums/CurrencyCode.md)
- [ShopifyPaymentsPayoutAlternateCurrencyCreatePayload](../types/objects/ShopifyPaymentsPayoutAlternateCurrencyCreatePayload.md)
- [ShopifyPaymentsPayoutAlternateCurrencyCreateUserError](../types/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError.md)
- [ShopifyPaymentsToolingProviderPayout](../types/objects/ShopifyPaymentsToolingProviderPayout.md)

## Example Mutation

```graphql
mutation ShopifyPaymentsPayoutAlternateCurrencyCreate($accountId: ID, $currency: CurrencyCode!) {
  shopifyPaymentsPayoutAlternateCurrencyCreate(accountId: $accountId, currency: $currency) {
    payout {
      id
    }
    success
    userErrors {
      field
      message
    }
  }
}
```
