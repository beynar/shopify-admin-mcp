# Query: `dispute`

**Returns:** `ShopifyPaymentsDispute`

Returns a `ShopifyPaymentsDispute` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `ShopifyPaymentsDispute` to return.

## Return Type Fields

- `amount`: `MoneyV2!` — The total amount disputed by the cardholder.
- `disputeEvidence`: `ShopifyPaymentsDisputeEvidence!` — The evidence associated with the dispute.
- `evidenceDueBy`: `Date` — The deadline for evidence submission.
- `evidenceSentOn`: `Date` — The date when evidence was sent. Returns null if evidence hasn't yet been sent.
- `finalizedOn`: `Date` — The date when this dispute was resolved. Returns null if the dispute isn't yet resolved.
- `id`: `ID!` — A globally-unique ID.
- `initiatedAt`: `DateTime!` — The date when this dispute was initiated.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `order`: `Order` — The order that contains the charge that's under dispute.
- `reasonDetails`: `ShopifyPaymentsDisputeReasonDetails!` — The reason of the dispute.
- `status`: `DisputeStatus!` — The current state of the dispute.
- `type`: `DisputeType!` — Indicates if this dispute is still in the inquiry phase or has turned into a chargeback.

## Related Types

- [DisputeStatus](../types/enums/DisputeStatus.md)
- [DisputeType](../types/enums/DisputeType.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Order](../types/objects/Order.md)
- [ShopifyPaymentsDispute](../types/objects/ShopifyPaymentsDispute.md)
- [ShopifyPaymentsDisputeEvidence](../types/objects/ShopifyPaymentsDisputeEvidence.md)
- [ShopifyPaymentsDisputeReasonDetails](../types/objects/ShopifyPaymentsDisputeReasonDetails.md)

## Example Query

```graphql
query Dispute($id: ID!) {
  dispute(id: $id) {
    initiatedAt
    legacyResourceId
  }
}
```
