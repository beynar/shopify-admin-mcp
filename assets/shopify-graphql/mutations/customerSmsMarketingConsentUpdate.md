# Mutation: `customerSmsMarketingConsentUpdate`

**Returns:** `CustomerSmsMarketingConsentUpdatePayload`

Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s SMS marketing consent information. The customer must have a phone number on their account to receive SMS marketing.

You can set whether the customer subscribes or unsubscribes to SMS marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.marketingOptInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.sourceLocationId) collected it.

## Arguments

- **`input`**: `CustomerSmsMarketingConsentUpdateInput!` — Specifies the input fields to update a customer's SMS marketing consent information.

## Payload Fields

- `customer`: `Customer` — The updated customer.
- `userErrors`: `[CustomerSmsMarketingConsentError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerSmsMarketingConsentError](../types/objects/CustomerSmsMarketingConsentError.md)
- [CustomerSmsMarketingConsentUpdateInput](../types/inputs/CustomerSmsMarketingConsentUpdateInput.md)
- [CustomerSmsMarketingConsentUpdatePayload](../types/objects/CustomerSmsMarketingConsentUpdatePayload.md)

## Example Mutation

```graphql
mutation CustomerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
  customerSmsMarketingConsentUpdate(input: $input) {
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
