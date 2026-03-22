# Mutation: `productFeedCreate`

**Returns:** `ProductFeedCreatePayload`

Creates a product feed for a specific publication.

## Arguments

- **`input`**: `ProductFeedInput` — The properties of the new product feed.

## Payload Fields

- `productFeed`: `ProductFeed` — The newly created product feed.
- `userErrors`: `[ProductFeedCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductFeed](../types/objects/ProductFeed.md)
- [ProductFeedCreatePayload](../types/objects/ProductFeedCreatePayload.md)
- [ProductFeedCreateUserError](../types/objects/ProductFeedCreateUserError.md)
- [ProductFeedInput](../types/inputs/ProductFeedInput.md)

## Example Mutation

```graphql
mutation ProductFeedCreate($input: ProductFeedInput) {
  productFeedCreate(input: $input) {
    productFeed {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
