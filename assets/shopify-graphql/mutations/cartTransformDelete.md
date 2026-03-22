# Mutation: `cartTransformDelete`

**Returns:** `CartTransformDeletePayload`

Removes an existing cart transform function from the merchant's store, disabling any customized bundle or cart modification logic it provided. This mutation persistently deletes the transform configuration and stops all associated cart processing.

For example, when discontinuing a bundle app or removing specific merchandising features, you would delete the corresponding cart transform to ensure customers no longer see the bundled products or modified cart behavior.

Use `CartTransformDelete` to:
- Deactivate customized bundle logic when removing app features
- Clean up unused transform functions
- Disable cart modifications during app uninstallation
- Remove outdated merchandising strategies
- Restore default cart behavior for merchants

The deletion processes immediately and returns the ID of the removed cart transform for confirmation. Once deleted, the transform function stops processing new cart operations, though existing cart sessions may retain their current state until refresh. This ensures a clean transition without disrupting active customer sessions.

Consider the timing of deletions carefully, as removing transforms during peak shopping periods could affect customer experience if they have active carts with transformed items.

Learn more about [managing cart transforms](https://shopify.dev/docs/apps/selling-strategies/bundles).

## Arguments

- **`id`**: `ID!` — A globally-unique identifier for the cart transform.

## Payload Fields

- `deletedId`: `ID` — The globally-unique ID for the deleted cart transform.
- `userErrors`: `[CartTransformDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CartTransformDeletePayload](../types/objects/CartTransformDeletePayload.md)
- [CartTransformDeleteUserError](../types/objects/CartTransformDeleteUserError.md)

## Example Mutation

```graphql
mutation CartTransformDelete($id: ID!) {
  cartTransformDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
