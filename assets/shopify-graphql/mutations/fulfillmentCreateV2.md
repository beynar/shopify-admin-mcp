# Mutation: `fulfillmentCreateV2`

**Returns:** `FulfillmentCreateV2Payload`

Creates a fulfillment for one or many fulfillment orders.
The fulfillment orders are associated with the same order and are assigned to the same location.

## Arguments

- **`fulfillment`**: `FulfillmentV2Input!` — The input fields used to create a fulfillment from fulfillment orders.
- **`message`**: `String` — An optional message for the fulfillment request.

## Payload Fields

- `fulfillment`: `Fulfillment` — The created fulfillment.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Fulfillment](../types/objects/Fulfillment.md)
- [FulfillmentCreateV2Payload](../types/objects/FulfillmentCreateV2Payload.md)
- [FulfillmentV2Input](../types/inputs/FulfillmentV2Input.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentCreateV2($fulfillment: FulfillmentV2Input!, $message: String) {
  fulfillmentCreateV2(fulfillment: $fulfillment, message: $message) {
    fulfillment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
