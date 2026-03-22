# Mutation: `customerGenerateAccountActivationUrl`

**Returns:** `CustomerGenerateAccountActivationUrlPayload`

Generates a one-time activation URL for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) whose legacy customer account isn't yet enabled. Use this after importing customers or creating accounts that need activation.

The generated URL expires after 30 days and becomes invalid if you generate a new one.

> Note: The generated URL only works when legacy customer accounts are enabled on the shop. It only works for customers with disabled or invited [`account states`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state). Attempting to generate a URL for an already-enabled customer returns an error.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer that the URL is generated for.

## Payload Fields

- `accountActivationUrl`: `URL` — The generated account activation URL.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerGenerateAccountActivationUrlPayload](../types/objects/CustomerGenerateAccountActivationUrlPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerGenerateAccountActivationUrl($customerId: ID!) {
  customerGenerateAccountActivationUrl(customerId: $customerId) {
    accountActivationUrl
    userErrors {
      field
      message
    }
  }
}
```
