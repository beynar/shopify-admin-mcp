# Mutation: `fulfillmentConstraintRuleCreate`

**Returns:** `FulfillmentConstraintRuleCreatePayload`

Creates a fulfillment constraint rule and its metafield.

## Arguments

- **`functionHandle`**: `String` — The handle of the function providing the constraint rule.
- **`deliveryMethodTypes`**: `[DeliveryMethodType!]!` — Associate the function with one or multiple delivery method types.
- **`metafields`**: `[MetafieldInput!]` = `[]` — Metafields to associate to the fulfillment constraint rule.

## Payload Fields

- `fulfillmentConstraintRule`: `FulfillmentConstraintRule` — The newly created fulfillment constraint rule.
- `userErrors`: `[FulfillmentConstraintRuleCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryMethodType](../types/enums/DeliveryMethodType.md)
- [FulfillmentConstraintRule](../types/objects/FulfillmentConstraintRule.md)
- [FulfillmentConstraintRuleCreatePayload](../types/objects/FulfillmentConstraintRuleCreatePayload.md)
- [FulfillmentConstraintRuleCreateUserError](../types/objects/FulfillmentConstraintRuleCreateUserError.md)
- [MetafieldInput](../types/inputs/MetafieldInput.md)

## Example Mutation

```graphql
mutation FulfillmentConstraintRuleCreate($functionHandle: String, $deliveryMethodTypes: [DeliveryMethodType!]!, $metafields: [MetafieldInput!]) {
  fulfillmentConstraintRuleCreate(functionHandle: $functionHandle, deliveryMethodTypes: $deliveryMethodTypes, metafields: $metafields) {
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
