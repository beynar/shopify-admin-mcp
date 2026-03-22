# Object: `PaymentMandateResource`

A payment mandate with resource information, representing the permission
the owner of the payment instrument gives to the merchant to debit it
for specific resources (e.g., Order, Subscriptions).

## Fields

- `resourceId`: `ID` — The ID of the resource that this payment method was created for.
- `resourceType`: `MandateResourceType` — The resource type that this payment method was created for (e.g., Order, Subscriptions).

## Related Types

- [MandateResourceType](../../types/enums/MandateResourceType.md)
