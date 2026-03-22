# Object: `MailingAddress`

A physical mailing address. For example, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s default address and an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)'s billing address are both mailing addresses. Stores standard address components, customer name information, and company details.

The address includes geographic coordinates ([`latitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.latitude) and [`longitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)). You can format addresses for display using the [`formatted`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.formatted) field with options to include or exclude name and company information.

**Implements:** `Node`

## Fields

- `address1`: `String` — The first line of the address. Typically the street address or PO Box number.
- `address2`: `String` — The second line of the address. Typically the number of the apartment, suite, or unit.
- `city`: `String` — The name of the city, district, village, or town.
- `company`: `String` — The name of the customer's company or organization.
- `coordinatesValidated`: `Boolean!` — Whether the address corresponds to recognized latitude and longitude values.
- `country`: `String` — The name of the country.
- `countryCode`: `String` *(deprecated)* — The two-letter code for the country of the address.
- `countryCodeV2`: `CountryCode` — The two-letter code for the country of the address.
- `firstName`: `String` — The first name of the customer.
- `formatted` `(withName, withCompany)`: `[String!]!` — A formatted version of the address, customized by the provided arguments.
- `formattedArea`: `String` — A comma-separated list of the values for city, province, and country.
- `id`: `ID!` — A globally-unique ID.
- `lastName`: `String` — The last name of the customer.
- `latitude`: `Float` — The latitude coordinate of the customer address.
- `longitude`: `Float` — The longitude coordinate of the customer address.
- `name`: `String` — The full name of the customer, based on firstName and lastName.
- `phone`: `String` — A unique phone number for the customer.
- `province`: `String` — The region of the address, such as the province, state, or district.
- `provinceCode`: `String` — The alphanumeric code for the region.
- `timeZone`: `String` — The time zone of the address.
- `validationResultSummary`: `MailingAddressValidationResult` — The validation status that is leveraged by the address validation feature in the Shopify Admin.
- `zip`: `String` — The zip or postal code of the address.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [MailingAddressValidationResult](../../types/enums/MailingAddressValidationResult.md)
