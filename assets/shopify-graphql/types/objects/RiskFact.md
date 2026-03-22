# Object: `RiskFact`

A risk fact belongs to a single risk assessment and serves to provide additional context for an assessment. Risk facts are not necessarily tied to the result of the recommendation.

## Fields

- `description`: `String!` — A description of the fact.
- `sentiment`: `RiskFactSentiment!` — Indicates whether the fact is a negative, neutral or positive contributor with regards to risk.

## Related Types

- [RiskFactSentiment](../../types/enums/RiskFactSentiment.md)
