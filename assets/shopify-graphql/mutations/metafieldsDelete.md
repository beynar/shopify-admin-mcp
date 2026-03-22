# Mutation: `metafieldsDelete`

**Returns:** `MetafieldsDeletePayload`

Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects in bulk by specifying combinations of owner ID, namespace, and key.

Returns the identifiers of successfully deleted metafields. If a specified metafield doesn't exist, then the mutation still succeeds but returns `null` for that identifier in the response.

## Arguments

- **`metafields`**: `[MetafieldIdentifierInput!]!` — A list of identifiers specifying metafields to delete. At least one identifier must be specified.

## Payload Fields

- `deletedMetafields`: `[MetafieldIdentifier]` — List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldIdentifier](../types/objects/MetafieldIdentifier.md)
- [MetafieldIdentifierInput](../types/inputs/MetafieldIdentifierInput.md)
- [MetafieldsDeletePayload](../types/objects/MetafieldsDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
  metafieldsDelete(metafields: $metafields) {
    deletedMetafields {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
