# Object: `LocalizationExtension`

Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers.

## Fields

- `countryCode`: `CountryCode!` — Country ISO 3166-1 alpha-2 code.
- `key`: `LocalizationExtensionKey!` — The localized extension keys that are allowed.
- `purpose`: `LocalizationExtensionPurpose!` — The purpose of this localization extension.
- `title`: `String!` — The localized extension title.
- `value`: `String!` — The value of the field.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [LocalizationExtensionKey](../../types/enums/LocalizationExtensionKey.md)
- [LocalizationExtensionPurpose](../../types/enums/LocalizationExtensionPurpose.md)
