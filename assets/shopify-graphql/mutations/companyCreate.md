# Mutation: `companyCreate`

**Returns:** `CompanyCreatePayload`

Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can optionally create an initial [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) and [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) in a single operation. Company contacts are people who place orders on behalf of the company. Company locations are branches or offices with their own billing and shipping addresses.

> Note: Creating a company without a `name` [returns an error](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error).

Learn more about [creating companies for B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).

## Arguments

- **`input`**: `CompanyCreateInput!` — The fields to use when creating the company.

## Payload Fields

- `company`: `Company` — The created company.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [Company](../types/objects/Company.md)
- [CompanyCreateInput](../types/inputs/CompanyCreateInput.md)
- [CompanyCreatePayload](../types/objects/CompanyCreatePayload.md)

## Example Mutation

```graphql
mutation CompanyCreate($input: CompanyCreateInput!) {
  companyCreate(input: $input) {
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
