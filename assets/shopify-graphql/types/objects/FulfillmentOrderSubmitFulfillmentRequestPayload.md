# Object: `FulfillmentOrderSubmitFulfillmentRequestPayload`

Return type for `fulfillmentOrderSubmitFulfillmentRequest` mutation.

## Fields

- `originalFulfillmentOrder`: `FulfillmentOrder` — The original fulfillment order intended to request fulfillment for.
- `submittedFulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was submitted to the fulfillment service. This will be the same as
- `unsubmittedFulfillmentOrder`: `FulfillmentOrder` — This field will only be present for partial fulfillment requests. This will represent the new
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../../types/objects/FulfillmentOrder.md)
- [UserError](../../types/objects/UserError.md)
