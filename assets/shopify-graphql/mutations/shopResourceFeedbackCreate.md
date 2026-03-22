# Mutation: `shopResourceFeedbackCreate`

**Returns:** `ShopResourceFeedbackCreatePayload`

The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if
your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

## Sending feedback on a shop

You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `requires_action` or `success`. You need to send a `requires_action` feedback request for each step that the merchant is required to complete.

If there are multiple set-up steps that require merchant action, then send feedback with a state of `requires_action` as merchants complete prior steps. And to remove the feedback message from the Shopify admin, send a `success` feedback request.

#### Important
Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

## Arguments

- **`input`**: `ResourceFeedbackCreateInput!` — The fields required to create shop feedback.

## Payload Fields

- `feedback`: `AppFeedback` — The shop feedback that's created.
- `userErrors`: `[ShopResourceFeedbackCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppFeedback](../types/objects/AppFeedback.md)
- [ResourceFeedbackCreateInput](../types/inputs/ResourceFeedbackCreateInput.md)
- [ShopResourceFeedbackCreatePayload](../types/objects/ShopResourceFeedbackCreatePayload.md)
- [ShopResourceFeedbackCreateUserError](../types/objects/ShopResourceFeedbackCreateUserError.md)

## Example Mutation

```graphql
mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    feedback {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
