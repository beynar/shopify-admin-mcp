# Object: `FulfillmentOrderLineItemFinancialSummary`

The financial details of a fulfillment order line item.

## Fields

- `approximateDiscountedUnitPriceSet`: `MoneyBag!` — The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order.For the full picture of applied discounts, see discountAllocations.
- `discountAllocations`: `[FinancialSummaryDiscountAllocation!]!` — The discounts that have been allocated onto the line item by discount applications, not including order edits and refunds.
- `originalUnitPriceSet`: `MoneyBag!` — The variant unit price without discounts applied, in shop and presentment currencies.
- `quantity`: `Int!` — Number of line items that this financial summary applies to.

## Related Types

- [FinancialSummaryDiscountAllocation](../../types/objects/FinancialSummaryDiscountAllocation.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
