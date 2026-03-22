# Mutation: `abandonmentEmailStateUpdate`

**Returns:** `AbandonmentEmailStateUpdatePayload`

Updates the email state value for an abandonment.

## Arguments

- **`id`**: `ID!` — The ID of the abandonment that needs to be updated.
- **`emailState`**: `AbandonmentEmailState!` — The new email state of the abandonment.
- **`emailSentAt`**: `DateTime` — The date and time for when the email was sent, if that is the case.
- **`emailStateChangeReason`**: `String` — The reason why the email was or was not sent.

## Payload Fields

- `abandonment`: `Abandonment` — The updated abandonment.
- `userErrors`: `[AbandonmentEmailStateUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Abandonment](../types/objects/Abandonment.md)
- [AbandonmentEmailState](../types/enums/AbandonmentEmailState.md)
- [AbandonmentEmailStateUpdatePayload](../types/objects/AbandonmentEmailStateUpdatePayload.md)
- [AbandonmentEmailStateUpdateUserError](../types/objects/AbandonmentEmailStateUpdateUserError.md)

## Example Mutation

```graphql
mutation AbandonmentEmailStateUpdate($id: ID!, $emailState: AbandonmentEmailState!, $emailSentAt: DateTime, $emailStateChangeReason: String) {
  abandonmentEmailStateUpdate(id: $id, emailState: $emailState, emailSentAt: $emailSentAt, emailStateChangeReason: $emailStateChangeReason) {
    abandonment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
