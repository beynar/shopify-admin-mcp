# Enum: `AppRevokeAccessScopesAppRevokeScopeErrorCode`

Possible error codes that can be returned by `AppRevokeAccessScopesAppRevokeScopeError`.

## Values

- `MISSING_SOURCE_APP` — No app found on the access token.
- `APPLICATION_CANNOT_BE_FOUND` — The application cannot be found.
- `UNKNOWN_SCOPES` — The requested list of scopes to revoke includes invalid handles.
- `CANNOT_REVOKE_REQUIRED_SCOPES` — Required scopes cannot be revoked.
- `CANNOT_REVOKE_IMPLIED_SCOPES` — Already granted implied scopes cannot be revoked.
- `CANNOT_REVOKE_UNDECLARED_SCOPES` — Cannot revoke optional scopes that haven't been declared.
- `APP_NOT_INSTALLED` — App is not installed on shop.
