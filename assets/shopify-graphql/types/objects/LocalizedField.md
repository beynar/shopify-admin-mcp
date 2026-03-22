# Object: `LocalizedField`

Represents the value captured by a localized field. Localized fields are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers.

## Fields

- `countryCode`: `CountryCode!` — Country ISO 3166-1 alpha-2 code.
- `key`: `LocalizedFieldKey!` — The localized field keys that are allowed.
- `purpose`: `LocalizedFieldPurpose!` — The purpose of this localized field.
- `title`: `String!` — The localized field title.
- `value`: `String!` — The value of the field.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [LocalizedFieldKey](../../types/enums/LocalizedFieldKey.md)
- [LocalizedFieldPurpose](../../types/enums/LocalizedFieldPurpose.md)
