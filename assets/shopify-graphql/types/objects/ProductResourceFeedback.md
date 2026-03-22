# Object: `ProductResourceFeedback`

Reports the status of product for a Sales Channel or Storefront API.
This might include why a product is not available in a Sales Channel
and how a merchant might fix this.

## Fields

- `feedbackGeneratedAt`: `DateTime!` — The time when the feedback was generated. Used to help determine whether
- `messages`: `[String!]!` — The feedback messages presented to the merchant.
- `productId`: `ID!` — The ID of the product associated with the feedback.
- `productUpdatedAt`: `DateTime!` — The timestamp of the product associated with the feedback.
- `state`: `ResourceFeedbackState!` — Conveys the state of the feedback and whether it requires merchant action or not.

## Related Types

- [ResourceFeedbackState](../../types/enums/ResourceFeedbackState.md)
