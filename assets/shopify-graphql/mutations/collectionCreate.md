# Mutation: `collectionCreate`

**Returns:** `CollectionCreatePayload`

Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together
in the [online store](https://shopify.dev/docs/apps/build/online-store) and
other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).
For example, an athletics store might create different collections for running attire, shoes, and accessories.

There are two types of collections:

- **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
- **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically
included in the collection.

Use the `collectionCreate` mutation when you need to:

- Create a new collection for a product launch or campaign
- Organize products by category, season, or promotion
- Automate product grouping using rules (for example, by tag, type, or price)

> Note:
> The created collection is unpublished by default. To make it available to customers,
use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)
mutation after creation.

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

## Arguments

- **`input`**: `CollectionInput!` — The properties to use when creating the collection.

## Payload Fields

- `collection`: `Collection` — The collection that has been created.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../types/objects/Collection.md)
- [CollectionCreatePayload](../types/objects/CollectionCreatePayload.md)
- [CollectionInput](../types/inputs/CollectionInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CollectionCreate($input: CollectionInput!) {
  collectionCreate(input: $input) {
    collection {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
