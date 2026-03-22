# Query: `publicApiVersions`

**Returns:** `[ApiVersion!]!`

The list of publicly-accessible Admin API versions, including supported versions, the release candidate, and unstable versions.

## Return Type Fields

- `displayName`: `String!` — The human-readable name of the version.
- `handle`: `String!` — The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.
- `supported`: `Boolean!` — Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning).

## Related Types

- [ApiVersion](../types/objects/ApiVersion.md)

## Example Query

```graphql
query {
  publicApiVersions {
    displayName
    handle
    supported
  }
}
```
