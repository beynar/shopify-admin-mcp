# Query: `collection`

**Returns:** `Collection`

Retrieves a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) by its ID.
A collection represents a grouping of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
that merchants can display and sell as a group in their [online store](https://shopify.dev/docs/apps/build/online-store) and
other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collection` query when you need to:

- Manage collection publishing across sales channels
- Access collection metadata and SEO information
- Work with collection rules and product relationships

A collection can be either a custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection))
collection where products are manually added, or a smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections))
collection where products are automatically included based on defined rules. Each collection has associated metadata including
title, description, handle, image, and [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).

## Arguments

- **`id`**: `ID!` — The ID of the `Collection` to return.

## Return Type Fields

- `activeOperations`: `CollectionOperations!` — Collection duplicate operations involving this collection, either as a source (copying products from this collection to another) or a target (copying products to this collection from another).
- `availablePublicationsCount`: `Count` — The number of
- `description`: `String!` — A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description.
- `descriptionHtml`: `HTML!` — The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `feedback`: `ResourceFeedback` — Information about the collection that's provided through resource feedback.
- `handle`: `String!` — A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.
- `hasProduct`: `Boolean!` — Whether the collection includes the specified product.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated with the collection.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `products`: `ProductConnection!` — The products that are included in the collection.
- `productsCount`: `Count` — The number of products in the collection.
- `publishedOnPublication`: `Boolean!` — Whether the resource is published to a specified
- `resourcePublications`: `ResourcePublicationConnection!` — The list of resources that are published to a
- `resourcePublicationsCount`: `Count` — The number of
- `resourcePublicationsV2`: `ResourcePublicationV2Connection!` — The list of resources that are either published or staged to be published to a
- `ruleSet`: `CollectionRuleSet` — For a smart (automated) collection, specifies the rules that determine whether a product is included.
- `seo`: `SEO!` — If the default SEO fields for page title and description have been modified, contains the modified information.
- `sortOrder`: `CollectionSortOrder!` — The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store.
- `templateSuffix`: `String` — The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template.
- `title`: `String!` — The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `unpublishedPublications`: `PublicationConnection!` — The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified.

## Related Types

- [Collection](../types/objects/Collection.md)
- [CollectionOperations](../types/objects/CollectionOperations.md)
- [CollectionRuleSet](../types/objects/CollectionRuleSet.md)
- [CollectionSortOrder](../types/enums/CollectionSortOrder.md)
- [Count](../types/objects/Count.md)
- [Image](../types/objects/Image.md)
- [Metafield](../types/objects/Metafield.md)
- [ResourceFeedback](../types/objects/ResourceFeedback.md)
- [SEO](../types/objects/SEO.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query Collection($id: ID!) {
  collection(id: $id) {
    description
    descriptionHtml
    handle
    hasProduct
  }
}
```
