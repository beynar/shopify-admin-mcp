# Query: `cashTrackingSession`

**Returns:** `CashTrackingSession`

Returns a `CashTrackingSession` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `CashTrackingSession` to return.

## Return Type Fields

- `adjustments`: `CashTrackingAdjustmentConnection!` — The adjustments made to the cash drawer during this session.
- `cashTrackingEnabled`: `Boolean!` — Whether this session is tracking cash payments.
- `cashTransactions`: `OrderTransactionConnection!` — The cash transactions made during this session.
- `closingBalance`: `MoneyV2` — The counted cash balance when the session was closed.
- `closingNote`: `String` — The note entered when the session was closed.
- `closingStaffMember`: `StaffMember` — The user who closed the session.
- `closingTime`: `DateTime` — When the session was closed.
- `expectedBalance`: `MoneyV2!` — The expected balance at the end of the session or the expected current balance for sessions that are still open.
- `expectedClosingBalance`: `MoneyV2` — The amount that was expected to be in the cash drawer at the end of the session, calculated after the session was closed.
- `expectedOpeningBalance`: `MoneyV2` — The amount expected to be in the cash drawer based on the previous session.
- `id`: `ID!` — A globally-unique ID.
- `location`: `Location` — The location of the point of sale device during this session.
- `netCashSales`: `MoneyV2!` — The net cash sales made for the duration of this cash tracking session.
- `openingBalance`: `MoneyV2!` — The counted cash balance when the session was opened.
- `openingNote`: `String` — The note entered when the session was opened.
- `openingStaffMember`: `StaffMember` — The user who opened the session.
- `openingTime`: `DateTime!` — When the session was opened.
- `registerName`: `String!` — The register name for the point of sale device that this session is tracking cash for.
- `totalAdjustments`: `MoneyV2` — The sum of all adjustments made during the session, excluding the final adjustment.
- `totalCashRefunds`: `MoneyV2!` — The sum of all cash refunds for the duration of this cash tracking session.
- `totalCashSales`: `MoneyV2!` — The sum of all cash sales for the duration of this cash tracking session.
- `totalDiscrepancy`: `MoneyV2` — The total discrepancy for the session including starting and ending.

## Related Types

- [CashTrackingSession](../types/objects/CashTrackingSession.md)
- [Location](../types/objects/Location.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [StaffMember](../types/objects/StaffMember.md)

## Example Query

```graphql
query CashTrackingSession($id: ID!) {
  cashTrackingSession(id: $id) {
    cashTrackingEnabled
    closingNote
    closingTime
    openingNote
  }
}
```
