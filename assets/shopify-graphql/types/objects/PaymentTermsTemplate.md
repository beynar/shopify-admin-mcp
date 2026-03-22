# Object: `PaymentTermsTemplate`

Represents the payment terms template object.

**Implements:** `Node`

## Fields

- `description`: `String!` — The description of the payment terms template.
- `dueInDays`: `Int` — The number of days between the issued date and due date if this is the net type of payment terms.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the payment terms template.
- `paymentTermsType`: `PaymentTermsType!` — The type of the payment terms template.
- `translatedName`: `String!` — The translated payment terms template name.

## Related Types

- [PaymentTermsType](../../types/enums/PaymentTermsType.md)
