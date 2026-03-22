# Object: `PriceRule`

A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

> Note:
> Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

**Implements:** `CommentEventSubject`, `HasEvents`, `LegacyInteroperability`, `Node`

## Fields

- `allocationLimit`: `Int` — The maximum number of times that the price rule can be allocated onto an order.
- `allocationMethod`: `PriceRuleAllocationMethod!` — The method by which the price rule's value is allocated to its entitled items.
- `app`: `App` — The application that created the price rule.
- `combinesWith`: `DiscountCombinesWith!` — The
- `createdAt`: `DateTime!` — The date and time when the price rule was created.
- `customerSelection`: `PriceRuleCustomerSelection!` — The customers that can use this price rule.
- `discountClass`: `DiscountClass!` *(deprecated)* — The
- `discountClasses`: `[DiscountClass!]!` — The classes of the discount.
- `discountCodes` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`: `PriceRuleDiscountCodeConnection!` — List of the price rule's discount codes.
- `discountCodesCount`: `Count` — How many discount codes associated with the price rule.
- `endsAt`: `DateTime` — The date and time when the price rule ends. For open-ended price rules, use `null`.
- `entitlementToPrerequisiteQuantityRatio`: `PriceRuleEntitlementToPrerequisiteQuantityRatio` *(deprecated)* — Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the price rule.
- `features`: `[PriceRuleFeature!]!` — A list of the price rule's features.
- `hasTimelineComment`: `Boolean!` — Indicates whether there are any timeline comments on the price rule.
- `id`: `ID!` — A globally-unique ID.
- `itemEntitlements`: `PriceRuleItemEntitlements!` — The items to which the price rule applies.
- `itemPrerequisites`: `PriceRuleLineItemPrerequisites!` — The items required for the price rule to be applicable.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `oncePerCustomer`: `Boolean!` — Whether the price rule can be applied only once per customer.
- `prerequisiteQuantityRange`: `PriceRuleQuantityRange` — The number of the entitled items must fall within this range for the price rule to be applicable.
- `prerequisiteShippingPriceRange`: `PriceRuleMoneyRange` — The shipping cost must fall within this range for the price rule to be applicable.
- `prerequisiteSubtotalRange`: `PriceRuleMoneyRange` — The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable.
- `prerequisiteToEntitlementQuantityRatio`: `PriceRulePrerequisiteToEntitlementQuantityRatio` — Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items.
- `shareableUrls`: `[PriceRuleShareableUrl!]!` — URLs that can be used to share the discount.
- `shippingEntitlements`: `PriceRuleShippingLineEntitlements!` — The shipping lines to which the price rule applies.
- `startsAt`: `DateTime!` — The date and time when the price rule starts.
- `status`: `PriceRuleStatus!` — The status of the price rule.
- `summary`: `String` — A detailed summary of the price rule.
- `target`: `PriceRuleTarget!` — The type of lines (line_item or shipping_line) to which the price rule applies.
- `title`: `String!` — The title of the price rule.
- `totalSales`: `MoneyV2` — The total sales from orders where the price rule was used.
- `traits`: `[PriceRuleTrait!]!` *(deprecated)* — A list of the price rule's features.
- `usageCount`: `Int!` — The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.
- `usageLimit`: `Int` — The maximum number of times that the price rule can be used in total.
- `validityPeriod`: `PriceRuleValidityPeriod!` — A time period during which a price rule is applicable.
- `value`: `PriceRuleValue!` *(deprecated)* — The value of the price rule.
- `valueV2`: `PricingValue!` — The value of the price rule.

## Related Types

- [App](../../types/objects/App.md)
- [Count](../../types/objects/Count.md)
- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountCodeSortKeys](../../types/enums/DiscountCodeSortKeys.md)
- [DiscountCombinesWith](../../types/objects/DiscountCombinesWith.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [PriceRuleAllocationMethod](../../types/enums/PriceRuleAllocationMethod.md)
- [PriceRuleCustomerSelection](../../types/objects/PriceRuleCustomerSelection.md)
- [PriceRuleEntitlementToPrerequisiteQuantityRatio](../../types/objects/PriceRuleEntitlementToPrerequisiteQuantityRatio.md)
- [PriceRuleFeature](../../types/enums/PriceRuleFeature.md)
- [PriceRuleItemEntitlements](../../types/objects/PriceRuleItemEntitlements.md)
- [PriceRuleLineItemPrerequisites](../../types/objects/PriceRuleLineItemPrerequisites.md)
- [PriceRuleMoneyRange](../../types/objects/PriceRuleMoneyRange.md)
- [PriceRulePrerequisiteToEntitlementQuantityRatio](../../types/objects/PriceRulePrerequisiteToEntitlementQuantityRatio.md)
- [PriceRuleQuantityRange](../../types/objects/PriceRuleQuantityRange.md)
- [PriceRuleShareableUrl](../../types/objects/PriceRuleShareableUrl.md)
- [PriceRuleShippingLineEntitlements](../../types/objects/PriceRuleShippingLineEntitlements.md)
- [PriceRuleStatus](../../types/enums/PriceRuleStatus.md)
- [PriceRuleTarget](../../types/enums/PriceRuleTarget.md)
- [PriceRuleTrait](../../types/enums/PriceRuleTrait.md)
- [PriceRuleValidityPeriod](../../types/objects/PriceRuleValidityPeriod.md)
- [PriceRuleValue](../../types/unions/PriceRuleValue.md)
- [PricingValue](../../types/unions/PricingValue.md)
