# Mutation: `taxAppConfigure`

**Returns:** `TaxAppConfigurePayload`

Allows tax app configurations for tax partners.

## Arguments

- **`ready`**: `Boolean!` — Configures whether the tax app is correctly configured and ready to be used.

## Payload Fields

- `taxAppConfiguration`: `TaxAppConfiguration` — The updated tax app configuration.
- `userErrors`: `[TaxAppConfigureUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [TaxAppConfiguration](../types/objects/TaxAppConfiguration.md)
- [TaxAppConfigurePayload](../types/objects/TaxAppConfigurePayload.md)
- [TaxAppConfigureUserError](../types/objects/TaxAppConfigureUserError.md)

## Example Mutation

```graphql
mutation TaxAppConfigure($ready: Boolean!) {
  taxAppConfigure(ready: $ready) {
    taxAppConfiguration {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
