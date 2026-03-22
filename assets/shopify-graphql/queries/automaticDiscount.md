# Query: `automaticDiscount`

**Returns:** `DiscountAutomatic`

Returns a `DiscountAutomatic` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `DiscountAutomatic` to return.

## Related Types

- [DiscountAutomatic](../types/unions/DiscountAutomatic.md)

## Example Query

```graphql
query AutomaticDiscount($id: ID!) {
  automaticDiscount(id: $id) {
  }
}
```
