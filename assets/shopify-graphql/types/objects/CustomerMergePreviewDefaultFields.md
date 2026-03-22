# Object: `CustomerMergePreviewDefaultFields`

The fields that will be kept as part of a customer merge preview.

## Fields

- `addresses` `(first, after, last, before, reverse)`: `MailingAddressConnection!` — The merged addresses resulting from a customer merge.
- `defaultAddress`: `MailingAddress` — The default address resulting from a customer merge.
- `discountNodeCount`: `UnsignedInt64!` — The total number of customer-specific discounts resulting from a customer merge.
- `discountNodes` `(first, after, last, before, reverse, sortKey)`: `DiscountNodeConnection!` — The merged customer-specific discounts resulting from a customer merge.
- `displayName`: `String!` — The full name of the customer, based on the values for `first_name` and `last_name`. If `first_name` and `last_name` aren't available, then this field falls back to the customer's email address. If the customer's email isn't available, then this field falls back to the customer's phone number.
- `draftOrderCount`: `UnsignedInt64!` — The total number of merged draft orders.
- `draftOrders` `(first, after, last, before, reverse, sortKey)`: `DraftOrderConnection!` — The merged draft orders resulting from a customer merge.
- `email`: `CustomerEmailAddress` — The email state of a customer.
- `firstName`: `String` — The first name resulting from a customer merge.
- `giftCardCount`: `UnsignedInt64!` — The total number of merged gift cards.
- `giftCards` `(first, after, last, before, reverse, sortKey)`: `GiftCardConnection!` — The merged gift cards resulting from a customer merge.
- `lastName`: `String` — The last name resulting from a customer merge.
- `metafieldCount`: `UnsignedInt64!` — The total number of merged metafields.
- `note`: `String` — The merged note resulting from a customer merge.
- `orderCount`: `UnsignedInt64!` — The total number of merged orders.
- `orders` `(first, after, last, before, reverse, sortKey)`: `OrderConnection!` — The merged orders resulting from a customer merge.
- `phoneNumber`: `CustomerPhoneNumber` — The phone number state of a customer.
- `tags`: `[String!]!` — The merged tags resulting from a customer merge.

## Related Types

- [CustomerEmailAddress](../../types/objects/CustomerEmailAddress.md)
- [CustomerPhoneNumber](../../types/objects/CustomerPhoneNumber.md)
- [DiscountSortKeys](../../types/enums/DiscountSortKeys.md)
- [DraftOrderSortKeys](../../types/enums/DraftOrderSortKeys.md)
- [GiftCardSortKeys](../../types/enums/GiftCardSortKeys.md)
- [MailingAddress](../../types/objects/MailingAddress.md)
- [OrderSortKeys](../../types/enums/OrderSortKeys.md)
