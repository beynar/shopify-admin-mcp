# Mutation: `serverPixelCreate`

**Returns:** `ServerPixelCreatePayload`

Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

## Payload Fields

- `serverPixel`: `ServerPixel` — The new server pixel.
- `userErrors`: `[ErrorsServerPixelUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ErrorsServerPixelUserError](../types/objects/ErrorsServerPixelUserError.md)
- [ServerPixel](../types/objects/ServerPixel.md)
- [ServerPixelCreatePayload](../types/objects/ServerPixelCreatePayload.md)

## Example Mutation

```graphql
mutation {
  serverPixelCreate {
    serverPixel {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
