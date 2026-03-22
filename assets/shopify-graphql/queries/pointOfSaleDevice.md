# Query: `pointOfSaleDevice`

**Returns:** `PointOfSaleDevice`

Returns a `PointOfSaleDevice` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `PointOfSaleDevice` to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.

## Related Types

- [PointOfSaleDevice](../types/objects/PointOfSaleDevice.md)

## Example Query

```graphql
query PointOfSaleDevice($id: ID!) {
  pointOfSaleDevice(id: $id) {
  }
}
```
