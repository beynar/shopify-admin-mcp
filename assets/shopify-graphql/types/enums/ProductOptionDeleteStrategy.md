# Enum: `ProductOptionDeleteStrategy`

The set of strategies available for use on the `productOptionDelete` mutation.

## Values

- `DEFAULT` — The default strategy, the specified `Option` may only have one corresponding `value`.
- `POSITION` — An `Option` with multiple `values` can be deleted. Remaining variants will be deleted, highest `position` first, in the event of duplicates being detected.
- `NON_DESTRUCTIVE` — An `Option` with multiple `values` can be deleted, but the operation only succeeds if no product variants get deleted.
