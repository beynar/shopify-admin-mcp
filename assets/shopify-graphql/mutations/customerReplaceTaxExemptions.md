# Mutation: `customerReplaceTaxExemptions`

**Returns:** `CustomerReplaceTaxExemptionsPayload`

Replace tax exemptions for a customer.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer to update.
- **`taxExemptions`**: `[TaxExemption!]!` — The list of tax exemptions that will replace the current exemptions for a customer. Can be an array or a comma-separated list.   Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

## Payload Fields

- `customer`: `Customer` — The updated customer.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerReplaceTaxExemptionsPayload](../types/objects/CustomerReplaceTaxExemptionsPayload.md)
- [TaxExemption](../types/enums/TaxExemption.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerReplaceTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
  customerReplaceTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
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
