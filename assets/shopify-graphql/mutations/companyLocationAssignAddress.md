# Mutation: `companyLocationAssignAddress`

**Returns:** `CompanyLocationAssignAddressPayload`

Updates an address on a company location.

## Arguments

- **`locationId`**: `ID!` — The ID of the company location to update addresses on.
- **`address`**: `CompanyAddressInput!` — The input fields to use to update the address.
- **`addressTypes`**: `[CompanyAddressType!]!` — The list of address types on the location to update.

## Payload Fields

- `addresses`: `[CompanyAddress!]` — The list of updated addresses on the company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyAddress](../types/objects/CompanyAddress.md)
- [CompanyAddressInput](../types/inputs/CompanyAddressInput.md)
- [CompanyAddressType](../types/enums/CompanyAddressType.md)
- [CompanyLocationAssignAddressPayload](../types/objects/CompanyLocationAssignAddressPayload.md)

## Example Mutation

```graphql
mutation CompanyLocationAssignAddress($locationId: ID!, $address: CompanyAddressInput!, $addressTypes: [CompanyAddressType!]!) {
  companyLocationAssignAddress(locationId: $locationId, address: $address, addressTypes: $addressTypes) {
    addresses {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
