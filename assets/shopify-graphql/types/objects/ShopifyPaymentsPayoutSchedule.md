# Object: `ShopifyPaymentsPayoutSchedule`

The payment schedule for a payments account.

## Fields

- `interval`: `ShopifyPaymentsPayoutInterval!` — The interval at which payouts are sent to the connected bank account.
- `monthlyAnchor`: `Int` — The day of the month funds will be paid out.
- `weeklyAnchor`: `DayOfTheWeek` — The day of the week funds will be paid out.

## Related Types

- [DayOfTheWeek](../../types/enums/DayOfTheWeek.md)
- [ShopifyPaymentsPayoutInterval](../../types/enums/ShopifyPaymentsPayoutInterval.md)
