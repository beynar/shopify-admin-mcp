# Object: `SubscriptionLine`

A product line item within a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). Each line represents a specific product variant that the customer subscribes to, including its quantity, pricing, and whether shipping is required.

The line maintains references to the [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant), [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan), and custom [`Attribute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute) objects. It tracks the current price and any scheduled price changes through its [`pricingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy). You can modify lines through [`SubscriptionDraft`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft) objects without affecting the original contract until you commit changes.

Learn more about [subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

## Fields

- `concatenatedOriginContract`: `SubscriptionContract` — The origin contract of the line if it was concatenated from another contract.
- `currentPrice`: `MoneyV2!` — The price per unit for the subscription line in the contract's currency.
- `customAttributes`: `[Attribute!]!` — List of custom attributes associated to the line item.
- `discountAllocations`: `[SubscriptionDiscountAllocation!]!` — Discount allocations.
- `id`: `ID!` — The unique ID.
- `lineDiscountedPrice`: `MoneyV2!` — Total line price including all discounts.
- `pricingPolicy`: `SubscriptionPricingPolicy` — Describe the price changes of the line over time.
- `productId`: `ID` — The product ID associated with the subscription line.
- `quantity`: `Int!` — The quantity of the unit selected for the subscription line.
- `requiresShipping`: `Boolean!` — Whether physical shipping is required for the variant.
- `sellingPlanId`: `ID` — The selling plan ID associated to the line.
- `sellingPlanName`: `String` — The selling plan name associated to the line. This name describes
- `sku`: `String` — Variant SKU number of the item associated with the subscription line.
- `taxable`: `Boolean!` — Whether the variant is taxable.
- `title`: `String!` — Product title of the item associated with the subscription line.
- `variantId`: `ID` — The product variant ID associated with the subscription line.
- `variantImage`: `Image` — The image associated with the line item's variant or product.
- `variantTitle`: `String` — Product variant title of the item associated with the subscription line.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [Image](../../types/objects/Image.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [SubscriptionContract](../../types/objects/SubscriptionContract.md)
- [SubscriptionDiscountAllocation](../../types/objects/SubscriptionDiscountAllocation.md)
- [SubscriptionPricingPolicy](../../types/objects/SubscriptionPricingPolicy.md)
