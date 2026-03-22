# Query: `checkoutProfile`

**Returns:** `CheckoutProfile`

Returns a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile). Checkout profiles define the branding settings and UI extensions for a store's checkout experience. Stores can have one published profile that renders on their live checkout and multiple draft profiles for testing customizations in the checkout editor.

## Arguments

- **`id`**: `ID!` — The ID of the checkout profile.

## Return Type Fields

- `createdAt`: `DateTime!` — The date and time when the checkout profile was created.
- `editedAt`: `DateTime!` — The date and time when the checkout profile was last edited.
- `id`: `ID!` — A globally-unique ID.
- `isPublished`: `Boolean!` — Whether the checkout profile is published or not.
- `name`: `String!` — The profile name.
- `typOspPagesActive`: `Boolean!` — Whether the checkout profile Thank You Page and Order Status Page are actively using extensibility or not.
- `updatedAt`: `DateTime!` — The date and time when the checkout profile was last updated.

## Related Types

- [CheckoutProfile](../types/objects/CheckoutProfile.md)

## Example Query

```graphql
query CheckoutProfile($id: ID!) {
  checkoutProfile(id: $id) {
    createdAt
    editedAt
    isPublished
    name
  }
}
```
