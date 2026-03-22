# Input Object: `CustomerSetInput`

The input fields and values to use when creating or updating a customer.

## Input Fields

- `addresses`: `[MailingAddressInput!]` — The addresses for a customer.
- `email`: `String` — The unique email address of the customer.
- `firstName`: `String` — The customer's first name.
- `lastName`: `String` — The customer's last name.
- `locale`: `String` — The customer's locale.
- `note`: `String` — A note about the customer.
- `phone`: `String` — The unique phone number for the customer.
- `tags`: `[String!]` — A list of tags to associate with the customer. Can be an array or a comma-separated list. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`
- `taxExempt`: `Boolean` — Whether the customer is exempt from paying taxes on their order.
- `taxExemptions`: `[TaxExemption!]` — The list of tax exemptions to apply to the customer.

## Related Types

- [MailingAddressInput](../../types/inputs/MailingAddressInput.md)
- [TaxExemption](../../types/enums/TaxExemption.md)
