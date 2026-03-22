# Mutation: `eventBridgeServerPixelUpdate`

**Returns:** `EventBridgeServerPixelUpdatePayload`

Updates the server pixel to connect to an EventBridge endpoint.
Running this mutation deletes any previous subscriptions for the server pixel.

## Arguments

- **`arn`**: `ARN!` — The ARN for the EventBridge endpoint to which customer events are to be sent.

## Payload Fields

- `serverPixel`: `ServerPixel` — The server pixel as configured by the mutation.
- `userErrors`: `[ErrorsServerPixelUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ErrorsServerPixelUserError](../types/objects/ErrorsServerPixelUserError.md)
- [EventBridgeServerPixelUpdatePayload](../types/objects/EventBridgeServerPixelUpdatePayload.md)
- [ServerPixel](../types/objects/ServerPixel.md)

## Example Mutation

```graphql
mutation EventBridgeServerPixelUpdate($arn: ARN!) {
  eventBridgeServerPixelUpdate(arn: $arn) {
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
