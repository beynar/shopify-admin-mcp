# Mutation: `menuDelete`

**Returns:** `MenuDeletePayload`

Deletes a menu.

## Arguments

- **`id`**: `ID!` — The ID of the menu to be deleted.

## Payload Fields

- `deletedMenuId`: `ID` — The ID of the deleted menu.
- `userErrors`: `[MenuDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MenuDeletePayload](../types/objects/MenuDeletePayload.md)
- [MenuDeleteUserError](../types/objects/MenuDeleteUserError.md)

## Example Mutation

```graphql
mutation MenuDelete($id: ID!) {
  menuDelete(id: $id) {
    deletedMenuId
    userErrors {
      field
      message
    }
  }
}
```
