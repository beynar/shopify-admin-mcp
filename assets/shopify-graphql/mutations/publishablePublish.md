# Mutation: `publishablePublish`

**Returns:** `PublishablePublishPayload`

Publishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), to one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

You can schedule future publication by providing a publish date. Only online store channels support [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing).

## Arguments

- **`id`**: `ID!` — The resource to create or update publications for.
- **`input`**: `[PublicationInput!]!` — Specifies the input fields required to publish a resource.

## Payload Fields

- `publishable`: `Publishable` — Resource that has been published.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PublicationInput](../types/inputs/PublicationInput.md)
- [Publishable](../types/interfaces/Publishable.md)
- [PublishablePublishPayload](../types/objects/PublishablePublishPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation PublishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
