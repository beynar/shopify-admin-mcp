# Enum: `OrderDisplayFulfillmentStatus`

Represents the order's aggregated fulfillment status for display purposes.

## Values

- `UNFULFILLED` — Displayed as **Unfulfilled**. None of the items in the order have been fulfilled.
- `PARTIALLY_FULFILLED` — Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled.
- `FULFILLED` — Displayed as **Fulfilled**. All the items in the order have been fulfilled.
- `RESTOCKED` — Displayed as **Restocked**. All the items in the order have been restocked. Replaced by the "UNFULFILLED" status.
- `PENDING_FULFILLMENT` — Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by the "IN_PROGRESS" status.
- `OPEN` — Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status.
- `IN_PROGRESS` — Displayed as **In progress**. All of the items in the order have had a request for fulfillment sent to the fulfillment service or all of the items have been marked as in progress.
- `ON_HOLD` — Displayed as **On hold**. All of the unfulfilled items in this order are on hold.
- `SCHEDULED` — Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time.
- `REQUEST_DECLINED` — Displayed as **Request declined**. Some of the items in the order have been rejected for fulfillment by the fulfillment service.
