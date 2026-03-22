# Enum: `CollectionRuleColumn`

Specifies the attribute of a product being used to populate the smart collection.

## Values

- `TAG` — The [`tag`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.tags) attribute.
- `TITLE` — The [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.title) attribute.
- `TYPE` — The [`type`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.productType) attribute.
- `PRODUCT_TAXONOMY_NODE_ID` — The [`product_taxonomy_node_id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.productCategory) attribute.
- `PRODUCT_CATEGORY_ID` — This rule type is designed to dynamically include products in a smart collection based on their category id.
- `PRODUCT_CATEGORY_ID_WITH_DESCENDANTS` — This rule type is designed to dynamically include products in a smart collection based on their category id.
- `VENDOR` — The [`vendor`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.vendor) attribute.
- `VARIANT_PRICE` — The [`variant_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.price) attribute.
- `IS_PRICE_REDUCED` — An attribute evaluated based on the `compare_at_price` attribute of the product's variants.
- `VARIANT_COMPARE_AT_PRICE` — The [`variant_compare_at_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.compareAtPrice) attribute.
- `VARIANT_WEIGHT` — The [`variant_weight`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryItem.measurement.weight) attribute.
- `VARIANT_INVENTORY` — The [`variant_inventory`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryQuantity) attribute.
- `VARIANT_TITLE` — The [`variant_title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.title) attribute.
- `PRODUCT_METAFIELD_DEFINITION` — This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true.
- `VARIANT_METAFIELD_DEFINITION` — This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true.
