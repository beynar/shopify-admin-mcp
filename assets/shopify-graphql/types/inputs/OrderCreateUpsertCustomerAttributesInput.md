# Input Object: `OrderCreateUpsertCustomerAttributesInput`

The input fields for creating a new customer object or identifying an existing customer to update & associate with the order.

## Input Fields

- `addresses`: `[OrderCreateCustomerAddressInput!]` — A list of addresses to associate with the customer.
- `email`: `String` — The email address to update the customer with. If no `id` is provided, this is used to uniquely identify
- `firstName`: `String` — The first name of the customer.
- `id`: `ID` — The id of the customer to associate to the order.
- `lastName`: `String` — The last name of the customer.
- `multipassIdentifier`: `String` — A unique identifier for the customer that's used with [Multipass login](https://shopify.dev/api/multipass).
- `note`: `String` — A note about the customer.
- `phone`: `String` — The unique phone number ([E.164 format](https://en.wikipedia.org/wiki/E.164)) for this customer.
- `tags`: `[String!]` — Tags that the shop owner has attached to the customer. A customer can have up to 250 tags. Each tag can have up to 255 characters.
- `taxExempt`: `Boolean` — Whether the customer is exempt from paying taxes on their order. If `true`, then taxes won't be applied to an order at checkout. If `false`, then taxes will be applied at checkout.

## Related Types

- [OrderCreateCustomerAddressInput](../../types/inputs/OrderCreateCustomerAddressInput.md)
