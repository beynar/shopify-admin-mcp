# Object: `PriceListFixedPricesByProductUpdatePayload`

Return type for `priceListFixedPricesByProductUpdate` mutation.

## Fields

- `priceList`: `PriceList` — The price list for which the fixed prices were modified.
- `pricesToAddProducts`: `[Product!]` — The product for which the fixed prices were added.
- `pricesToDeleteProducts`: `[Product!]` — The product for which the fixed prices were deleted.
- `userErrors`: `[PriceListFixedPricesByProductBulkUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceList](../../types/objects/PriceList.md)
- [PriceListFixedPricesByProductBulkUpdateUserError](../../types/objects/PriceListFixedPricesByProductBulkUpdateUserError.md)
- [Product](../../types/objects/Product.md)
