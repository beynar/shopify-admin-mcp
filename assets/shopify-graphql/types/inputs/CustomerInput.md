# Input Object: `CustomerInput`

The input fields and values to use when creating or updating a customer.

## Input Fields

- `email`: `String` — The unique email address of the customer.
- `firstName`: `String` — The customer's first name.
- `id`: `ID` — The ID of the customer to update.
- `lastName`: `String` — The customer's last name.
- `locale`: `String` — The customer's locale.
- `metafields`: `[MetafieldInput!]` — Additional metafields to associate to the customer.
- `note`: `String` — A note about the customer.
- `phone`: `String` — The unique phone number for the customer.
- `tags`: `[String!]` — A list of tags to associate with the customer. Can be an array or a comma-separated list. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`
- `emailMarketingConsent`: `CustomerEmailMarketingConsentInput` — Information that describes when the customer consented to receiving marketing
- `smsMarketingConsent`: `CustomerSmsMarketingConsentInput` — The marketing consent information when the customer consented to receiving marketing
- `taxExempt`: `Boolean` — Whether the customer is exempt from paying taxes on their order.
- `taxExemptions`: `[TaxExemption!]` — The list of tax exemptions to apply to the customer.
- `multipassIdentifier`: `String` — A unique identifier for the customer that's used with Multipass login.

## Related Types

- [CustomerEmailMarketingConsentInput](../../types/inputs/CustomerEmailMarketingConsentInput.md)
- [CustomerSmsMarketingConsentInput](../../types/inputs/CustomerSmsMarketingConsentInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [TaxExemption](../../types/enums/TaxExemption.md)
