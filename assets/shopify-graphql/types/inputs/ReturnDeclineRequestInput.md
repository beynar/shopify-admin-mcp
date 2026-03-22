# Input Object: `ReturnDeclineRequestInput`

The input fields for declining a customer's return request.

## Input Fields

- `id`: `ID!` — The ID of the return that's being declined.
- `declineReason`: `ReturnDeclineReason!` — The reason why the merchant declined the customer's return request.
- `notifyCustomer`: `Boolean` = `false` — Notify the customer when a return request is declined.
- `declineNote`: `String` — The notification message that's sent to a customer about their declined return request.

## Related Types

- [ReturnDeclineReason](../../types/enums/ReturnDeclineReason.md)
