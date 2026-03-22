# Query: `paymentTermsTemplates`

**Returns:** `[PaymentTermsTemplate!]!`

The list of payment terms templates eligible for all shops and users.

## Arguments

- **`paymentTermsType`**: `PaymentTermsType` — The payment terms type to filter the payment terms templates list.

## Return Type Fields

- `description`: `String!` — The description of the payment terms template.
- `dueInDays`: `Int` — The number of days between the issued date and due date if this is the net type of payment terms.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the payment terms template.
- `paymentTermsType`: `PaymentTermsType!` — The type of the payment terms template.
- `translatedName`: `String!` — The translated payment terms template name.

## Related Types

- [PaymentTermsTemplate](../types/objects/PaymentTermsTemplate.md)
- [PaymentTermsType](../types/enums/PaymentTermsType.md)

## Example Query

```graphql
query PaymentTermsTemplates($paymentTermsType: PaymentTermsType) {
  paymentTermsTemplates(paymentTermsType: $paymentTermsType) {
    description
    dueInDays
    name
    translatedName
  }
}
```
