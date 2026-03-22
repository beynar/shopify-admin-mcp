# Object: `LineItem`

The `LineItem` object represents a single product or service that a customer purchased in an
[order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).
Each line item is associated with a
[product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
and can have multiple [discount allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation).
Line items contain details about what was purchased, including the product variant, quantity, pricing,
and fulfillment status.

Use the `LineItem` object to manage the following processes:

- [Track the quantity of items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions) ordered, fulfilled, and unfulfilled.
- [Calculate prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders), including discounts and taxes.
- Manage fulfillment through [fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).
- Manage [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).
- Handle [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) and recurring orders.

Line items can also include custom attributes and properties, allowing merchants to add specific details
about each item in an order. Learn more about
[managing orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

**Implements:** `Node`

## Fields

- `canRestock`: `Boolean!` *(deprecated)* — Whether the line item can be restocked.
- `contract`: `SubscriptionContract` — The subscription contract associated with this line item.
- `currentQuantity`: `Int!` — The number of units ordered, excluding refunded and removed units.
- `customAttributes`: `[Attribute!]!` — A list of attributes that represent custom features or special requests.
- `discountAllocations`: `[DiscountAllocation!]!` — The discounts that have been allocated to the line item by discount applications, including discounts allocated to refunded and removed quantities.
- `discountedTotal`: `Money!` *(deprecated)* — The total discounted price of the line item in shop currency, including refunded and removed quantities. This value doesn't include order-level discounts.
- `discountedTotalSet` `(withCodeDiscounts)`: `MoneyBag!` — The total discounted price of the line item in shop and presentment currencies, including refunded and removed quantities. This value doesn't include order-level discounts. Code-based discounts aren't included by default.
- `discountedUnitPrice`: `Money!` *(deprecated)* — The approximate unit price of the line item in shop currency. This value includes line-level discounts and discounts applied to refunded and removed quantities. It doesn't include order-level or code-based discounts.
- `discountedUnitPriceAfterAllDiscountsSet`: `MoneyBag!` — The approximate unit price of the line item in shop and presentment currencies. This value includes discounts applied to refunded and removed quantities.
- `discountedUnitPriceSet`: `MoneyBag!` — The approximate unit price of the line item in shop and presentment currencies. This value includes line-level discounts and discounts applied to refunded and removed quantities. It doesn't include order-level or code-based discounts.
- `duties`: `[Duty!]!` — The duties associated with the line item.
- `fulfillableQuantity`: `Int!` *(deprecated)* — The total number of units to fulfill.
- `fulfillmentService`: `FulfillmentService` *(deprecated)* — The fulfillment service that stocks the product variant belonging to a line item.
- `fulfillmentStatus`: `String!` *(deprecated)* — The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated to the line item's variant.
- `isGiftCard`: `Boolean!` — Whether the line item represents the purchase of a gift card.
- `lineItemGroup`: `LineItemGroup` — The line item group associated to the line item.
- `merchantEditable`: `Boolean!` — Whether the line item can be edited or not.
- `name`: `String!` — The title of the product, optionally appended with the title of the variant (if applicable).
- `nonFulfillableQuantity`: `Int!` — The total number of units that can't be fulfilled. For example, if items have been refunded, or the item is not something that can be fulfilled, like a tip. Please see the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object for more fulfillment details.
- `originalTotal`: `Money!` *(deprecated)* — In shop currency, the total price of the line item when the order was created.
- `originalTotalSet`: `MoneyBag!` — In shop and presentment currencies, the total price of the line item when the order was created.
- `originalUnitPrice`: `Money!` *(deprecated)* — In shop currency, the unit price of the line item when the order was created. This value doesn't include discounts.
- `originalUnitPriceSet`: `MoneyBag!` — In shop and presentment currencies, the unit price of the line item when the order was created. This value doesn't include discounts.
- `product`: `Product` — The Product object associated with this line item's variant.
- `quantity`: `Int!` — The number of units ordered, including refunded and removed units.
- `refundableQuantity`: `Int!` — The number of units ordered, excluding refunded units and removed units.
- `requiresShipping`: `Boolean!` — Whether physical shipping is required for the variant.
- `restockable`: `Boolean!` — Whether the line item can be restocked.
- `sellingPlan`: `LineItemSellingPlan` — The selling plan details associated with the line item.
- `sku`: `String` — The variant SKU number.
- `staffMember`: `StaffMember` — Staff attributed to the line item.
- `suggestedReturnReasonDefinitions` `(first, after, last, before, reverse)`: `ReturnReasonDefinitionConnection` — Return reasons suggested based on the line item's product category in Shopify's product taxonomy. Use [`returnReasonDefinitions`](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions) to access the full library of available reasons.
- `taxLines` `(first)`: `[TaxLine!]!` — The taxes charged for the line item, including taxes charged for refunded and removed quantities.
- `taxable`: `Boolean!` — Whether the variant is taxable.
- `title`: `String!` — The title of the product at time of order creation.
- `totalDiscount`: `Money!` *(deprecated)* — The total discount allocated to the line item in shop currency, including the total allocated to refunded and removed quantities. This value doesn't include order-level discounts.
- `totalDiscountSet`: `MoneyBag!` — The total discount allocated to the line item in shop and presentment currencies, including the total allocated to refunded and removed quantities. This value doesn't include order-level discounts.
- `unfulfilledDiscountedTotal`: `Money!` *(deprecated)* — In shop currency, the total discounted price of the unfulfilled quantity for the line item.
- `unfulfilledDiscountedTotalSet`: `MoneyBag!` — In shop and presentment currencies, the total discounted price of the unfulfilled quantity for the line item.
- `unfulfilledOriginalTotal`: `Money!` *(deprecated)* — In shop currency, the total price of the unfulfilled quantity for the line item. This value doesn't include discounts.
- `unfulfilledOriginalTotalSet`: `MoneyBag!` — In shop and presentment currencies, the total price of the unfulfilled quantity for the line item. This value doesn't include discounts.
- `unfulfilledQuantity`: `Int!` — The number of units not yet fulfilled.
- `variant`: `ProductVariant` — The Variant object associated with this line item.
- `variantTitle`: `String` — The title of the variant at time of order creation.
- `vendor`: `String` — The name of the vendor who made the variant.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [DiscountAllocation](../../types/objects/DiscountAllocation.md)
- [Duty](../../types/objects/Duty.md)
- [FulfillmentService](../../types/objects/FulfillmentService.md)
- [Image](../../types/objects/Image.md)
- [LineItemGroup](../../types/objects/LineItemGroup.md)
- [LineItemSellingPlan](../../types/objects/LineItemSellingPlan.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
- [StaffMember](../../types/objects/StaffMember.md)
- [SubscriptionContract](../../types/objects/SubscriptionContract.md)
- [TaxLine](../../types/objects/TaxLine.md)
