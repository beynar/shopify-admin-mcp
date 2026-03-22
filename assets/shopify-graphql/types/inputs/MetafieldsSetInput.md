# Input Object: `MetafieldsSetInput`

The input fields for a metafield value to set.

## Input Fields

- `ownerId`: `ID!` — The unique ID of the resource that the metafield is attached to.
- `namespace`: `String` — The container for a group of metafields that the metafield is or will be associated with. Used in tandem
- `key`: `String!` — The unique identifier for a metafield within its namespace.
- `value`: `String!` — The data stored in the metafield. Always stored as a string, regardless of the metafield's type.
- `compareDigest`: `String` — The `compareDigest` value obtained from a previous query. Provide this with updates to ensure the metafield is modified safely.
- `type`: `String` — The type of data that is stored in the metafield.
