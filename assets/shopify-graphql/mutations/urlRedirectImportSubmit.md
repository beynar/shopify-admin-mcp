# Mutation: `urlRedirectImportSubmit`

**Returns:** `UrlRedirectImportSubmitPayload`

Submits a `UrlRedirectImport` request to be processed.

The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.

## Arguments

- **`id`**: `ID!` — The ID of the [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

## Payload Fields

- `job`: `Job` — The asynchronous job importing the redirects.
- `userErrors`: `[UrlRedirectImportUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [UrlRedirectImportSubmitPayload](../types/objects/UrlRedirectImportSubmitPayload.md)
- [UrlRedirectImportUserError](../types/objects/UrlRedirectImportUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectImportSubmit($id: ID!) {
  urlRedirectImportSubmit(id: $id) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
