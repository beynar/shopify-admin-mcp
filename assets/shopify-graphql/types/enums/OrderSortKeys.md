# Enum: `OrderSortKeys`

The set of valid sort keys for the Order query.

## Values

- `CREATED_AT` — Sorts by the date and time the order was created.
- `CURRENT_TOTAL_PRICE` — Sorts by the current total price of an order in the shop currency, including any returns/refunds/removals.
- `CUSTOMER_NAME` — Sorts by the customer's name.
- `DESTINATION` — Sort by shipping address to analyze regional sales patterns or plan logistics.
- `FINANCIAL_STATUS` — Sorts by the financial status of the order.
- `FULFILLMENT_STATUS` — Sorts by the order's fulfillment status.
- `ID` — Sort by the `id` value.
- `ORDER_NUMBER` — Sorts by the order number.
- `PO_NUMBER` — Sort by the purchase order number to match external procurement systems or track recent orders.
- `PROCESSED_AT` — Sorts by the date and time the order was processed.
- `RELEVANCE` — Sort by relevance to the search terms when the `query` parameter is specified on the connection.
- `TOTAL_ITEMS_QUANTITY` — Sort by the total quantity of all line items to identify large purchases or analyze inventory demand patterns.
- `TOTAL_PRICE` — Sorts by the total sold price of an order in the shop currency, excluding any returns/refunds/removals.
- `UPDATED_AT` — Sorts by the date and time the order was last updated.
