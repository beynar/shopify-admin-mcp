# Input Object: `ResourceFeedbackCreateInput`

The input fields for a resource feedback object.

## Input Fields

- `feedbackGeneratedAt`: `DateTime!` — The date and time when the feedback was generated. Used to help determine whether
- `messages`: `[String!]` — If the feedback state is `requires_action`, then you can send a string message that communicates the action to be taken by the merchant.
- `state`: `ResourceFeedbackState!` — The state of the feedback and whether it requires merchant action.

## Related Types

- [ResourceFeedbackState](../../types/enums/ResourceFeedbackState.md)
