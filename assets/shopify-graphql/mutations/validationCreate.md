# Mutation: `validationCreate`

**Returns:** `ValidationCreatePayload`

Creates a validation.

## Arguments

- **`validation`**: `ValidationCreateInput!` — The input fields for a new validation.

## Payload Fields

- `userErrors`: `[ValidationUserError!]!` — The list of errors that occurred from executing the mutation.
- `validation`: `Validation` — The created validation.

## Related Types

- [Validation](../types/objects/Validation.md)
- [ValidationCreateInput](../types/inputs/ValidationCreateInput.md)
- [ValidationCreatePayload](../types/objects/ValidationCreatePayload.md)
- [ValidationUserError](../types/objects/ValidationUserError.md)

## Example Mutation

```graphql
mutation ValidationCreate($validation: ValidationCreateInput!) {
  validationCreate(validation: $validation) {
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
