# Mutation: `abandonmentUpdateActivitiesDeliveryStatuses`

**Returns:** `AbandonmentUpdateActivitiesDeliveryStatusesPayload`

Updates the marketing activities delivery statuses for an abandonment.

## Arguments

- **`abandonmentId`**: `ID!` — The ID of the abandonment that needs to be updated.
- **`marketingActivityId`**: `ID!` — The ID of the marketing activity that needs to be updated.
- **`deliveryStatus`**: `AbandonmentDeliveryState!` — The new delivery status of the marketing activity for this abandonment.
- **`deliveredAt`**: `DateTime` — The delivery timestamp if the activity delivered.
- **`deliveryStatusChangeReason`**: `String` — The reason why the activity was or was not delivered.

## Payload Fields

- `abandonment`: `Abandonment` — The updated abandonment.
- `userErrors`: `[AbandonmentUpdateActivitiesDeliveryStatusesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Abandonment](../types/objects/Abandonment.md)
- [AbandonmentDeliveryState](../types/enums/AbandonmentDeliveryState.md)
- [AbandonmentUpdateActivitiesDeliveryStatusesPayload](../types/objects/AbandonmentUpdateActivitiesDeliveryStatusesPayload.md)
- [AbandonmentUpdateActivitiesDeliveryStatusesUserError](../types/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError.md)

## Example Mutation

```graphql
mutation AbandonmentUpdateActivitiesDeliveryStatuses($abandonmentId: ID!, $marketingActivityId: ID!, $deliveryStatus: AbandonmentDeliveryState!, $deliveredAt: DateTime, $deliveryStatusChangeReason: String) {
  abandonmentUpdateActivitiesDeliveryStatuses(abandonmentId: $abandonmentId, marketingActivityId: $marketingActivityId, deliveryStatus: $deliveryStatus, deliveredAt: $deliveredAt, deliveryStatusChangeReason: $deliveryStatusChangeReason) {
    abandonment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
