# Object: `CustomerSegmentMember`

The member of a segment.

**Implements:** `HasMetafields`

## Fields

- `amountSpent`: `MoneyV2` — The total amount of money that the member has spent on orders.
- `defaultAddress`: `MailingAddress` — The member's default address.
- `defaultEmailAddress`: `CustomerEmailAddress` — The member's default email address.
- `defaultPhoneNumber`: `CustomerPhoneNumber` — The member's default phone number.
- `displayName`: `String!` — The full name of the member, which is based on the values of the `first_name` and `last_name` fields. If the member's first name and last name aren't available, then the customer's email address is used. If the customer's email address isn't available, then the customer's phone number is used.
- `firstName`: `String` — The member's first name.
- `id`: `ID!` — The member’s ID.
- `lastName`: `String` — The member's last name.
- `lastOrderId`: `ID` — The ID of the member's most recent order.
- `mergeable`: `CustomerMergeable!` — Whether the customer can be merged with another customer.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `note`: `String` — A note about the member.
- `numberOfOrders`: `UnsignedInt64` — The total number of orders that the member has made.

## Related Types

- [CustomerEmailAddress](../../types/objects/CustomerEmailAddress.md)
- [CustomerMergeable](../../types/objects/CustomerMergeable.md)
- [CustomerPhoneNumber](../../types/objects/CustomerPhoneNumber.md)
- [MailingAddress](../../types/objects/MailingAddress.md)
- [Metafield](../../types/objects/Metafield.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
