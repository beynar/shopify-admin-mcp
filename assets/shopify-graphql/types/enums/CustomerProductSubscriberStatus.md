# Enum: `CustomerProductSubscriberStatus`

The possible product subscription states for a customer, as defined by the customer's subscription contracts.

## Values

- `ACTIVE` — The customer has at least one active subscription contract.
- `CANCELLED` — The customer's last subscription contract was cancelled and there are no other active or paused
- `EXPIRED` — The customer's last subscription contract expired and there are no other active or paused
- `FAILED` — The customer's last subscription contract failed and there are no other active or paused
- `NEVER_SUBSCRIBED` — The customer has never had a subscription contract.
- `PAUSED` — The customer has at least one paused subscription contract and there are no other active
