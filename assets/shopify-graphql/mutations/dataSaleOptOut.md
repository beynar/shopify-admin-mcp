# Mutation: `dataSaleOptOut`

**Returns:** `DataSaleOptOutPayload`

Opt out a customer from data sale.

## Arguments

- **`email`**: `String!` — The email address of the customer to opt out of data sale.

## Payload Fields

- `customerId`: `ID` — The ID of the customer whose email address has been opted out of data sale.
- `userErrors`: `[DataSaleOptOutUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DataSaleOptOutPayload](../types/objects/DataSaleOptOutPayload.md)
- [DataSaleOptOutUserError](../types/objects/DataSaleOptOutUserError.md)

## Example Mutation

```graphql
mutation DataSaleOptOut($email: String!) {
  dataSaleOptOut(email: $email) {
    customerId
    userErrors {
      field
      message
    }
  }
}
```
