# Mutation: `appRevokeAccessScopes`

**Returns:** `AppRevokeAccessScopesPayload`

Revokes previously granted access scopes from an app installation, allowing merchants to reduce an app's permissions without completely uninstalling it. This provides granular control over what data and functionality apps can access.

For example, if a merchant no longer wants an app to access customer information but still wants to use its inventory features, they can revoke the customer-related scopes while keeping inventory permissions active.

Use the `appRevokeAccessScopes` mutation to:
- Remove specific permissions from installed apps
- Maintain app functionality while minimizing data exposure

The mutation returns details about which scopes were successfully revoked and any errors that prevented certain permissions from being removed.

Learn more about [managing app permissions](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#revoke-granted-scopes-dynamically).

## Arguments

- **`scopes`**: `[String!]!` — The list of scope handles to revoke.

## Payload Fields

- `revoked`: `[AccessScope!]` — The list of scope handles that have been revoked.
- `userErrors`: `[AppRevokeAccessScopesAppRevokeScopeError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AccessScope](../types/objects/AccessScope.md)
- [AppRevokeAccessScopesAppRevokeScopeError](../types/objects/AppRevokeAccessScopesAppRevokeScopeError.md)
- [AppRevokeAccessScopesPayload](../types/objects/AppRevokeAccessScopesPayload.md)

## Example Mutation

```graphql
mutation AppRevokeAccessScopes($scopes: [String!]!) {
  appRevokeAccessScopes(scopes: $scopes) {
    revoked {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
