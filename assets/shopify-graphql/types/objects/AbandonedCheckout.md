# Object: `AbandonedCheckout`

An incomplete checkout where the customer added items and provided contact information but didn't complete the purchase. Tracks the customer's cart contents, pricing details, addresses, and timestamps to enable recovery campaigns and abandonment analytics.

The checkout includes a recovery URL that merchants can send to customers to resume their purchase. [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects preserve the original [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) selections, quantities, and pricing at the time of abandonment.

**Implements:** `Navigable`, `Node`

## Fields

- `abandonedCheckoutUrl`: `URL!` — The URL for the buyer to recover their checkout.
- `billingAddress`: `MailingAddress` — The billing address provided by the buyer.
- `completedAt`: `DateTime` — The date and time when the buyer completed the checkout.
- `createdAt`: `DateTime!` — The date and time when the checkout was created.
- `customAttributes`: `[Attribute!]!` — A list of extra information that has been added to the checkout.
- `customer`: `Customer` — The customer who created this checkout.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `discountCodes`: `[String!]!` — The discount codes entered by the buyer at checkout.
- `id`: `ID!` — A globally-unique ID.
- `lineItems` `(first, after, last, before, reverse)`: `AbandonedCheckoutLineItemConnection!` — A list of the line items in this checkout.
- `lineItemsQuantity`: `Int!` *(deprecated)* — The number of products in the checkout.
- `name`: `String!` — Unique merchant-facing identifier for the checkout.
- `note`: `String!` — A merchant-facing note added to the checkout. Not visible to the buyer.
- `shippingAddress`: `MailingAddress` — The shipping address to where the line items will be shipped.
- `subtotalPriceSet`: `MoneyBag!` — The sum of all items in the checkout, including discounts but excluding shipping, taxes and tips.
- `taxLines`: `[TaxLine!]!` — Individual taxes charged on the checkout.
- `taxesIncluded`: `Boolean!` — Whether taxes are included in line item and shipping line prices.
- `totalDiscountSet`: `MoneyBag!` — The total amount of discounts to be applied.
- `totalDutiesSet`: `MoneyBag` — The total duties applied to the checkout.
- `totalLineItemsPriceSet`: `MoneyBag!` — The sum of the prices of all line items in the checkout.
- `totalPriceSet`: `MoneyBag!` — The sum of all items in the checkout, including discounts, shipping, taxes, and tips.
- `totalTaxSet`: `MoneyBag` — The total tax applied to the checkout.
- `updatedAt`: `DateTime!` — The date and time when the checkout was most recently updated.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [Customer](../../types/objects/Customer.md)
- [MailingAddress](../../types/objects/MailingAddress.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
