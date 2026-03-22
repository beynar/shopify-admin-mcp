# Mutation: `returnDeclineRequest`

**Returns:** `ReturnDeclineRequestPayload`

Declines a return on an order.
When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return.
Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

## Arguments

- **`input`**: `ReturnDeclineRequestInput!` — The input fields for declining a customer's return request.

## Payload Fields

- `return`: `Return` — The declined return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnDeclineRequestInput](../types/inputs/ReturnDeclineRequestInput.md)
- [ReturnDeclineRequestPayload](../types/objects/ReturnDeclineRequestPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
  returnDeclineRequest(input: $input) {
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
