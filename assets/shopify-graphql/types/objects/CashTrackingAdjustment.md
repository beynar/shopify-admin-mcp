# Object: `CashTrackingAdjustment`

Tracks an adjustment to the cash in a cash tracking session for a point of sale device over the course of a shift.

**Implements:** `Node`

## Fields

- `cash`: `MoneyV2!` — The amount of cash being added or removed.
- `id`: `ID!` — A globally-unique ID.
- `note`: `String` — The note entered when the adjustment was made.
- `staffMember`: `StaffMember!` — The staff member who made the adjustment.
- `time`: `DateTime!` — The time when the adjustment was made.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [StaffMember](../../types/objects/StaffMember.md)
