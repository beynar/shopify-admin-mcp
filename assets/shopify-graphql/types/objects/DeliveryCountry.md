# Object: `DeliveryCountry`

A country that is used to define a shipping zone.

**Implements:** `Node`

## Fields

- `code`: `DeliveryCountryCodeOrRestOfWorld!` — A two-letter country code in ISO 3166-1 alpha-2 standard.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The full name of the country.
- `provinces`: `[DeliveryProvince!]!` — The list of regions associated with this country.
- `translatedName`: `String!` — The translated name of the country. The translation returned is based on the system's locale.

## Related Types

- [DeliveryCountryCodeOrRestOfWorld](../../types/objects/DeliveryCountryCodeOrRestOfWorld.md)
- [DeliveryProvince](../../types/objects/DeliveryProvince.md)
