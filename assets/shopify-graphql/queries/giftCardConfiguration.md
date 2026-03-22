# Query: `giftCardConfiguration`

**Returns:** `GiftCardConfiguration!`

The configuration for the shop's gift cards.

## Return Type Fields

- `issueLimit`: `MoneyV2!` — The issue limit for gift cards in the default shop currency.
- `purchaseLimit`: `MoneyV2!` — The purchase limit for gift cards in the default shop currency.

## Related Types

- [GiftCardConfiguration](../types/objects/GiftCardConfiguration.md)
- [MoneyV2](../types/objects/MoneyV2.md)

## Example Query

```graphql
query {
  giftCardConfiguration {
  }
}
```
