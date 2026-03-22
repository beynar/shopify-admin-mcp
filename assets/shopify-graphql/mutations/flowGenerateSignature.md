# Mutation: `flowGenerateSignature`

**Returns:** `FlowGenerateSignaturePayload`

Generates a signature for a Flow action payload.

## Arguments

- **`id`**: `ID!` — The unique identifier of the Flow action definition.
- **`payload`**: `String!` — The request payload used to generate the signature.

## Payload Fields

- `payload`: `String` — The payload used to generate the signature.
- `signature`: `String` — The generated signature.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FlowGenerateSignaturePayload](../types/objects/FlowGenerateSignaturePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FlowGenerateSignature($id: ID!, $payload: String!) {
  flowGenerateSignature(id: $id, payload: $payload) {
    payload
    signature
    userErrors {
      field
      message
    }
  }
}
```
