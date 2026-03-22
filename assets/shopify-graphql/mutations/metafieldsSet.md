# Mutation: `metafieldsSet`

**Returns:** `MetafieldsSetPayload`

Sets metafield values. Metafield values will be set regardless if they were previously created or not.

Allows a maximum of 25 metafields to be set at a time, with a maximum total request payload size of 10MB.

This operation is atomic, meaning no changes are persisted if an error is encountered.

As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests.
If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`.
If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`.
The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field.
If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error.
You can opt out of write guarantees by not sending `compareDigest` in the request.

## Arguments

- **`metafields`**: `[MetafieldsSetInput!]!` — The list of metafield values to set. Maximum of 25.

## Payload Fields

- `metafields`: `[Metafield!]` — The list of metafields that were set.
- `userErrors`: `[MetafieldsSetUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Metafield](../types/objects/Metafield.md)
- [MetafieldsSetInput](../types/inputs/MetafieldsSetInput.md)
- [MetafieldsSetPayload](../types/objects/MetafieldsSetPayload.md)
- [MetafieldsSetUserError](../types/objects/MetafieldsSetUserError.md)

## Example Mutation

```graphql
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
