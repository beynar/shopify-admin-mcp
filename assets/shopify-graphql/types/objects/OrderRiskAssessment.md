# Object: `OrderRiskAssessment`

The risk assessments for an order.

See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).

## Fields

- `facts`: `[RiskFact!]!` — Optional facts used to describe the risk assessment. The values in here are specific to the provider.
- `provider`: `App` — The app that provided the assessment, `null` if the assessment was provided by Shopify.
- `riskLevel`: `RiskAssessmentResult!` — The likelihood that the order is fraudulent, based on this risk assessment.

## Related Types

- [App](../../types/objects/App.md)
- [RiskAssessmentResult](../../types/enums/RiskAssessmentResult.md)
- [RiskFact](../../types/objects/RiskFact.md)
