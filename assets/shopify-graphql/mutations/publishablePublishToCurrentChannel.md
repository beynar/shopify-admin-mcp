# Mutation: `publishablePublishToCurrentChannel`

**Returns:** `PublishablePublishToCurrentChannelPayload`

Publishes a resource to the current [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) associated with the requesting app. The system determines the current channel by the app's API client ID. Resources include [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects that implement the [`Publishable`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable) interface.

For products to be visible in the channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription ([`requiresSellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.requiresSellingPlan): `true`) can only be published to online stores.

## Arguments

- **`id`**: `ID!` — The resource to create or update publications for.

## Payload Fields

- `publishable`: `Publishable` — Resource that has been published.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Publishable](../types/interfaces/Publishable.md)
- [PublishablePublishToCurrentChannelPayload](../types/objects/PublishablePublishToCurrentChannelPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation PublishablePublishToCurrentChannel($id: ID!) {
  publishablePublishToCurrentChannel(id: $id) {
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
