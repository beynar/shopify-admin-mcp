# Mutation: `customerSet`

**Returns:** `CustomerSetPayload`

Creates or updates a customer in a single mutation.

Use this mutation when syncing information from an external data source into Shopify.

This mutation can be used to create a new customer, update an existing customer by id, or
upsert a customer by a unique key (email or phone).

To create a new customer omit the `identifier` argument.
To update an existing customer, include the `identifier` with the id of the customer to update.

To perform an 'upsert' by unique key (email or phone)
use the `identifier` argument to upsert a customer by a unique key (email or phone). If a customer
with the specified unique key exists, it will be updated. If not, a new customer will be created with
that unique key.

As of API version 2022-10, apps using protected customer data must meet the
protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data)

Any list field (e.g.
[addresses](https://shopify.dev/api/admin-graphql/unstable/input-objects/MailingAddressInput),
will be updated so that all included entries are either created or updated, and all existing entries not
included will be deleted.

All other fields will be updated to the value passed. Omitted fields will not be updated.

## Arguments

- **`input`**: `CustomerSetInput!` — The properties of the customer.
- **`identifier`**: `CustomerSetIdentifiers` — Specifies the identifier that will be used to lookup the resource.

## Payload Fields

- `customer`: `Customer` — The created or updated customer.
- `userErrors`: `[CustomerSetUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerSetIdentifiers](../types/inputs/CustomerSetIdentifiers.md)
- [CustomerSetInput](../types/inputs/CustomerSetInput.md)
- [CustomerSetPayload](../types/objects/CustomerSetPayload.md)
- [CustomerSetUserError](../types/objects/CustomerSetUserError.md)

## Example Mutation

```graphql
mutation CustomerSet($input: CustomerSetInput!, $identifier: CustomerSetIdentifiers) {
  customerSet(input: $input, identifier: $identifier) {
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
