# Mutation: `fulfillmentOrderMerge`

**Returns:** `FulfillmentOrderMergePayload`

Merges a set or multiple sets of fulfillment orders together into one based on
line item inputs and quantities.

## Arguments

- **`fulfillmentOrderMergeInputs`**: `[FulfillmentOrderMergeInput!]!` — One or more sets of fulfillment orders to be merged.

## Payload Fields

- `fulfillmentOrderMerges`: `[FulfillmentOrderMergeResult!]` — The result of the fulfillment order merges.
- `userErrors`: `[FulfillmentOrderMergeUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrderMergeInput](../types/inputs/FulfillmentOrderMergeInput.md)
- [FulfillmentOrderMergePayload](../types/objects/FulfillmentOrderMergePayload.md)
- [FulfillmentOrderMergeResult](../types/objects/FulfillmentOrderMergeResult.md)
- [FulfillmentOrderMergeUserError](../types/objects/FulfillmentOrderMergeUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderMerge($fulfillmentOrderMergeInputs: [FulfillmentOrderMergeInput!]!) {
  fulfillmentOrderMerge(fulfillmentOrderMergeInputs: $fulfillmentOrderMergeInputs) {
    fulfillmentOrderMerges {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
