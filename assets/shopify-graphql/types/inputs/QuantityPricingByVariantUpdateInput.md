# Input Object: `QuantityPricingByVariantUpdateInput`

The input fields used to update quantity pricing.

## Input Fields

- `quantityPriceBreaksToAdd`: `[QuantityPriceBreakInput!]!` — A list of quantity price breaks to add.
- `quantityPriceBreaksToDelete`: `[ID!]!` — A list of quantity price break IDs that identify which quantity breaks to remove.
- `quantityPriceBreaksToDeleteByVariantId`: `[ID!]` — A list of product variant IDs that identify which quantity breaks to remove.
- `quantityRulesToAdd`: `[QuantityRuleInput!]!` — A list of quantity rules to add.
- `quantityRulesToDeleteByVariantId`: `[ID!]!` — A list of variant IDs that identify which quantity rules to remove.
- `pricesToAdd`: `[PriceListPriceInput!]!` — A list of fixed prices to add.
- `pricesToDeleteByVariantId`: `[ID!]!` — A list of variant IDs that identify which fixed prices to remove.

## Related Types

- [PriceListPriceInput](../../types/inputs/PriceListPriceInput.md)
- [QuantityPriceBreakInput](../../types/inputs/QuantityPriceBreakInput.md)
- [QuantityRuleInput](../../types/inputs/QuantityRuleInput.md)
