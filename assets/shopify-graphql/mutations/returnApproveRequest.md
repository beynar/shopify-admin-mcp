# Mutation: `returnApproveRequest`

**Returns:** `ReturnApproveRequestPayload`

Approves a customer's return request.
If this mutation is successful, then the `Return.status` field of the
approved return is set to `OPEN`.

## Arguments

- **`input`**: `ReturnApproveRequestInput!` — The input fields to approve a return.

## Payload Fields

- `return`: `Return` — The approved return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnApproveRequestInput](../types/inputs/ReturnApproveRequestInput.md)
- [ReturnApproveRequestPayload](../types/objects/ReturnApproveRequestPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
  returnApproveRequest(input: $input) {
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
