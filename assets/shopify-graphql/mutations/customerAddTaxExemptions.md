# Mutation: `customerAddTaxExemptions`

**Returns:** `CustomerAddTaxExemptionsPayload`

Add tax exemptions for the customer.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer to update.
- **`taxExemptions`**: `[TaxExemption!]!` — The list of tax exemptions to add for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "CA_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

## Payload Fields

- `customer`: `Customer` — The updated customer.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerAddTaxExemptionsPayload](../types/objects/CustomerAddTaxExemptionsPayload.md)
- [TaxExemption](../types/enums/TaxExemption.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerAddTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
  customerAddTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
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
