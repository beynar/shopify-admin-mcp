# Object: `ShopPayPaymentRequest`

Represents a Shop Pay payment request.

## Fields

- `discounts`: `[ShopPayPaymentRequestDiscount!]` — The discounts for the payment request order.
- `lineItems`: `[ShopPayPaymentRequestLineItem!]!` — The line items for the payment request.
- `presentmentCurrency`: `CurrencyCode!` — The presentment currency for the payment request.
- `selectedDeliveryMethodType`: `ShopPayPaymentRequestDeliveryMethodType!` — The delivery method type for the payment request.
- `shippingAddress`: `ShopPayPaymentRequestContactField` — The shipping address for the payment request.
- `shippingLines`: `[ShopPayPaymentRequestShippingLine!]!` — The shipping lines for the payment request.
- `subtotal`: `MoneyV2!` — The subtotal amount for the payment request.
- `total`: `MoneyV2!` — The total amount for the payment request.
- `totalShippingPrice`: `ShopPayPaymentRequestTotalShippingPrice` — The total shipping price for the payment request.
- `totalTax`: `MoneyV2` — The total tax for the payment request.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [ShopPayPaymentRequestContactField](../../types/objects/ShopPayPaymentRequestContactField.md)
- [ShopPayPaymentRequestDeliveryMethodType](../../types/enums/ShopPayPaymentRequestDeliveryMethodType.md)
- [ShopPayPaymentRequestDiscount](../../types/objects/ShopPayPaymentRequestDiscount.md)
- [ShopPayPaymentRequestLineItem](../../types/objects/ShopPayPaymentRequestLineItem.md)
- [ShopPayPaymentRequestShippingLine](../../types/objects/ShopPayPaymentRequestShippingLine.md)
- [ShopPayPaymentRequestTotalShippingPrice](../../types/objects/ShopPayPaymentRequestTotalShippingPrice.md)
