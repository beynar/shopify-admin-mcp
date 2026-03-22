# Mutation: `reverseDeliveryShippingUpdate`

**Returns:** `ReverseDeliveryShippingUpdatePayload`

Updates a reverse delivery with associated external shipping information.

## Arguments

- **`reverseDeliveryId`**: `ID!` — The ID of the reverse delivery to update.
- **`trackingInput`**: `ReverseDeliveryTrackingInput` = `null` — The tracking information for the reverse delivery.
- **`labelInput`**: `ReverseDeliveryLabelInput` = `null` — The return label file information for the reverse delivery.
- **`notifyCustomer`**: `Boolean` = `true` — If `true` and an email address exists on the `ReverseFulfillmentOrder.order`, then the customer is notified with the updated delivery instructions.

## Payload Fields

- `reverseDelivery`: `ReverseDelivery` — The updated reverse delivery.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ReturnUserError](../types/objects/ReturnUserError.md)
- [ReverseDelivery](../types/objects/ReverseDelivery.md)
- [ReverseDeliveryLabelInput](../types/inputs/ReverseDeliveryLabelInput.md)
- [ReverseDeliveryShippingUpdatePayload](../types/objects/ReverseDeliveryShippingUpdatePayload.md)
- [ReverseDeliveryTrackingInput](../types/inputs/ReverseDeliveryTrackingInput.md)

## Example Mutation

```graphql
mutation ReverseDeliveryShippingUpdate($reverseDeliveryId: ID!, $trackingInput: ReverseDeliveryTrackingInput, $labelInput: ReverseDeliveryLabelInput, $notifyCustomer: Boolean) {
  reverseDeliveryShippingUpdate(reverseDeliveryId: $reverseDeliveryId, trackingInput: $trackingInput, labelInput: $labelInput, notifyCustomer: $notifyCustomer) {
    reverseDelivery {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
