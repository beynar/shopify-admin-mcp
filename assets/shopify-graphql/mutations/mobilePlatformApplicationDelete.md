# Mutation: `mobilePlatformApplicationDelete`

**Returns:** `MobilePlatformApplicationDeletePayload`

Delete a mobile platform application.

## Arguments

- **`id`**: `ID!` — The ID of the Mobile Platform Application to be deleted.

## Payload Fields

- `deletedMobilePlatformApplicationId`: `ID` — The ID of the mobile platform application that was just deleted.
- `userErrors`: `[MobilePlatformApplicationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MobilePlatformApplicationDeletePayload](../types/objects/MobilePlatformApplicationDeletePayload.md)
- [MobilePlatformApplicationUserError](../types/objects/MobilePlatformApplicationUserError.md)

## Example Mutation

```graphql
mutation MobilePlatformApplicationDelete($id: ID!) {
  mobilePlatformApplicationDelete(id: $id) {
    deletedMobilePlatformApplicationId
    userErrors {
      field
      message
    }
  }
}
```
