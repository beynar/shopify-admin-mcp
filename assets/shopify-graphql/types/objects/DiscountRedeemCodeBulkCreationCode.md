# Object: `DiscountRedeemCodeBulkCreationCode`

A result of a discount redeem code creation operation created by a bulk creation.

## Fields

- `code`: `String!` — The code to use in the discount redeem code creation operation.
- `discountRedeemCode`: `DiscountRedeemCode` — The successfully created discount redeem code.
- `errors`: `[DiscountUserError!]!` — A list of errors that occurred during the creation operation of the discount redeem code.

## Related Types

- [DiscountRedeemCode](../../types/objects/DiscountRedeemCode.md)
- [DiscountUserError](../../types/objects/DiscountUserError.md)
