# Object: `FulfillmentOrderMerchantRequest`

A request made by the merchant or an order management app to a fulfillment service
for a fulfillment order.

**Implements:** `Node`

## Fields

- `fulfillmentOrder`: `FulfillmentOrder!` — The fulfillment order associated with the merchant request.
- `id`: `ID!` — A globally-unique ID.
- `kind`: `FulfillmentOrderMerchantRequestKind!` — The kind of request made.
- `message`: `String` — The optional message that the merchant included in the request.
- `requestOptions`: `JSON` — Additional options requested by the merchant. These depend on the `kind` of the request.
- `responseData`: `JSON` — The response from the fulfillment service.
- `sentAt`: `DateTime!` — The timestamp when the request was made.

## Related Types

- [FulfillmentOrder](../../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderMerchantRequestKind](../../types/enums/FulfillmentOrderMerchantRequestKind.md)
