# Object: `ReturnAgreement`

An agreement between the merchant and customer for a return.

**Implements:** `SalesAgreement`

## Fields

- `app`: `App` — The application that created the agreement.
- `happenedAt`: `DateTime!` — The date and time at which the agreement occured.
- `id`: `ID!` — The unique ID for the agreement.
- `reason`: `OrderActionType!` — The reason the agremeent was created.
- `return`: `Return!` — The return associated with the agreement.
- `sales` `(first, after, last, before, reverse)`: `SaleConnection!` — The sales associated with the agreement.
- `user`: `StaffMember` — The staff member associated with the agreement.

## Related Types

- [App](../../types/objects/App.md)
- [OrderActionType](../../types/enums/OrderActionType.md)
- [Return](../../types/objects/Return.md)
- [StaffMember](../../types/objects/StaffMember.md)
