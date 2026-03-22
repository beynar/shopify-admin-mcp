# Mutation: `disputeEvidenceUpdate`

**Returns:** `DisputeEvidenceUpdatePayload`

Updates a dispute evidence.

## Arguments

- **`id`**: `ID!` — The ID of the dispute evidence to be updated.
- **`input`**: `ShopifyPaymentsDisputeEvidenceUpdateInput!` — The updated properties for a dispute evidence.

## Payload Fields

- `disputeEvidence`: `ShopifyPaymentsDisputeEvidence` — The updated dispute evidence.
- `userErrors`: `[DisputeEvidenceUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DisputeEvidenceUpdatePayload](../types/objects/DisputeEvidenceUpdatePayload.md)
- [DisputeEvidenceUpdateUserError](../types/objects/DisputeEvidenceUpdateUserError.md)
- [ShopifyPaymentsDisputeEvidence](../types/objects/ShopifyPaymentsDisputeEvidence.md)
- [ShopifyPaymentsDisputeEvidenceUpdateInput](../types/inputs/ShopifyPaymentsDisputeEvidenceUpdateInput.md)

## Example Mutation

```graphql
mutation DisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
  disputeEvidenceUpdate(id: $id, input: $input) {
    disputeEvidence {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
