# Mutation: `priceListFixedPricesDelete`

**Returns:** `PriceListFixedPricesDeletePayload`

Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

## Arguments

- **`priceListId`**: `ID!` — The ID of the price list from which the fixed prices will be removed.
- **`variantIds`**: `[ID!]!` — A list of product variant IDs whose fixed prices will be removed from the price list.

## Payload Fields

- `deletedFixedPriceVariantIds`: `[ID!]` — A list of product variant IDs whose fixed prices were removed from the price list.
- `userErrors`: `[PriceListPriceUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceListFixedPricesDeletePayload](../types/objects/PriceListFixedPricesDeletePayload.md)
- [PriceListPriceUserError](../types/objects/PriceListPriceUserError.md)

## Example Mutation

```graphql
mutation PriceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
  priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
    deletedFixedPriceVariantIds
    userErrors {
      field
      message
    }
  }
}
```
