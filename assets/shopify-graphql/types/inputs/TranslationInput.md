# Input Object: `TranslationInput`

The input fields and values for creating or updating a translation.

## Input Fields

- `locale`: `String!` — ISO code of the locale being translated into. Only locales returned in `shopLocales` are valid.
- `key`: `String!` — On the resource that this translation belongs to, the reference to the value being translated.
- `value`: `String!` — The value of the translation.
- `translatableContentDigest`: `String!` — Hash digest representation of the content being translated.
- `marketId`: `ID` — The ID of the market that the translation is specific to. Not specifying this field means that the translation will be available in all markets.
