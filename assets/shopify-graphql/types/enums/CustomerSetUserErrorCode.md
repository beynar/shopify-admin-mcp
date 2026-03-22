# Enum: `CustomerSetUserErrorCode`

Possible error codes that can be returned by `CustomerSetUserError`.

## Values

- `INVALID` — The input value is invalid.
- `INCLUSION` — The input value isn't included in the list.
- `TAKEN` — The input value is already taken.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `PRESENT` — The input value needs to be blank.
- `BLANK` — The input value is blank.
- `ID_NOT_ALLOWED` — The id field is not allowed if identifier is provided.
- `MISSING_FIELD_REQUIRED` — The input field corresponding to the identifier is required.
- `INPUT_MISMATCH` — The identifier value does not match the value of the corresponding field in the input.
- `NOT_FOUND` — Resource matching the identifier was not found.
- `METAFIELD_MISMATCH` — The input argument `metafields` (if present) must contain the `customId` value.
