# Mutation: `reverseDeliveryCreateWithShipping`

**Returns:** `ReverseDeliveryCreateWithShippingPayload`

Creates a new reverse delivery with associated external shipping information.

## Arguments

- **`reverseFulfillmentOrderId`**: `ID!` — The ID of the reverse fulfillment order that's associated to the reverse delivery.
- **`reverseDeliveryLineItems`**: `[ReverseDeliveryLineItemInput!]!` — The reverse delivery line items to be created. If an empty array is provided, then this mutation           will create a reverse delivery line item for each reverse fulfillment order line item, with its quantity equal           to the reverse fulfillment order line item total quantity.
- **`trackingInput`**: `ReverseDeliveryTrackingInput` = `null` — The tracking information for the reverse delivery.
- **`labelInput`**: `ReverseDeliveryLabelInput` = `null` — The return label file information for the reverse delivery.
- **`notifyCustomer`**: `Boolean` = `true` — When `true` the customer is notified with delivery instructions if the `ReverseFulfillmentOrder.order.email` is present.

## Payload Fields

- `reverseDelivery`: `ReverseDelivery` — The created reverse delivery.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ReturnUserError](../types/objects/ReturnUserError.md)
- [ReverseDelivery](../types/objects/ReverseDelivery.md)
- [ReverseDeliveryCreateWithShippingPayload](../types/objects/ReverseDeliveryCreateWithShippingPayload.md)
- [ReverseDeliveryLabelInput](../types/inputs/ReverseDeliveryLabelInput.md)
- [ReverseDeliveryLineItemInput](../types/inputs/ReverseDeliveryLineItemInput.md)
- [ReverseDeliveryTrackingInput](../types/inputs/ReverseDeliveryTrackingInput.md)

## Example Mutation

```graphql
mutation ReverseDeliveryCreateWithShipping($reverseFulfillmentOrderId: ID!, $reverseDeliveryLineItems: [ReverseDeliveryLineItemInput!]!, $trackingInput: ReverseDeliveryTrackingInput, $labelInput: ReverseDeliveryLabelInput, $notifyCustomer: Boolean) {
  reverseDeliveryCreateWithShipping(reverseFulfillmentOrderId: $reverseFulfillmentOrderId, reverseDeliveryLineItems: $reverseDeliveryLineItems, trackingInput: $trackingInput, labelInput: $labelInput, notifyCustomer: $notifyCustomer) {
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
