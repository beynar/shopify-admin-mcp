# Enum: `DiscountApplicationTargetSelection`

The lines on the order to which the discount is applied, of the type defined by
the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
`LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.

## Values

- `ALL` — The discount is allocated onto all the lines.
- `ENTITLED` — The discount is allocated onto only the lines that it's entitled for.
- `EXPLICIT` — The discount is allocated onto explicitly chosen lines.
