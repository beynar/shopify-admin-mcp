# Mutation: `fulfillmentConstraintRuleDelete`

**Returns:** `FulfillmentConstraintRuleDeletePayload`

Deletes a fulfillment constraint rule and its metafields.

## Arguments

- **`id`**: `ID!` — A globally-unique identifier for the fulfillment constraint rule.

## Payload Fields

- `success`: `Boolean` — Whether or not the fulfillment constraint rule was successfully deleted.
- `userErrors`: `[FulfillmentConstraintRuleDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentConstraintRuleDeletePayload](../types/objects/FulfillmentConstraintRuleDeletePayload.md)
- [FulfillmentConstraintRuleDeleteUserError](../types/objects/FulfillmentConstraintRuleDeleteUserError.md)

## Example Mutation

```graphql
mutation FulfillmentConstraintRuleDelete($id: ID!) {
  fulfillmentConstraintRuleDelete(id: $id) {
    success
    userErrors {
      field
      message
    }
  }
}
```
