# Query: `serverPixel`

**Returns:** `ServerPixel`

The server pixel configured by the app.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `status`: `ServerPixelStatus` — The current state of this server pixel.
- `webhookEndpointAddress`: `String` — Address of the EventBridge or PubSub endpoint.

## Related Types

- [ServerPixel](../types/objects/ServerPixel.md)
- [ServerPixelStatus](../types/enums/ServerPixelStatus.md)

## Example Query

```graphql
query {
  serverPixel {
    webhookEndpointAddress
  }
}
```
