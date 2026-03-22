# Mutation: `shopPolicyUpdate`

**Returns:** `ShopPolicyUpdatePayload`

Updates a shop policy.

## Arguments

- **`shopPolicy`**: `ShopPolicyInput!` — The properties to use when updating the shop policy.

## Payload Fields

- `shopPolicy`: `ShopPolicy` — The shop policy that has been updated.
- `userErrors`: `[ShopPolicyUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ShopPolicy](../types/objects/ShopPolicy.md)
- [ShopPolicyInput](../types/inputs/ShopPolicyInput.md)
- [ShopPolicyUpdatePayload](../types/objects/ShopPolicyUpdatePayload.md)
- [ShopPolicyUserError](../types/objects/ShopPolicyUserError.md)

## Example Mutation

```graphql
mutation ShopPolicyUpdate($shopPolicy: ShopPolicyInput!) {
  shopPolicyUpdate(shopPolicy: $shopPolicy) {
    shopPolicy {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
