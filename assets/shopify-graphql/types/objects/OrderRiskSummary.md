# Object: `OrderRiskSummary`

Summary of risk characteristics for an order.

See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).

## Fields

- `assessments`: `[OrderRiskAssessment!]!` — The list of risk assessments for the order.
- `recommendation`: `OrderRiskRecommendationResult!` — The recommendation for the order based on the results of the risk assessments. This suggests the action the merchant should take with regards to its risk of fraud.

## Related Types

- [OrderRiskAssessment](../../types/objects/OrderRiskAssessment.md)
- [OrderRiskRecommendationResult](../../types/enums/OrderRiskRecommendationResult.md)
