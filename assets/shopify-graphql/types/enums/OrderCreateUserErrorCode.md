# Enum: `OrderCreateUserErrorCode`

Possible error codes that can be returned by `OrderCreateUserError`.

## Values

- `INVALID` — The input value is invalid.
- `FULFILLMENT_SERVICE_INVALID` — Indicates that the line item fulfillment service handle is invalid.
- `INVENTORY_CLAIM_FAILED` — Indicates that the inventory claim failed during order creation.
- `PROCESSED_AT_INVALID` — Indicates that the processed_at field is invalid, such as when it references a future date.
- `TAX_LINE_RATE_MISSING` — Indicates that the tax line rate is missing - only enforced for LineItem or ShippingLine-level tax lines.
- `REDUNDANT_CUSTOMER_FIELDS` — Indicates that both customer_id and customer were provided - only one is permitted.
- `SHOP_DORMANT` — Indicates that the shop is dormant and cannot create orders.
