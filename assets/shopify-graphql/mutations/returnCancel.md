# Mutation: `returnCancel`

**Returns:** `ReturnCancelPayload`

Cancels a return and restores the items back to being fulfilled.
Canceling a return is only available before any work has been done
on the return (such as an inspection or refund).

## Arguments

- **`id`**: `ID!` — The ID of the return to cancel.

## Payload Fields

- `return`: `Return` — The canceled return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnCancelPayload](../types/objects/ReturnCancelPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnCancel($id: ID!) {
  returnCancel(id: $id) {
    return {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
