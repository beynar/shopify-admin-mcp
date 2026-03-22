# Input Object: `ProductResourceFeedbackInput`

The input fields used to create a product feedback.

## Input Fields

- `productId`: `ID!` — The ID of the product that the feedback was created on.
- `state`: `ResourceFeedbackState!` — Whether the merchant needs to take action on the product.
- `feedbackGeneratedAt`: `DateTime!` — The date and time when the payload is constructed.
- `productUpdatedAt`: `DateTime!` — The timestamp of the product associated with the feedback.
- `messages`: `[String!]` — A concise set of copy strings to be displayed to merchants. Used to guide merchants in resolving problems that your app encounters when trying to make use of their products.

## Related Types

- [ResourceFeedbackState](../../types/enums/ResourceFeedbackState.md)
