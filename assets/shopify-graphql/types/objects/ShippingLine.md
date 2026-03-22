# Object: `ShippingLine`

The shipping method that customers select for an order. Includes pricing details, carrier information, and any applied discounts or taxes.

## Fields

- `carrierIdentifier`: `String` — A reference to the carrier service that provided the rate.
- `code`: `String` — A reference to the shipping method.
- `currentDiscountedPriceSet`: `MoneyBag!` — The current shipping price after applying refunds, after applying discounts. If the parent `order.taxesIncluded`` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.
- `custom`: `Boolean!` — Whether the shipping line is custom or not.
- `deliveryCategory`: `String` — The general classification of the delivery method.
- `discountAllocations`: `[DiscountAllocation!]!` — The discounts that have been allocated to the shipping line.
- `discountedPrice`: `MoneyV2!` *(deprecated)* — The pre-tax shipping price with discounts applied.
- `discountedPriceSet`: `MoneyBag!` — The shipping price after applying discounts. If the parent order.taxesIncluded field is true, then this price includes taxes. If not, it's the pre-tax price.
- `id`: `ID` — A globally-unique ID.
- `isRemoved`: `Boolean!` — Whether the shipping line has been removed.
- `originalPrice`: `MoneyV2!` *(deprecated)* — The shipping price without any discounts applied. If the parent order.taxesIncluded field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.
- `originalPriceSet`: `MoneyBag!` — The shipping price without any discounts applied. If the parent order.taxesIncluded field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.
- `phone`: `String` — The phone number at the shipping address.
- `price`: `Money!` *(deprecated)* — Returns the price of the shipping line.
- `requestedFulfillmentService`: `FulfillmentService` *(deprecated)* — The fulfillment service requested for the shipping method.
- `shippingRateHandle`: `String` — A unique identifier for the shipping rate. The format can change without notice and isn't meant to be shown to users.
- `source`: `String` — Returns the rate source for the shipping line.
- `taxLines`: `[TaxLine!]!` — The TaxLine objects connected to this shipping line.
- `title`: `String!` — Returns the title of the shipping line.

## Related Types

- [DiscountAllocation](../../types/objects/DiscountAllocation.md)
- [FulfillmentService](../../types/objects/FulfillmentService.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [TaxLine](../../types/objects/TaxLine.md)
