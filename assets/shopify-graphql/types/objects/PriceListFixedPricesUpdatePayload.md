# Object: `PriceListFixedPricesUpdatePayload`

Return type for `priceListFixedPricesUpdate` mutation.

## Fields

- `deletedFixedPriceVariantIds`: `[ID!]` — A list of deleted variant IDs for prices.
- `priceList`: `PriceList` — The price list for which the fixed prices were modified.
- `pricesAdded`: `[PriceListPrice!]` — The prices that were added to the price list.
- `userErrors`: `[PriceListPriceUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceList](../../types/objects/PriceList.md)
- [PriceListPrice](../../types/objects/PriceListPrice.md)
- [PriceListPriceUserError](../../types/objects/PriceListPriceUserError.md)
