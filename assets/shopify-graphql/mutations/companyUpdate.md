# Mutation: `companyUpdate`

**Returns:** `CompanyUpdatePayload`

Updates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) with new information. Companies represent business customers that can have multiple contacts and locations with specific pricing, payment terms, and checkout settings.

The mutation accepts the company's ID and an input object containing the fields to update. You can modify the company name, add or update internal notes, set an external ID for integration with other systems, or adjust the customer relationship start date.

Learn more about [building B2B features](https://shopify.dev/docs/apps/build/b2b/start-building).

## Arguments

- **`companyId`**: `ID!` — The ID of the company to be updated.
- **`input`**: `CompanyInput!` — The input fields to update the company.

## Payload Fields

- `company`: `Company` — The updated company.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [Company](../types/objects/Company.md)
- [CompanyInput](../types/inputs/CompanyInput.md)
- [CompanyUpdatePayload](../types/objects/CompanyUpdatePayload.md)

## Example Mutation

```graphql
mutation CompanyUpdate($companyId: ID!, $input: CompanyInput!) {
  companyUpdate(companyId: $companyId, input: $input) {
    company {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
