# Mutation: `shopLocaleEnable`

**Returns:** `ShopLocaleEnablePayload`

Adds a locale for a shop. The newly added locale is in the unpublished state.

## Arguments

- **`locale`**: `String!` — ISO code of the locale to enable.
- **`marketWebPresenceIds`**: `[ID!]` — The list of markets web presences to add the locale to.

## Payload Fields

- `shopLocale`: `ShopLocale` — ISO code of the locale that was enabled.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ShopLocale](../types/objects/ShopLocale.md)
- [ShopLocaleEnablePayload](../types/objects/ShopLocaleEnablePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ShopLocaleEnable($locale: String!, $marketWebPresenceIds: [ID!]) {
  shopLocaleEnable(locale: $locale, marketWebPresenceIds: $marketWebPresenceIds) {
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
