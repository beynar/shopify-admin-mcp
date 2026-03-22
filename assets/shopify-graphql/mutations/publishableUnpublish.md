# Mutation: `publishableUnpublish`

**Returns:** `PublishableUnpublishPayload`

Unpublishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), from one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). The resource remains in your store but becomes unavailable to customers.

For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).

## Arguments

- **`id`**: `ID!` — The resource to delete or update publications for.
- **`input`**: `[PublicationInput!]!` — Specifies the input fields required to unpublish a resource.

## Payload Fields

- `publishable`: `Publishable` — Resource that has been unpublished.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PublicationInput](../types/inputs/PublicationInput.md)
- [Publishable](../types/interfaces/Publishable.md)
- [PublishableUnpublishPayload](../types/objects/PublishableUnpublishPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation PublishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
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
