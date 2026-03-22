# Mutation: `shopLocaleDisable`

**Returns:** `ShopLocaleDisablePayload`

Deletes a locale for a shop. This also deletes all translations of this locale.

## Arguments

- **`locale`**: `String!` — ISO code of the locale to delete.

## Payload Fields

- `locale`: `String` — ISO code of the locale that was deleted.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ShopLocaleDisablePayload](../types/objects/ShopLocaleDisablePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ShopLocaleDisable($locale: String!) {
  shopLocaleDisable(locale: $locale) {
    locale
    userErrors {
      field
      message
    }
  }
}
```
