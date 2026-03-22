# Input Object: `ContextualPricingContext`

The input fields for the context data that determines the pricing of a variant. Refer to [Product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product?example=Get+the+price+range+for+a+product+for+buyers+from+Canada)for more information on how to use this input object.

## Input Fields

- `country`: `CountryCode` — The country code used to fetch country-specific prices.
- `companyLocationId`: `ID` — The CompanyLocation ID used to fetch company location specific prices.
- `locationId`: `ID` — The Location ID used to fetch location specific prices.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
