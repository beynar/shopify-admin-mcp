# Mutation: `returnClose`

**Returns:** `ReturnClosePayload`

Indicates a return is complete, either when a refund has been made and items restocked,
or simply when it has been marked as returned in the system.

## Arguments

- **`id`**: `ID!` — The ID of the return to close.

## Payload Fields

- `return`: `Return` — The closed return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnClosePayload](../types/objects/ReturnClosePayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnClose($id: ID!) {
  returnClose(id: $id) {
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
