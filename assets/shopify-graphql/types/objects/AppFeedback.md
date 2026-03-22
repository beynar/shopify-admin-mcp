# Object: `AppFeedback`

Reports the status of shops and their resources and displays this information
within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
to set up an app on their store.

## Fields

- `app`: `App!` — The application associated to the feedback.
- `feedbackGeneratedAt`: `DateTime!` — The date and time when the app feedback was generated.
- `link`: `Link` — A link to where merchants can resolve errors.
- `messages`: `[UserError!]!` — The feedback message presented to the merchant.
- `state`: `ResourceFeedbackState!` — Conveys the state of the feedback and whether it requires merchant action or not.

## Related Types

- [App](../../types/objects/App.md)
- [Link](../../types/objects/Link.md)
- [ResourceFeedbackState](../../types/enums/ResourceFeedbackState.md)
- [UserError](../../types/objects/UserError.md)
