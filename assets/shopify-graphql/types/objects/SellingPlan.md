# Object: `SellingPlan`

How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

> Caution:
> Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

**Implements:** `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `Node`

## Fields

- `billingPolicy`: `SellingPlanBillingPolicy!` — A selling plan policy which describes the recurring billing details.
- `category`: `SellingPlanCategory` — The category used to classify the selling plan for reporting purposes.
- `createdAt`: `DateTime!` — The date and time when the selling plan was created.
- `deliveryPolicy`: `SellingPlanDeliveryPolicy!` — A selling plan policy which describes the delivery details.
- `description`: `String` — Buyer facing string which describes the selling plan commitment.
- `id`: `ID!` — A globally-unique ID.
- `inventoryPolicy`: `SellingPlanInventoryPolicy` — When to reserve inventory for a selling plan.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — A customer-facing description of the selling plan.
- `options`: `[String!]!` — The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
- `position`: `Int` — Relative position of the selling plan for display. A lower position will be displayed before a higher position.
- `pricingPolicies`: `[SellingPlanPricingPolicy!]!` — Selling plan pricing details.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.

## Related Types

- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [SellingPlanBillingPolicy](../../types/unions/SellingPlanBillingPolicy.md)
- [SellingPlanCategory](../../types/enums/SellingPlanCategory.md)
- [SellingPlanDeliveryPolicy](../../types/unions/SellingPlanDeliveryPolicy.md)
- [SellingPlanInventoryPolicy](../../types/objects/SellingPlanInventoryPolicy.md)
- [SellingPlanPricingPolicy](../../types/unions/SellingPlanPricingPolicy.md)
- [Translation](../../types/objects/Translation.md)
