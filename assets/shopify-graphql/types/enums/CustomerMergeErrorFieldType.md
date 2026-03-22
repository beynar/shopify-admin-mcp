# Enum: `CustomerMergeErrorFieldType`

The types of the hard blockers preventing a customer from being merged to another customer.

## Values

- `DELETED_AT` — The customer does not exist.
- `REDACTED_AT` — The customer has a pending or completed redaction.
- `SUBSCRIPTIONS` — The customer has a subscription history.
- `MERGE_IN_PROGRESS` — The customer has a merge in progress.
- `GIFT_CARDS` — The customer has gift cards.
- `OVERRIDE_FIELDS` — The override fields are invalid.
- `STORE_CREDIT` — The customer has store credit.
- `COMPANY_CONTACT` — The customer is a company contact.
- `CUSTOMER_PAYMENT_METHODS` — The customer has payment methods.
- `PENDING_DATA_REQUEST` — The customer has a pending data request.
- `MULTIPASS_IDENTIFIER` — The customer has a multipass identifier.
