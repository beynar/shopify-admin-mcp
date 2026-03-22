# Input Object: `InventoryItemInput`

The input fields for an inventory item.

## Input Fields

- `sku`: `String` — The SKU (stock keeping unit) of the inventory item.
- `cost`: `Decimal` — Unit cost associated with the inventory item, the currency is the shop's default currency.
- `tracked`: `Boolean` — Whether the inventory item is tracked.
- `countryCodeOfOrigin`: `CountryCode` — The country where the item was manufactured or produced, specified using the standard two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
- `harmonizedSystemCode`: `String` — The harmonized system code of the inventory item. This must be a number between 6 and 13 digits.
- `countryHarmonizedSystemCodes`: `[CountryHarmonizedSystemCodeInput!]` — List of country-specific harmonized system codes.
- `provinceCodeOfOrigin`: `String` — The province where the item was manufactured or produced, specified using the standard two-letter [ISO 3166-2 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2) province code.
- `measurement`: `InventoryItemMeasurementInput` — The measurements of an inventory item.
- `requiresShipping`: `Boolean` — Whether the inventory item needs to be physically shipped to the customer. Items that require shipping are physical products, while digital goods and services typically don't require shipping and can be fulfilled electronically.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [CountryHarmonizedSystemCodeInput](../../types/inputs/CountryHarmonizedSystemCodeInput.md)
- [InventoryItemMeasurementInput](../../types/inputs/InventoryItemMeasurementInput.md)
