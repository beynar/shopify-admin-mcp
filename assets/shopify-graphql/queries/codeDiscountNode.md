# Query: `codeDiscountNode`

**Returns:** `DiscountCodeNode`

Returns a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `DiscountCodeNode` to return.

## Return Type Fields

- `codeDiscount`: `DiscountCode!` — The underlying code discount object.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [DiscountCode](../types/unions/DiscountCode.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [Metafield](../types/objects/Metafield.md)

## Example Query

```graphql
query CodeDiscountNode($id: ID!) {
  codeDiscountNode(id: $id) {
  }
}
```
