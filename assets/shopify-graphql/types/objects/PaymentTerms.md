# Object: `PaymentTerms`

Payment conditions for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), including when payment is due and how it's scheduled. Payment terms are created from templates that specify net terms (payment due after a certain number of days) or fixed schedules with specific due dates. You can optionally provide custom payment schedules using [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).

Each payment term contains one or more [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule), which you can access through the [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules) field. Payment schedules contain detailed information for each payment installment.

Learn more about [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).

**Implements:** `Node`

## Fields

- `draftOrder`: `DraftOrder` — The draft order associated with the payment terms.
- `due`: `Boolean!` — Whether payment terms have a payment schedule that's due.
- `dueInDays`: `Int` — Duration of payment terms in days based on the payment terms template used to create the payment terms.
- `id`: `ID!` — A globally-unique ID.
- `order`: `Order` — The order associated with the payment terms.
- `overdue`: `Boolean!` — Whether the payment terms have overdue payment schedules.
- `paymentSchedules` `(first, after, last, before, reverse)`: `PaymentScheduleConnection!` — List of schedules for the payment terms.
- `paymentTermsName`: `String!` — The name of the payment terms template used to create the payment terms.
- `paymentTermsType`: `PaymentTermsType!` — The payment terms template type used to create the payment terms.
- `translatedName`: `String!` — The payment terms name, translated into the shop admin's preferred language.

## Related Types

- [DraftOrder](../../types/objects/DraftOrder.md)
- [Order](../../types/objects/Order.md)
- [PaymentTermsType](../../types/enums/PaymentTermsType.md)
