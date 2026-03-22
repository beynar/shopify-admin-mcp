# Mutation: `orderRiskAssessmentCreate`

**Returns:** `OrderRiskAssessmentCreatePayload`

Create a risk assessment for an order.

## Arguments

- **`orderRiskAssessmentInput`**: `OrderRiskAssessmentCreateInput!` — The input fields required to create a risk assessment.

## Payload Fields

- `orderRiskAssessment`: `OrderRiskAssessment` — The order risk assessment created.
- `userErrors`: `[OrderRiskAssessmentCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OrderRiskAssessment](../types/objects/OrderRiskAssessment.md)
- [OrderRiskAssessmentCreateInput](../types/inputs/OrderRiskAssessmentCreateInput.md)
- [OrderRiskAssessmentCreatePayload](../types/objects/OrderRiskAssessmentCreatePayload.md)
- [OrderRiskAssessmentCreateUserError](../types/objects/OrderRiskAssessmentCreateUserError.md)

## Example Mutation

```graphql
mutation OrderRiskAssessmentCreate($orderRiskAssessmentInput: OrderRiskAssessmentCreateInput!) {
  orderRiskAssessmentCreate(orderRiskAssessmentInput: $orderRiskAssessmentInput) {
    orderRiskAssessment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
