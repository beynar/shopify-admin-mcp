# Object: `RefundShippingLine`

A shipping line item that's included in a refund.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `shippingLine`: `ShippingLine!` — The `ShippingLine` resource associated to the refunded shipping line item.
- `subtotalAmountSet`: `MoneyBag!` — The subtotal amount of the refund shipping line in shop and presentment currencies.
- `taxAmountSet`: `MoneyBag!` — The tax amount of the refund shipping line in shop and presentment currencies.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [ShippingLine](../../types/objects/ShippingLine.md)
