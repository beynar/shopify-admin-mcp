# Mutation: `combinedListingUpdate`

**Returns:** `CombinedListingUpdatePayload`

Add, remove and update `CombinedListing`s of a given Product.

`CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

1. Parent products
2. Child products

The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

The combined listing is the association of parent product to one or more child products.

Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

## Arguments

- **`parentProductId`**: `ID!` — The ID of the parent product.
- **`title`**: `String` — The updated title for the combined listing.
- **`productsAdded`**: `[ChildProductRelationInput!]` — The child products to add and their assigned options and option values.
- **`productsEdited`**: `[ChildProductRelationInput!]` — The child products to edit and their assigned options and option values.
- **`productsRemovedIds`**: `[ID!]` — The IDs of products to be removed from the combined listing.
- **`optionsAndValues`**: `[OptionAndValueInput!]` — The ordered options and values to be used by the combined listing. Options and values will be reordered to match the order specified here.

## Payload Fields

- `product`: `Product` — The parent product.
- `userErrors`: `[CombinedListingUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ChildProductRelationInput](../types/inputs/ChildProductRelationInput.md)
- [CombinedListingUpdatePayload](../types/objects/CombinedListingUpdatePayload.md)
- [CombinedListingUpdateUserError](../types/objects/CombinedListingUpdateUserError.md)
- [OptionAndValueInput](../types/inputs/OptionAndValueInput.md)
- [Product](../types/objects/Product.md)

## Example Mutation

```graphql
mutation CombinedListingUpdate($parentProductId: ID!, $title: String, $productsAdded: [ChildProductRelationInput!], $productsEdited: [ChildProductRelationInput!], $productsRemovedIds: [ID!], $optionsAndValues: [OptionAndValueInput!]) {
  combinedListingUpdate(parentProductId: $parentProductId, title: $title, productsAdded: $productsAdded, productsEdited: $productsEdited, productsRemovedIds: $productsRemovedIds, optionsAndValues: $optionsAndValues) {
    product {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
