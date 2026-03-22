# Input Object: `OrderRiskAssessmentCreateInput`

The input fields for an order risk assessment.

## Input Fields

- `orderId`: `ID!` — The ID of the order receiving the fraud assessment.
- `riskLevel`: `RiskAssessmentResult!` — The risk level of the fraud assessment.
- `facts`: `[OrderRiskAssessmentFactInput!]!` — The list of facts used to determine the fraud assessment.

## Related Types

- [OrderRiskAssessmentFactInput](../../types/inputs/OrderRiskAssessmentFactInput.md)
- [RiskAssessmentResult](../../types/enums/RiskAssessmentResult.md)
