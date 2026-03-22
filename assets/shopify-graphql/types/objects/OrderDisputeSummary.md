# Object: `OrderDisputeSummary`

A summary of the important details for a dispute on an order.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `initiatedAs`: `DisputeType!` — The type that the dispute was initiated as.
- `status`: `DisputeStatus!` — The current status of the dispute.

## Related Types

- [DisputeStatus](../../types/enums/DisputeStatus.md)
- [DisputeType](../../types/enums/DisputeType.md)
