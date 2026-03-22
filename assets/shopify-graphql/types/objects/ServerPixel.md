# Object: `ServerPixel`

A server pixel stores configuration for streaming customer interactions to an EventBridge or PubSub endpoint.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `status`: `ServerPixelStatus` — The current state of this server pixel.
- `webhookEndpointAddress`: `String` — Address of the EventBridge or PubSub endpoint.

## Related Types

- [ServerPixelStatus](../../types/enums/ServerPixelStatus.md)
