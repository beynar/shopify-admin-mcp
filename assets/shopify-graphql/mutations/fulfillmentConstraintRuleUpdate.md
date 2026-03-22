# Mutation: `fulfillmentConstraintRuleUpdate`

**Returns:** `FulfillmentConstraintRuleUpdatePayload`

Update a fulfillment constraint rule.

## Arguments

- **`id`**: `ID!` — A globally-unique identifier for the fulfillment constraint rule.
- **`deliveryMethodTypes`**: `[DeliveryMethodType!]!` — Specifies the delivery method types to be updated. If not provided or providing an empty list will associate the function with all delivery methods.

## Payload Fields

- `fulfillmentConstraintRule`: `FulfillmentConstraintRule` — The updated fulfillment constraint rule.
- `userErrors`: `[FulfillmentConstraintRuleUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryMethodType](../types/enums/DeliveryMethodType.md)
- [FulfillmentConstraintRule](../types/objects/FulfillmentConstraintRule.md)
- [FulfillmentConstraintRuleUpdatePayload](../types/objects/FulfillmentConstraintRuleUpdatePayload.md)
- [FulfillmentConstraintRuleUpdateUserError](../types/objects/FulfillmentConstraintRuleUpdateUserError.md)

## Example Mutation

```graphql
mutation FulfillmentConstraintRuleUpdate($id: ID!, $deliveryMethodTypes: [DeliveryMethodType!]!) {
  fulfillmentConstraintRuleUpdate(id: $id, deliveryMethodTypes: $deliveryMethodTypes) {
    fulfillmentConstraintRule {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
