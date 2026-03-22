# Enum: `ErrorsServerPixelUserErrorCode`

Possible error codes that can be returned by `ErrorsServerPixelUserError`.

## Values

- `NOT_FOUND` — A server pixel doesn't exist for this app and shop.
- `ALREADY_EXISTS` — A server pixel already exists for this app and shop. Only one server pixel can exist for any app and shop combination.
- `PUB_SUB_ERROR` — PubSubProject and PubSubTopic values resulted in an address that is not a valid GCP pub/sub format.Address format should be pubsub://project:topic.
- `NEEDS_CONFIGURATION_TO_CONNECT` — Server Pixel must be configured with a valid AWS Event Bridge or GCP pub/sub endpoint address to be connected.
