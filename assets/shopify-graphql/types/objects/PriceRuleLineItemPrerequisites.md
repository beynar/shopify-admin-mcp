# Object: `PriceRuleLineItemPrerequisites`

Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

## Fields

- `collections` `(first, after, last, before, reverse)`: `CollectionConnection!` — The collections required for the price rule to be applicable.
- `productVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — The product variants required for the price rule to be applicable.
- `products` `(first, after, last, before, reverse)`: `ProductConnection!` — The products required for the price rule to be applicable.
