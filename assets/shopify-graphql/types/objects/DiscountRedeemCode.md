# Object: `DiscountRedeemCode`

A code that a customer can use at checkout to receive a discount. For example, a customer can use the redeem code 'SUMMER20' at checkout to receive a 20% discount on their entire order.

## Fields

- `asyncUsageCount`: `Int!` — The number of times that the discount redeem code has been used. This value is updated asynchronously and can be different than the actual usage count.
- `code`: `String!` — The code that a customer can use at checkout to receive a discount.
- `createdBy`: `App` — The application that created the discount redeem code.
- `id`: `ID!` — A globally-unique ID of the discount redeem code.

## Related Types

- [App](../../types/objects/App.md)
