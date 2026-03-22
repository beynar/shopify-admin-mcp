# Enum: `ReturnErrorCode`

Possible error codes that can be returned by `ReturnUserError`.

## Values

- `INTERNAL_ERROR` — Unexpected internal error happened.
- `TOO_MANY_ARGUMENTS` — Too many arguments provided.
- `BLANK` — The input value is blank.
- `EQUAL_TO` — The input value should be equal to the value allowed.
- `GREATER_THAN` — The input value should be greater than the minimum allowed value.
- `GREATER_THAN_OR_EQUAL_TO` — The input value should be greater than or equal to the minimum value allowed.
- `INCLUSION` — The input value isn't included in the list.
- `INVALID` — The input value is invalid.
- `LESS_THAN` — The input value should be less than the maximum value allowed.
- `LESS_THAN_OR_EQUAL_TO` — The input value should be less than or equal to the maximum value allowed.
- `NOT_A_NUMBER` — The input value is not a number.
- `PRESENT` — The input value needs to be blank.
- `TAKEN` — The input value is already taken.
- `TOO_BIG` — The input value is too big.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `WRONG_LENGTH` — The input value is the wrong length.
- `ALREADY_EXISTS` — The requested resource already exists.
- `CREATION_FAILED` — A requested resource could not be created.
- `FEATURE_NOT_ENABLED` — A required feature is not enabled.
- `INVALID_STATE` — A resource was not in the correct state for the operation to succeed.
- `MISSING_PERMISSION` — The user does not have permission to perform the operation.
- `NOTIFICATION_FAILED` — A requested notification could not be sent.
- `NOT_EDITABLE` — A requested item is not editable.
- `NOT_FOUND` — A requested item could not be found.
