# Input Object: `ShopifyPaymentsDisputeEvidenceUpdateInput`

The input fields required to update a dispute evidence object.

## Input Fields

- `customerEmailAddress`: `String` — Customer email address.
- `customerLastName`: `String` — Customer last name.
- `customerFirstName`: `String` — Customer first name.
- `shippingAddress`: `MailingAddressInput` — The shipping address associated with the dispute evidence.
- `uncategorizedText`: `String` — Uncategorized text.
- `accessActivityLog`: `String` — Activity logs.
- `cancellationPolicyDisclosure`: `String` — Cancellation policy disclosure.
- `cancellationRebuttal`: `String` — Cancellation rebuttal.
- `refundPolicyDisclosure`: `String` — Refund policy disclosure.
- `refundRefusalExplanation`: `String` — Refund refusal explanation.
- `cancellationPolicyFile`: `ShopifyPaymentsDisputeFileUploadUpdateInput` — Cancellation policy file.
- `customerCommunicationFile`: `ShopifyPaymentsDisputeFileUploadUpdateInput` — Customer communication file.
- `refundPolicyFile`: `ShopifyPaymentsDisputeFileUploadUpdateInput` — Refund policy file.
- `shippingDocumentationFile`: `ShopifyPaymentsDisputeFileUploadUpdateInput` — Shipping documentation file.
- `uncategorizedFile`: `ShopifyPaymentsDisputeFileUploadUpdateInput` — Uncategorized file.
- `serviceDocumentationFile`: `ShopifyPaymentsDisputeFileUploadUpdateInput` — Service documentation file.
- `submitEvidence`: `Boolean` = `false` — Whether to submit the evidence.

## Related Types

- [MailingAddressInput](../../types/inputs/MailingAddressInput.md)
- [ShopifyPaymentsDisputeFileUploadUpdateInput](../../types/inputs/ShopifyPaymentsDisputeFileUploadUpdateInput.md)
