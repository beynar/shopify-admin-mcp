# Mutation: `metaobjectBulkDelete`

**Returns:** `MetaobjectBulkDeletePayload`

Asynchronously delete metaobjects and their associated metafields in bulk.

## Arguments

- **`where`**: `MetaobjectBulkDeleteWhereCondition!` — Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

## Payload Fields

- `job`: `Job` — The asynchronous job that deletes the metaobjects.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [MetaobjectBulkDeletePayload](../types/objects/MetaobjectBulkDeletePayload.md)
- [MetaobjectBulkDeleteWhereCondition](../types/inputs/MetaobjectBulkDeleteWhereCondition.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectBulkDelete($where: MetaobjectBulkDeleteWhereCondition!) {
  metaobjectBulkDelete(where: $where) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
