# Mutation: `fulfillmentTrackingInfoUpdateV2`

**Returns:** `FulfillmentTrackingInfoUpdateV2Payload`

Updates tracking information for a fulfillment.

## Arguments

- **`fulfillmentId`**: `ID!` — The ID of the fulfillment.
- **`trackingInfoInput`**: `FulfillmentTrackingInput!` — The tracking input for the mutation, including tracking URL, number, and company.
- **`notifyCustomer`**: `Boolean` — Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

## Payload Fields

- `fulfillment`: `Fulfillment` — The updated fulfillment with tracking information.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Fulfillment](../types/objects/Fulfillment.md)
- [FulfillmentTrackingInfoUpdateV2Payload](../types/objects/FulfillmentTrackingInfoUpdateV2Payload.md)
- [FulfillmentTrackingInput](../types/inputs/FulfillmentTrackingInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentTrackingInfoUpdateV2($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
  fulfillmentTrackingInfoUpdateV2(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
    fulfillment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
