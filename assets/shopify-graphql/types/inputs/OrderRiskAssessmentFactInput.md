# Input Object: `OrderRiskAssessmentFactInput`

The input fields to create a fact on an order risk assessment.

## Input Fields

- `sentiment`: `RiskFactSentiment!` — Indicates whether the fact is a negative, neutral or positive contributor with regards to risk.
- `description`: `String!` — A description of the fact. Large values are truncated to 256 characters.

## Related Types

- [RiskFactSentiment](../../types/enums/RiskFactSentiment.md)
