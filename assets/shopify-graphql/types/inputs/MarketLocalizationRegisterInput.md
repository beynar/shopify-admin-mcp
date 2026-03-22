# Input Object: `MarketLocalizationRegisterInput`

The input fields and values for creating or updating a market localization.

## Input Fields

- `marketId`: `ID!` — The ID of the market that the localization is specific to.
- `key`: `String!` — A reference to the value being localized on the resource that this market localization belongs to.
- `value`: `String!` — The value of the market localization.
- `marketLocalizableContentDigest`: `String!` — A hash digest representation of the content being localized.
