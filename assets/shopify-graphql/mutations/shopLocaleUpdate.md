# Mutation: `shopLocaleUpdate`

**Returns:** `ShopLocaleUpdatePayload`

Updates a locale for a shop.

## Arguments

- **`locale`**: `String!` — ISO code of the locale to update.
- **`shopLocale`**: `ShopLocaleInput!` — Specifies the input fields for a shop locale.

## Payload Fields

- `shopLocale`: `ShopLocale` — The locale that was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ShopLocale](../types/objects/ShopLocale.md)
- [ShopLocaleInput](../types/inputs/ShopLocaleInput.md)
- [ShopLocaleUpdatePayload](../types/objects/ShopLocaleUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ShopLocaleUpdate($locale: String!, $shopLocale: ShopLocaleInput!) {
  shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
    shopLocale {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
