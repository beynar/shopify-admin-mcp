# Query: `taxonomy`

**Returns:** `Taxonomy`

Access to Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) for categorizing products. The [`Taxonomy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy) organizes products into a hierarchical tree structure with categories, attributes, and values.

Query categories using search terms, or navigate the hierarchy by requesting children, siblings, or descendants of specific categories. Each [`TaxonomyCategory`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory) includes its position in the tree, parent-child relationships, and associated attributes for that product category.

## Return Type Fields

- `categories`: `TaxonomyCategoryConnection!` — Returns the categories of the product taxonomy based on the arguments provided.

## Related Types

- [Taxonomy](../types/objects/Taxonomy.md)

## Example Query

```graphql
query {
  taxonomy {
  }
}
```
