# Mutation: `flowTriggerReceive`

**Returns:** `FlowTriggerReceivePayload`

Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [_Create Shopify Flow triggers_](https://shopify.dev/apps/flow/triggers).

## Arguments

- **`handle`**: `String` — The handle of the trigger.
- **`payload`**: `JSON` — The payload needed to run the Trigger.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FlowTriggerReceivePayload](../types/objects/FlowTriggerReceivePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FlowTriggerReceive($handle: String, $payload: JSON) {
  flowTriggerReceive(handle: $handle, payload: $payload) {
    userErrors {
      field
      message
    }
  }
}
```
