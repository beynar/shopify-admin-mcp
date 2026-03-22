# Query: `disputeEvidence`

**Returns:** `ShopifyPaymentsDisputeEvidence`

Returns a `ShopifyPaymentsDisputeEvidence` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `ShopifyPaymentsDisputeEvidence` to return.

## Return Type Fields

- `accessActivityLog`: `String` — The activity logs associated with the dispute evidence.
- `billingAddress`: `MailingAddress` — The billing address that's provided by the customer.
- `cancellationPolicyDisclosure`: `String` — The cancellation policy disclosure associated with the dispute evidence.
- `cancellationPolicyFile`: `ShopifyPaymentsDisputeFileUpload` — The cancellation policy file associated with the dispute evidence.
- `cancellationRebuttal`: `String` — The cancellation rebuttal associated with the dispute evidence.
- `customerCommunicationFile`: `ShopifyPaymentsDisputeFileUpload` — The customer communication file associated with the dispute evidence.
- `customerEmailAddress`: `String` — The customer's email address.
- `customerFirstName`: `String` — The customer's first name.
- `customerLastName`: `String` — The customer's last name.
- `customerPurchaseIp`: `String` — The customer purchase ip for this dispute evidence.
- `dispute`: `ShopifyPaymentsDispute!` — The dispute associated with the evidence.
- `disputeFileUploads`: `[ShopifyPaymentsDisputeFileUpload!]!` — The file uploads associated with the dispute evidence.
- `fulfillments`: `[ShopifyPaymentsDisputeFulfillment!]!` — The fulfillments associated with the dispute evidence.
- `id`: `ID!` — A globally-unique ID.
- `productDescription`: `String` — The product description for this dispute evidence.
- `refundPolicyDisclosure`: `String` — The refund policy disclosure associated with the dispute evidence.
- `refundPolicyFile`: `ShopifyPaymentsDisputeFileUpload` — The refund policy file associated with the dispute evidence.
- `refundRefusalExplanation`: `String` — The refund refusal explanation associated with dispute evidence.
- `serviceDocumentationFile`: `ShopifyPaymentsDisputeFileUpload` — The service documentation file associated with the dispute evidence.
- `shippingAddress`: `MailingAddress` — The mailing address for shipping that's provided by the customer.
- `shippingDocumentationFile`: `ShopifyPaymentsDisputeFileUpload` — The shipping documentation file associated with the dispute evidence.
- `submitted`: `Boolean!` — Whether the dispute evidence is submitted.
- `uncategorizedFile`: `ShopifyPaymentsDisputeFileUpload` — The uncategorized file associated with the dispute evidence.
- `uncategorizedText`: `String` — The uncategorized text for the dispute evidence.

## Related Types

- [MailingAddress](../types/objects/MailingAddress.md)
- [ShopifyPaymentsDispute](../types/objects/ShopifyPaymentsDispute.md)
- [ShopifyPaymentsDisputeEvidence](../types/objects/ShopifyPaymentsDisputeEvidence.md)
- [ShopifyPaymentsDisputeFileUpload](../types/objects/ShopifyPaymentsDisputeFileUpload.md)
- [ShopifyPaymentsDisputeFulfillment](../types/objects/ShopifyPaymentsDisputeFulfillment.md)

## Example Query

```graphql
query DisputeEvidence($id: ID!) {
  disputeEvidence(id: $id) {
    id
    accessActivityLog
    cancellationPolicyDisclosure
    cancellationRebuttal
    customerEmailAddress
    customerFirstName
  }
}
```
