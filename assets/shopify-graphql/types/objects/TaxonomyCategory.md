# Object: `TaxonomyCategory`

A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.

Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.

**Implements:** `Node`

## Fields

- `ancestorIds`: `[ID!]!` — The IDs of the category's ancestor categories.
- `attributes` `(first, after, last, before)`: `TaxonomyCategoryAttributeConnection!` — The attributes of the taxonomy category.
- `childrenIds`: `[ID!]!` — The IDs of the category's child categories.
- `fullName`: `String!` — The full name of the taxonomy category. For example, Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds.
- `id`: `ID!` — The globally-unique ID of the TaxonomyCategory.
- `isArchived`: `Boolean!` — Whether the category is archived. The default value is `false`.
- `isLeaf`: `Boolean!` — Whether the category is a leaf category. A leaf category doesn't have any subcategories beneath it. For example, in Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Treadmills, Dog Treadmills is a leaf category. The value is `true` when there are no `childrenIds` specified.
- `isRoot`: `Boolean!` — Whether the category is a root category. A root category is at the top level of the category hierarchy and doesn't have a parent category. For example, Animals & Pet Supplies. The value is `true` when there's no `parentId` specified.
- `level`: `Int!` — The level of the category in the taxonomy tree. Levels indicate the depth of the category from the root. For example, in Animals & Pet Supplies > Pet Supplies > Dog Supplies, Animals & Pet Supplies is at level 1, Animals & Pet Supplies > Pet Supplies is at level 2, and Animals & Pet Supplies > Pet Supplies > Dog Supplies is at level 3.
- `name`: `String!` — The name of the taxonomy category. For example, Dog Beds.
- `parentId`: `ID` — The ID of the category's parent category.
