# Mutation: `validationUpdate`

**Returns:** `ValidationUpdatePayload`

Update a validation.

## Arguments

- **`validation`**: `ValidationUpdateInput!` — The input fields to update a validation.
- **`id`**: `ID!` — The ID representing the validation to update.

## Payload Fields

- `userErrors`: `[ValidationUserError!]!` — The list of errors that occurred from executing the mutation.
- `validation`: `Validation` — The updated validation.

## Related Types

- [Validation](../types/objects/Validation.md)
- [ValidationUpdateInput](../types/inputs/ValidationUpdateInput.md)
- [ValidationUpdatePayload](../types/objects/ValidationUpdatePayload.md)
- [ValidationUserError](../types/objects/ValidationUserError.md)

## Example Mutation

```graphql
mutation ValidationUpdate($validation: ValidationUpdateInput!, $id: ID!) {
  validationUpdate(validation: $validation, id: $id) {
    userErrors {
      field
      message
    }
    validation {
      id
    }
  }
}
```
