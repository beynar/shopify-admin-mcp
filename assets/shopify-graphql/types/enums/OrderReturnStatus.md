# Enum: `OrderReturnStatus`

The order's aggregated return status that's used for display purposes.
An order might have multiple returns, so this field communicates the prioritized return status.
The `OrderReturnStatus` enum is a supported filter parameter in the [`orders` query](https://shopify.dev/api/admin-graphql/latest/queries/orders#:~:text=reference_location_id-,return_status,-risk_level).

## Values

- `IN_PROGRESS` — Some items in the order are being returned.
- `INSPECTION_COMPLETE` — All return shipments from a return in this order were inspected.
- `NO_RETURN` — No items in the order were returned.
- `RETURNED` — Some items in the order were returned.
- `RETURN_FAILED` — Some returns in the order were not completed successfully.
- `RETURN_REQUESTED` — A return was requested for some items in the order.
