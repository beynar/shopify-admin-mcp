# Object: `Taxonomy`

Represents Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) tree. Provides categories that you can filter by search criteria or hierarchical relationships.

You can search categories globally, retrieve children of a specific category, find siblings, or get descendants. When you specify no filter arguments, you get all top-level categories in the taxonomy.

## Fields

- `categories` `(search, childrenOf, siblingsOf, descendantsOf, first, after, last, before)`: `TaxonomyCategoryConnection!` — Returns the categories of the product taxonomy based on the arguments provided.
