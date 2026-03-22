# Mutation: `customerEmailMarketingConsentUpdate`

**Returns:** `CustomerEmailMarketingConsentUpdatePayload`

Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must have an email address to update their consent. Records the [marketing state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState) (such as subscribed, pending, unsubscribed), [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel), and when and where the customer gave or withdrew consent.

Only three values are accepted as input: SUBSCRIBED, UNSUBSCRIBED, and PENDING.
NOT_SUBSCRIBED, REDACTED, and INVALID cannot be set via this mutation; they are
read-only or internally-set states.

## Arguments

- **`input`**: `CustomerEmailMarketingConsentUpdateInput!` — Specifies the input fields to update a customer's email marketing consent information.

## Payload Fields

- `customer`: `Customer` — The updated customer.
- `userErrors`: `[CustomerEmailMarketingConsentUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerEmailMarketingConsentUpdateInput](../types/inputs/CustomerEmailMarketingConsentUpdateInput.md)
- [CustomerEmailMarketingConsentUpdatePayload](../types/objects/CustomerEmailMarketingConsentUpdatePayload.md)
- [CustomerEmailMarketingConsentUpdateUserError](../types/objects/CustomerEmailMarketingConsentUpdateUserError.md)

## Example Mutation

```graphql
mutation CustomerEmailMarketingConsentUpdate($input: CustomerEmailMarketingConsentUpdateInput!) {
  customerEmailMarketingConsentUpdate(input: $input) {
    customer {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
