# Input Object: `OrderInput`

The input fields for specifying the information to be updated on an order when using the orderUpdate mutation.

## Input Fields

- `id`: `ID!` — The ID of the order to update.
- `email`: `String` — A new customer email address for the order. Overwrites the existing email address.
- `phone`: `String` — A new customer phone number for the order. Overwrites the existing phone number.
- `note`: `String` — The new contents for the note associated with the order. Overwrites the existing note.
- `tags`: `[String!]` — A new list of tags for the order. Overwrites the existing tags.
- `shippingAddress`: `MailingAddressInput` — The new shipping address for the order. Overwrites the existing shipping address.
- `customAttributes`: `[AttributeInput!]` — A new list of custom attributes for the order. Overwrites the existing custom attributes.
- `metafields`: `[MetafieldInput!]` — A list of new metafields to add to the existing metafields for the order.
- `localizedFields`: `[LocalizedFieldInput!]` — A list of new [localized fields](https://shopify.dev/api/admin-graphql/latest/objects/localizedfield) to add to the existing list of localized fields for the order.
- `poNumber`: `String` — The new purchase order number for the order.

## Related Types

- [AttributeInput](../../types/inputs/AttributeInput.md)
- [LocalizedFieldInput](../../types/inputs/LocalizedFieldInput.md)
- [MailingAddressInput](../../types/inputs/MailingAddressInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
