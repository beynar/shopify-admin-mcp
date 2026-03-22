# Object: `DiscountAllocation`

The actual amount discounted on a line item or shipping line. While [`DiscountApplication`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication) captures the discount's intentions and rules, The `DiscountAllocation` object shows the final calculated discount amount applied to each line.

The allocation includes the discounted amount in both shop and presentment currencies, with a reference to the originating discount application.

## Fields

- `allocatedAmount`: `MoneyV2!` *(deprecated)* — The money amount that's allocated to a line based on the associated discount application.
- `allocatedAmountSet`: `MoneyBag!` — The money amount that's allocated to a line based on the associated discount application in shop and presentment currencies.
- `discountApplication`: `DiscountApplication!` — The discount application that the allocated amount originated from.

## Related Types

- [DiscountApplication](../../types/interfaces/DiscountApplication.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
