# Mutation: `mobilePlatformApplicationUpdate`

**Returns:** `MobilePlatformApplicationUpdatePayload`

Update a mobile platform application.

## Arguments

- **`id`**: `ID!` — The ID of the Mobile Platform Application to be updated.
- **`input`**: `MobilePlatformApplicationUpdateInput!` — The input to updat a Mobile Platform Application.

## Payload Fields

- `mobilePlatformApplication`: `MobilePlatformApplication` — Created mobile platform application.
- `userErrors`: `[MobilePlatformApplicationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MobilePlatformApplication](../types/unions/MobilePlatformApplication.md)
- [MobilePlatformApplicationUpdateInput](../types/inputs/MobilePlatformApplicationUpdateInput.md)
- [MobilePlatformApplicationUpdatePayload](../types/objects/MobilePlatformApplicationUpdatePayload.md)
- [MobilePlatformApplicationUserError](../types/objects/MobilePlatformApplicationUserError.md)

## Example Mutation

```graphql
mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
  mobilePlatformApplicationUpdate(id: $id, input: $input) {
    mobilePlatformApplication {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
