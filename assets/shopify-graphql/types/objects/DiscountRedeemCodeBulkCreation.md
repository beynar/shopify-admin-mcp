# Object: `DiscountRedeemCodeBulkCreation`

The properties and status of a bulk discount redeem code creation operation.

**Implements:** `Node`

## Fields

- `codes` `(first, after, last, before, reverse)`: `DiscountRedeemCodeBulkCreationCodeConnection!` — The result of each code creation operation associated with the bulk creation operation including any errors that might have occurred during the operation.
- `codesCount`: `Int!` — The number of codes to create.
- `createdAt`: `DateTime!` — The date and time when the bulk creation was created.
- `discountCode`: `DiscountCodeNode` — The code discount associated with the created codes.
- `done`: `Boolean!` — Whether the bulk creation is still queued (`false`) or has been run (`true`).
- `failedCount`: `Int!` — The number of codes that weren't created successfully.
- `id`: `ID!` — A globally-unique ID.
- `importedCount`: `Int!` — The number of codes created successfully.

## Related Types

- [DiscountCodeNode](../../types/objects/DiscountCodeNode.md)
