# Object: `Translation`

A localized version of a field on a resource. Translations enable merchants to provide content in multiple languages for [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other store resources.

Each translation specifies the locale, the field being translated (identified by its key), and the translated value. Translations can be market-specific, allowing different content for the same language across different markets, or available globally when no [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) is specified. The `outdated` flag indicates whether the original content has changed since this translation was last updated.

Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Fields

- `key`: `String!` — On the resource that this translation belongs to, the reference to the value being translated.
- `locale`: `String!` — ISO code of the translation locale.
- `market`: `Market` — The market that the translation is specific to. Null value means the translation is available in all markets.
- `outdated`: `Boolean!` — Whether the original content has changed since this translation was updated.
- `updatedAt`: `DateTime` — The date and time when the translation was updated.
- `value`: `String` — Translation value.

## Related Types

- [Market](../../types/objects/Market.md)
