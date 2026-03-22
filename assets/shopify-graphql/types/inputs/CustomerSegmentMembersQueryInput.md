# Input Object: `CustomerSegmentMembersQueryInput`

The input fields and values for creating a customer segment members query.

## Input Fields

- `segmentId`: `ID` — The ID of the segment.
- `query`: `String` — The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).
- `reverse`: `Boolean` = `false` — Reverse the order of the list. The sorting behaviour defaults to ascending order.
- `sortKey`: `String` — Sort the list by a given key.
