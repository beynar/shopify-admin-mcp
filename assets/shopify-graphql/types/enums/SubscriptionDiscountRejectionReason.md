# Enum: `SubscriptionDiscountRejectionReason`

The reason a discount on a subscription draft was rejected.

## Values

- `NOT_FOUND` — Discount code is not found.
- `NO_ENTITLED_LINE_ITEMS` — Discount does not apply to any of the given line items.
- `QUANTITY_NOT_IN_RANGE` — Quantity of items does not qualify for the discount.
- `PURCHASE_NOT_IN_RANGE` — Purchase amount of items does not qualify for the discount.
- `CUSTOMER_NOT_ELIGIBLE` — Given customer does not qualify for the discount.
- `USAGE_LIMIT_REACHED` — Discount usage limit has been reached.
- `CUSTOMER_USAGE_LIMIT_REACHED` — Customer usage limit has been reached.
- `CURRENTLY_INACTIVE` — Discount is inactive.
- `NO_ENTITLED_SHIPPING_LINES` — No applicable shipping lines.
- `INCOMPATIBLE_PURCHASE_TYPE` — Purchase type does not qualify for the discount.
- `INTERNAL_ERROR` — Internal error during discount code validation.
