# Query: `urlRedirectImport`

**Returns:** `UrlRedirectImport`

Returns a `UrlRedirectImport` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `UrlRedirectImport` to return.

## Return Type Fields

- `count`: `Int` — The number of rows in the file.
- `createdCount`: `Int` — The number of redirects created from the import.
- `failedCount`: `Int` — The number of redirects that failed to be imported.
- `finished`: `Boolean!` — Whether the import is finished.
- `finishedAt`: `DateTime` — The date and time when the import finished.
- `id`: `ID!` — The ID of the `UrlRedirectImport` object.
- `previewRedirects`: `[UrlRedirectImportPreview!]!` — A list of up to three previews of the URL redirects to be imported.
- `updatedCount`: `Int` — The number of redirects updated during the import.

## Related Types

- [UrlRedirectImport](../types/objects/UrlRedirectImport.md)
- [UrlRedirectImportPreview](../types/objects/UrlRedirectImportPreview.md)

## Example Query

```graphql
query UrlRedirectImport($id: ID!) {
  urlRedirectImport(id: $id) {
    id
    count
    createdCount
    failedCount
    finished
    finishedAt
  }
}
```
