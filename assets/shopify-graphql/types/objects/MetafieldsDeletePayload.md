# Object: `MetafieldsDeletePayload`

Return type for `metafieldsDelete` mutation.

## Fields

- `deletedMetafields`: `[MetafieldIdentifier]` — List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldIdentifier](../../types/objects/MetafieldIdentifier.md)
- [UserError](../../types/objects/UserError.md)
