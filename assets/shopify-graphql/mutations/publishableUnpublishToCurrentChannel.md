# Mutation: `publishableUnpublishToCurrentChannel`

**Returns:** `PublishableUnpublishToCurrentChannelPayload`

Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

## Arguments

- **`id`**: `ID!` — The resource to delete or update publications for.

## Payload Fields

- `publishable`: `Publishable` — Resource that has been unpublished.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Publishable](../types/interfaces/Publishable.md)
- [PublishableUnpublishToCurrentChannelPayload](../types/objects/PublishableUnpublishToCurrentChannelPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation PublishableUnpublishToCurrentChannel($id: ID!) {
  publishableUnpublishToCurrentChannel(id: $id) {
    publishable {
      id
    }
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
