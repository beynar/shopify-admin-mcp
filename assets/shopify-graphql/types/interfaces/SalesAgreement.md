# Interface: `SalesAgreement`

A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

## Fields

- `app`: `App` — The application that created the agreement.
- `happenedAt`: `DateTime!` — The date and time at which the agreement occured.
- `id`: `ID!` — The unique ID for the agreement.
- `reason`: `OrderActionType!` — The reason the agremeent was created.
- `sales` `(first, after, last, before, reverse)`: `SaleConnection!` — The sales associated with the agreement.
- `user`: `StaffMember` — The staff member associated with the agreement.

## Possible Types

- [OrderAgreement](../../types/objects/OrderAgreement.md)
- [OrderEditAgreement](../../types/objects/OrderEditAgreement.md)
- [RefundAgreement](../../types/objects/RefundAgreement.md)
- [ReturnAgreement](../../types/objects/ReturnAgreement.md)

## Related Types

- [App](../../types/objects/App.md)
- [OrderActionType](../../types/enums/OrderActionType.md)
- [StaffMember](../../types/objects/StaffMember.md)
