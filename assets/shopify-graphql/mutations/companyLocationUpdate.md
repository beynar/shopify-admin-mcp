# Mutation: `companyLocationUpdate`

**Returns:** `CompanyLocationUpdatePayload`

Updates a company location's information and B2B checkout settings. Company locations are branches or offices where [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) members place orders on behalf of the company. Contacts must be assigned to a location through `roleAssignments` to place orders.

The mutation modifies details such as the location's name, contact information, preferred locale, and internal notes. You can also configure the B2B checkout experience through [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) settings that control whether orders require merchant review, [`PaymentTermsTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate) settings, shipping address editing permissions, and [`DepositConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration) requirements.

Learn more about [managing company locations](https://shopify.dev/docs/apps/build/b2b/manage-client-company-locations).

## Arguments

- **`companyLocationId`**: `ID!` — The ID of the company location to update.
- **`input`**: `CompanyLocationUpdateInput!` — The input fields to update in the company location.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The updated company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationUpdateInput](../types/inputs/CompanyLocationUpdateInput.md)
- [CompanyLocationUpdatePayload](../types/objects/CompanyLocationUpdatePayload.md)

## Example Mutation

```graphql
mutation CompanyLocationUpdate($companyLocationId: ID!, $input: CompanyLocationUpdateInput!) {
  companyLocationUpdate(companyLocationId: $companyLocationId, input: $input) {
    companyLocation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
