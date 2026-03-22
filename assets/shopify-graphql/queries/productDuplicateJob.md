# Query: `productDuplicateJob`

**Returns:** `ProductDuplicateJob!`

Returns the product duplicate job.

## Arguments

- **`id`**: `ID!` — An ID of a product duplicate job to fetch.

## Return Type Fields

- `done`: `Boolean!` — This indicates if the job is still queued or has been run.
- `id`: `ID!` — A globally-unique ID that's returned when running an asynchronous mutation.

## Related Types

- [ProductDuplicateJob](../types/objects/ProductDuplicateJob.md)

## Example Query

```graphql
query ProductDuplicateJob($id: ID!) {
  productDuplicateJob(id: $id) {
    done
  }
}
```
