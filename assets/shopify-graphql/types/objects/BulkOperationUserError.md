# Object: `BulkOperationUserError`

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

**Implements:** `DisplayableError`

## Fields

- `code`: `BulkOperationUserErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [BulkOperationUserErrorCode](../../types/enums/BulkOperationUserErrorCode.md)
