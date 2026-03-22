# Object: `OrderCancelPayload`

Return type for `orderCancel` mutation.

## Fields

- `job`: `Job` — The job that asynchronously cancels the order.
- `orderCancelUserErrors`: `[OrderCancelUserError!]!` — The list of errors that occurred from executing the mutation.
- `userErrors`: `[UserError!]!` *(deprecated)* — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../../types/objects/Job.md)
- [OrderCancelUserError](../../types/objects/OrderCancelUserError.md)
- [UserError](../../types/objects/UserError.md)
