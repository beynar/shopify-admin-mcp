# Object: `UrlRedirectImport`

A request to import a [`URLRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object
into the Online Store channel. Apps can use this to query the state of an `UrlRedirectImport` request.

For more information, see [`url-redirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)s.

**Implements:** `Node`

## Fields

- `count`: `Int` — The number of rows in the file.
- `createdCount`: `Int` — The number of redirects created from the import.
- `failedCount`: `Int` — The number of redirects that failed to be imported.
- `finished`: `Boolean!` — Whether the import is finished.
- `finishedAt`: `DateTime` — The date and time when the import finished.
- `id`: `ID!` — The ID of the `UrlRedirectImport` object.
- `previewRedirects`: `[UrlRedirectImportPreview!]!` — A list of up to three previews of the URL redirects to be imported.
- `updatedCount`: `Int` — The number of redirects updated during the import.

## Related Types

- [UrlRedirectImportPreview](../../types/objects/UrlRedirectImportPreview.md)
