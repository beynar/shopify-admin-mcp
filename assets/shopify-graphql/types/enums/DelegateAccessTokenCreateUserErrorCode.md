# Enum: `DelegateAccessTokenCreateUserErrorCode`

Possible error codes that can be returned by `DelegateAccessTokenCreateUserError`.

## Values

- `EMPTY_ACCESS_SCOPE` — The access scope can't be empty.
- `DELEGATE_ACCESS_TOKEN` — The parent access token can't be a delegate token.
- `NEGATIVE_EXPIRES_IN` — The expires_in value must be greater than 0.
- `EXPIRES_AFTER_PARENT` — The delegate token can't expire after the parent token.
- `REFRESH_TOKEN` — The parent access token can't have a refresh token.
- `PERSISTENCE_FAILED` — Persistence failed.
- `UNKNOWN_SCOPES` — Unknown scopes.
