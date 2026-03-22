# Mutation: `returnReopen`

**Returns:** `ReturnReopenPayload`

Reopens a closed return.

## Arguments

- **`id`**: `ID!` — The ID of the return to reopen.

## Payload Fields

- `return`: `Return` — The reopened return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnReopenPayload](../types/objects/ReturnReopenPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnReopen($id: ID!) {
  returnReopen(id: $id) {
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
