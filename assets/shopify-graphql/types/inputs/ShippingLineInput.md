# Input Object: `ShippingLineInput`

The input fields for specifying the shipping details for the draft order.

> Note:
> A custom shipping line includes a title and price with `shippingRateHandle` set to `nil`. A shipping line with a carrier-provided shipping rate (currently set via the Shopify admin) includes the shipping rate handle.

## Input Fields

- `priceWithCurrency`: `MoneyInput` — Price of the shipping rate with currency. If provided, `price` will be ignored.
- `shippingRateHandle`: `String` — A unique identifier for the shipping rate.
- `title`: `String` — Title of the shipping rate.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
