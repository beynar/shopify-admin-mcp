# Query: `discountNode`

**Returns:** `DiscountNode`

Returns a `DiscountNode` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `DiscountNode` to return.

## Return Type Fields

- `discount`: `Discount!` — A discount that's applied at checkout or on cart.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [Discount](../types/unions/Discount.md)
- [DiscountNode](../types/objects/DiscountNode.md)
- [Metafield](../types/objects/Metafield.md)

## Example Query

```graphql
query DiscountNode($id: ID!) {
  discountNode(id: $id) {
  }
}
```
