# Mutation: `paymentCustomizationActivation`

**Returns:** `PaymentCustomizationActivationPayload`

Activates and deactivates payment customizations.

## Arguments

- **`ids`**: `[ID!]!` — The global IDs of the payment customizations.
- **`enabled`**: `Boolean!` — The enabled status of the payment customizations.

## Payload Fields

- `ids`: `[String!]` — The IDs of the updated payment customizations.
- `userErrors`: `[PaymentCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentCustomizationActivationPayload](../types/objects/PaymentCustomizationActivationPayload.md)
- [PaymentCustomizationError](../types/objects/PaymentCustomizationError.md)

## Example Mutation

```graphql
mutation PaymentCustomizationActivation($ids: [ID!]!, $enabled: Boolean!) {
  paymentCustomizationActivation(ids: $ids, enabled: $enabled) {
    ids
    userErrors {
      field
      message
    }
  }
}
```
