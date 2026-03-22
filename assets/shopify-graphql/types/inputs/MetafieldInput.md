# Input Object: `MetafieldInput`

The input fields to use to create or update a metafield through a mutation on the owning resource.
An alternative way to create or update a metafield is by using the
[metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsSet) mutation.

## Input Fields

- `id`: `ID` — The unique ID of the metafield. Using `namespace` and `key` is preferred for creating and updating.
- `namespace`: `String` — The container for a group of metafields that the metafield is or will be associated with. Used in tandem with
- `key`: `String` — The unique identifier for a metafield within its namespace.
- `value`: `String` — The data stored in the metafield. Always stored as a string, regardless of the metafield's type.
- `type`: `String` — The type of data that is stored in the metafield.
