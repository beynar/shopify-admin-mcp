# Query: `automaticDiscountNode`

**Returns:** `DiscountAutomaticNode`

Returns a `DiscountAutomaticNode` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `DiscountAutomaticNode` to return.

## Return Type Fields

- `automaticDiscount`: `DiscountAutomatic!` — A discount that's applied automatically when an order meets specific criteria. Learn more about [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [DiscountAutomatic](../types/unions/DiscountAutomatic.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [Metafield](../types/objects/Metafield.md)

## Example Query

```graphql
query AutomaticDiscountNode($id: ID!) {
  automaticDiscountNode(id: $id) {
  }
}
```
