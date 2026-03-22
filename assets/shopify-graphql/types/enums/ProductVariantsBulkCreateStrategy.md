# Enum: `ProductVariantsBulkCreateStrategy`

The set of strategies available for use on the `productVariantsBulkCreate` mutation.

## Values

- `DEFAULT` — The default strategy. Deletes the standalone default ("Default Title") variant when it's the only variant on the product. Preserves the standalone custom variant.
- `REMOVE_STANDALONE_VARIANT` — Deletes the existing standalone variant when the product has only a single default ("Default Title") or custom variant.
- `PRESERVE_STANDALONE_VARIANT` — Preserves the existing standalone variant when the product has only a single default ("Default Title") or a single custom variant.
