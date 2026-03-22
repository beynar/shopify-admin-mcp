# Query: `webPixel`

**Returns:** `WebPixel`

Returns a
[web pixel](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
by ID.

## Arguments

- **`id`**: `ID` — The ID of the `WebPixel` object to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `settings`: `JSON!` — The

## Related Types

- [WebPixel](../types/objects/WebPixel.md)

## Example Query

```graphql
query WebPixel($id: ID) {
  webPixel(id: $id) {
    settings
  }
}
```
