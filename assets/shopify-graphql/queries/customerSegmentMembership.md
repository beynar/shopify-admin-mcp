# Query: `customerSegmentMembership`

**Returns:** `SegmentMembershipResponse!`

Whether a member, which is a customer, belongs to a segment.

## Arguments

- **`segmentIds`**: `[ID!]!` — The segments to evaluate for the given customer.
- **`customerId`**: `ID!` — The ID of the customer that has the membership.

## Return Type Fields

- `memberships`: `[SegmentMembership!]!` — The membership status for the given list of segments.

## Related Types

- [SegmentMembership](../types/objects/SegmentMembership.md)
- [SegmentMembershipResponse](../types/objects/SegmentMembershipResponse.md)

## Example Query

```graphql
query CustomerSegmentMembership($segmentIds: [ID!]!, $customerId: ID!) {
  customerSegmentMembership(segmentIds: $segmentIds, customerId: $customerId) {
  }
}
```
