# Mutation: `priceListDelete`

**Returns:** `PriceListDeletePayload`

Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.

## Arguments

- **`id`**: `ID!` — The ID of the price list to be deleted.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted price list.
- `userErrors`: `[PriceListUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceListDeletePayload](../types/objects/PriceListDeletePayload.md)
- [PriceListUserError](../types/objects/PriceListUserError.md)

## Example Mutation

```graphql
mutation PriceListDelete($id: ID!) {
  priceListDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
