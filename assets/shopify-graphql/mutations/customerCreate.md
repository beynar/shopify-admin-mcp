# Mutation: `customerCreate`

**Returns:** `CustomerCreatePayload`

Creates a new [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) in the store.

Accepts customer details including contact information, marketing consent preferences, and tax exemptions through the [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput) input object. You can also associate [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput) and tags to organize and extend customer data.

Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

## Arguments

- **`input`**: `CustomerInput!` — The input fields to create a customer.

## Payload Fields

- `customer`: `Customer` — The created customer.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerCreatePayload](../types/objects/CustomerCreatePayload.md)
- [CustomerInput](../types/inputs/CustomerInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerCreate($input: CustomerInput!) {
  customerCreate(input: $input) {
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
