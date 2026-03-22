# Mutation: `collectionReorderProducts`

**Returns:** `CollectionReorderProductsPayload`

Asynchronously reorders products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). The [`Collection.sortOrder`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-collection-sortorder) must be `MANUAL`.

How to use this mutation:
- Provide only the products that actually moved in the `moves` list; do not send the entire product list. For example: to move the product at index 1 to index N, send a single move for that product with `newPosition: N`.
- Each move is applied sequentially in the order provided.
- `newPosition` is a zero-based index within the collection at the moment the move is applied (after any prior moves in the list).
- Products not included in `moves` keep their relative order, aside from any displacement caused by the moves.
- If `newPosition` is greater than or equal to the number of products, the product is placed at the end.

Example:
- Initial order: [A, B, C, D, E] (indices 0..4)
- Moves (applied in order):
  - E -> newPosition: 1
  - C -> newPosition: 4
- Result: [A, E, B, D, C]

Displaced products will have their position altered in a consistent manner with no gaps.

## Arguments

- **`id`**: `ID!` — The ID of the collection on which to reorder products.
- **`moves`**: `[MoveInput!]!` — A list of moves to perform, evaluated in order. Provide only products whose positions changed; do not send the full list. `newPosition` is a zero-based index evaluated at the time each move is applied (after any prior moves). `newPosition` values do not need to be unique, and if a value is greater than or equal to the number of products, the product is moved to the end. Up to 250 moves are supported.

## Payload Fields

- `job`: `Job` — The asynchronous job reordering the products.
- `userErrors`: `[CollectionReorderProductsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CollectionReorderProductsPayload](../types/objects/CollectionReorderProductsPayload.md)
- [CollectionReorderProductsUserError](../types/objects/CollectionReorderProductsUserError.md)
- [Job](../types/objects/Job.md)
- [MoveInput](../types/inputs/MoveInput.md)

## Example Mutation

```graphql
mutation CollectionReorderProducts($id: ID!, $moves: [MoveInput!]!) {
  collectionReorderProducts(id: $id, moves: $moves) {
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
