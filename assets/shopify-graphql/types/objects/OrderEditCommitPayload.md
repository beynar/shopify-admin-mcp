# Object: `OrderEditCommitPayload`

Return type for `orderEditCommit` mutation.

## Fields

- `order`: `Order` — The order with changes applied.
- `successMessages`: `[String!]` — Messages to display to the user after the staged changes are commmitted.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../../types/objects/Order.md)
- [UserError](../../types/objects/UserError.md)
