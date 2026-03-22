# Mutation: `mobilePlatformApplicationCreate`

**Returns:** `MobilePlatformApplicationCreatePayload`

Create a mobile platform application.

## Arguments

- **`input`**: `MobilePlatformApplicationCreateInput!` — The input to create a mobile platform application.

## Payload Fields

- `mobilePlatformApplication`: `MobilePlatformApplication` — Created mobile platform application.
- `userErrors`: `[MobilePlatformApplicationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MobilePlatformApplication](../types/unions/MobilePlatformApplication.md)
- [MobilePlatformApplicationCreateInput](../types/inputs/MobilePlatformApplicationCreateInput.md)
- [MobilePlatformApplicationCreatePayload](../types/objects/MobilePlatformApplicationCreatePayload.md)
- [MobilePlatformApplicationUserError](../types/objects/MobilePlatformApplicationUserError.md)

## Example Mutation

```graphql
mutation MobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
  mobilePlatformApplicationCreate(input: $input) {
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
