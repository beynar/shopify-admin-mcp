# Object: `PriceRuleItemEntitlements`

The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

## Fields

- `collections` `(first, after, last, before, reverse)`: `CollectionConnection!` — The collections to which the price rule applies.
- `productVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — The product variants to which the price rule applies.
- `products` `(first, after, last, before, reverse)`: `ProductConnection!` — The products to which the price rule applies.
- `targetAllLineItems`: `Boolean!` — Whether the price rule applies to all line items.
