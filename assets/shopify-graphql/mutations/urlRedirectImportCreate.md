# Mutation: `urlRedirectImportCreate`

**Returns:** `UrlRedirectImportCreatePayload`

Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.

## Arguments

- **`url`**: `URL!` — The staged upload URL of the CSV file. You can download [a sample URL redirect CSV file](https://help.shopify.com/csv/sample-redirect-template.csv).

## Payload Fields

- `urlRedirectImport`: `UrlRedirectImport` — The created `URLRedirectImport` object.
- `userErrors`: `[UrlRedirectImportUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [UrlRedirectImport](../types/objects/UrlRedirectImport.md)
- [UrlRedirectImportCreatePayload](../types/objects/UrlRedirectImportCreatePayload.md)
- [UrlRedirectImportUserError](../types/objects/UrlRedirectImportUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectImportCreate($url: URL!) {
  urlRedirectImportCreate(url: $url) {
    urlRedirectImport {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
