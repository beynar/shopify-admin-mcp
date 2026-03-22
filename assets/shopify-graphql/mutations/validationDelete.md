# Mutation: `validationDelete`

**Returns:** `ValidationDeletePayload`

Deletes a validation.

## Arguments

- **`id`**: `ID!` — The ID representing the installed validation.

## Payload Fields

- `deletedId`: `ID` — Returns the deleted validation ID.
- `userErrors`: `[ValidationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ValidationDeletePayload](../types/objects/ValidationDeletePayload.md)
- [ValidationUserError](../types/objects/ValidationUserError.md)

## Example Mutation

```graphql
mutation ValidationDelete($id: ID!) {
  validationDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
