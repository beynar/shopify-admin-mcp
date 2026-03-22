# Query: `urlRedirect`

**Returns:** `UrlRedirect`

Returns a `UrlRedirect` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `UrlRedirect` to return.

## Return Type Fields

- `id`: `ID!` — The ID of the URL redirect.
- `path`: `String!` — The old path to be redirected from. When the user visits this path, they will be redirected to the target location.
- `target`: `String!` — The target location where the user will be redirected to.

## Related Types

- [UrlRedirect](../types/objects/UrlRedirect.md)

## Example Query

```graphql
query UrlRedirect($id: ID!) {
  urlRedirect(id: $id) {
    path
    target
  }
}
```
