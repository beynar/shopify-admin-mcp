# Object: `DraftOrderPlatformDiscountAllocation`

Price reduction allocations across the draft order's lines.

## Fields

- `id`: `ID` — The ID of the allocation.
- `quantity`: `Int` — The quantity of the target being discounted.
- `reductionAmount`: `MoneyV2!` — Amount of the discount allocated to the target.
- `reductionAmountSet`: `MoneyBag!` — Amount of the discount allocated to the target in both shop currency and presentment currency.
- `target`: `DraftOrderPlatformDiscountAllocationTarget` — The element of the draft being discounted.

## Related Types

- [DraftOrderPlatformDiscountAllocationTarget](../../types/unions/DraftOrderPlatformDiscountAllocationTarget.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
