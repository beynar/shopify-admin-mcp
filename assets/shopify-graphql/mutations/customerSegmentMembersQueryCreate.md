# Mutation: `customerSegmentMembersQueryCreate`

**Returns:** `CustomerSegmentMembersQueryCreatePayload`

Creates a customer segment members query.

## Arguments

- **`input`**: `CustomerSegmentMembersQueryInput!` — The input fields to create a customer segment members query.

## Payload Fields

- `customerSegmentMembersQuery`: `CustomerSegmentMembersQuery` — The newly created customer segment members query.
- `userErrors`: `[CustomerSegmentMembersQueryUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerSegmentMembersQuery](../types/objects/CustomerSegmentMembersQuery.md)
- [CustomerSegmentMembersQueryCreatePayload](../types/objects/CustomerSegmentMembersQueryCreatePayload.md)
- [CustomerSegmentMembersQueryInput](../types/inputs/CustomerSegmentMembersQueryInput.md)
- [CustomerSegmentMembersQueryUserError](../types/objects/CustomerSegmentMembersQueryUserError.md)

## Example Mutation

```graphql
mutation CustomerSegmentMembersQueryCreate($input: CustomerSegmentMembersQueryInput!) {
  customerSegmentMembersQueryCreate(input: $input) {
    customerSegmentMembersQuery {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
