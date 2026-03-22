# Mutation: `pubSubServerPixelUpdate`

**Returns:** `PubSubServerPixelUpdatePayload`

Updates the server pixel to connect to a Google PubSub endpoint.
Running this mutation deletes any previous subscriptions for the server pixel.

## Arguments

- **`pubSubProject`**: `String!` — The Google PubSub project ID.
- **`pubSubTopic`**: `String!` — The Google PubSub topic ID.

## Payload Fields

- `serverPixel`: `ServerPixel` — The server pixel as configured by the mutation.
- `userErrors`: `[ErrorsServerPixelUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ErrorsServerPixelUserError](../types/objects/ErrorsServerPixelUserError.md)
- [PubSubServerPixelUpdatePayload](../types/objects/PubSubServerPixelUpdatePayload.md)
- [ServerPixel](../types/objects/ServerPixel.md)

## Example Mutation

```graphql
mutation PubSubServerPixelUpdate($pubSubProject: String!, $pubSubTopic: String!) {
  pubSubServerPixelUpdate(pubSubProject: $pubSubProject, pubSubTopic: $pubSubTopic) {
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
