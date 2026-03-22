# Mutation: `appPurchaseOneTimeCreate`

**Returns:** `AppPurchaseOneTimeCreatePayload`

Creates a one-time charge for app features or services that don't require recurring billing. This mutation is ideal for apps that sell individual features, premium content, or services on a per-use basis rather than subscription models.

For example, a design app might charge merchants once for premium templates, or a marketing app could bill for individual campaign setups without ongoing monthly fees.

Use the `AppPurchaseOneTimeCreate` mutation to:
- Charge for premium features or content purchases
- Bill for professional services or setup fees
- Generate revenue from one-time digital product sales

The mutation returns a confirmation URL that merchants must visit to approve the charge. Test and development stores are not charged, allowing safe testing of billing flows.

Explore one-time billing options on the [app purchases page](https://shopify.dev/docs/apps/launch/billing/support-one-time-purchases).

## Arguments

- **`name`**: `String!` — The name of the one-time purchase from the app.
- **`price`**: `MoneyInput!` — The amount to be charged to the store for the app one-time purchase.
- **`returnUrl`**: `URL!` — The URL where the merchant is redirected after approving the app one-time purchase.
- **`test`**: `Boolean` = `false` — Whether the app one-time purchase is a test transaction.

## Payload Fields

- `appPurchaseOneTime`: `AppPurchaseOneTime` — The newly created app one-time purchase.
- `confirmationUrl`: `URL` — The URL that the merchant can access to approve or decline the newly created app one-time purchase.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppPurchaseOneTime](../types/objects/AppPurchaseOneTime.md)
- [AppPurchaseOneTimeCreatePayload](../types/objects/AppPurchaseOneTimeCreatePayload.md)
- [MoneyInput](../types/inputs/MoneyInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!, $test: Boolean) {
  appPurchaseOneTimeCreate(name: $name, price: $price, returnUrl: $returnUrl, test: $test) {
    appPurchaseOneTime {
      id
    }
    confirmationUrl
    userErrors {
      field
      message
    }
  }
}
```
