# Object: `DiscountCodeNode`

The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
including related queries, mutations, limitations, and considerations.

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `Node`

## Fields

- `codeDiscount`: `DiscountCode!` — The underlying code discount object.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [DiscountCode](../../types/unions/DiscountCode.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
