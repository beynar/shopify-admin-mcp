# Query: `mobilePlatformApplication`

**Returns:** `MobilePlatformApplication`

Return a mobile platform application by its ID.

## Arguments

- **`id`**: `ID!` — ID of the mobile platform app.

## Related Types

- [MobilePlatformApplication](../types/unions/MobilePlatformApplication.md)

## Example Query

```graphql
query MobilePlatformApplication($id: ID!) {
  mobilePlatformApplication(id: $id) {
  }
}
```
