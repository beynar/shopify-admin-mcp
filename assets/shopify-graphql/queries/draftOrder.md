# Query: `draftOrder`

**Returns:** `DraftOrder`

Retrieves a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) by its ID.
A draft order is an order created by a merchant on behalf of their
customers. Draft orders contain all necessary order details (products, pricing, customer information)
but require payment to be accepted before they can be converted into
[completed orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete).

Use the `draftOrder` query to retrieve information associated with the following workflows:

- Creating orders for phone, in-person, or chat sales
- Sending invoices to customers with secure checkout links
- Managing custom items and additional costs
- Selling products at discount or wholesale rates
- Processing pre-orders and saving drafts for later completion

A draft order is associated with a
[customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)
and contains multiple [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem).
Each draft order has a [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status),
which indicates its progress through the sales workflow.

## Arguments

- **`id`**: `ID!` — The ID of the `DraftOrder` to return.

## Return Type Fields

- `acceptAutomaticDiscounts`: `Boolean` — Whether or not to accept automatic discounts on the draft order during calculation.
- `allVariantPricesOverridden`: `Boolean!` — Whether all variant prices have been overridden.
- `allowDiscountCodesInCheckout`: `Boolean!` — Whether discount codes are allowed during checkout of this draft order.
- `anyVariantPricesOverridden`: `Boolean!` — Whether any variant prices have been overridden.
- `appliedDiscount`: `DraftOrderAppliedDiscount` — The custom order-level discount applied.
- `billingAddress`: `MailingAddress` — The billing address of the customer.
- `billingAddressMatchesShippingAddress`: `Boolean!` — Whether the billing address matches the shipping address.
- `completedAt`: `DateTime` — The date and time when the draft order was converted to a new order,
- `createdAt`: `DateTime!` — The date and time when the draft order was created in Shopify.
- `currencyCode`: `CurrencyCode!` — The shop currency used for calculation.
- `customAttributes`: `[Attribute!]!` — The custom information added to the draft order on behalf of the customer.
- `customer`: `Customer` — The customer who will be sent an invoice.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `discountCodes`: `[String!]!` — All discount codes applied.
- `email`: `String` — The email address of the customer, which is used to send notifications.
- `events`: `EventConnection!` — The list of events associated with the draft order.
- `hasTimelineComment`: `Boolean!` — Whether the merchant has added timeline comments to the draft order.
- `id`: `ID!` — A globally-unique ID.
- `invoiceEmailTemplateSubject`: `String!` — The subject defined for the draft invoice email template.
- `invoiceSentAt`: `DateTime` — The date and time when the invoice was last emailed to the customer.
- `invoiceUrl`: `URL` — The link to the checkout, which is sent to the customer in the invoice email.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `lineItems`: `DraftOrderLineItemConnection!` — The list of the line items in the draft order.
- `lineItemsSubtotalPrice`: `MoneyBag!` — A subtotal of the line items and corresponding discounts,
- `localizedFields`: `LocalizedFieldConnection!` — List of localized fields for the resource.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The identifier for the draft order, which is unique within the store. For example, _#D1223_.
- `note2`: `String` — The text from an optional note attached to the draft order.
- `order`: `Order` — The order that was created from the draft order.
- `paymentTerms`: `PaymentTerms` — The associated payment terms for this draft order.
- `phone`: `String` — The assigned phone number.
- `platformDiscounts`: `[DraftOrderPlatformDiscount!]!` — The list of platform discounts applied.
- `poNumber`: `String` — The purchase order number.
- `presentmentCurrencyCode`: `CurrencyCode!` — The payment currency used for calculation.
- `purchasingEntity`: `PurchasingEntity` — The purchasing entity.
- `ready`: `Boolean!` — Whether the draft order is ready and can be completed.
- `reserveInventoryUntil`: `DateTime` — The time after which inventory will automatically be restocked.
- `shippingAddress`: `MailingAddress` — The shipping address of the customer.
- `shippingLine`: `ShippingLine` — The line item containing the shipping information and costs.
- `status`: `DraftOrderStatus!` — The status of the draft order.
- `subtotalPriceSet`: `MoneyBag!` — The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.
- `tags`: `[String!]!` — The comma separated list of tags associated with the draft order.
- `taxExempt`: `Boolean!` — Whether the draft order is tax exempt.
- `taxLines`: `[TaxLine!]!` — The list of of taxes lines charged for each line item and shipping line.
- `taxesIncluded`: `Boolean!` — Whether the line item prices include taxes.
- `totalDiscountsSet`: `MoneyBag!` — Total discounts.
- `totalLineItemsPriceSet`: `MoneyBag!` — Total price of line items, excluding discounts.
- `totalPriceSet`: `MoneyBag!` — The total price, includes taxes, shipping charges, and discounts.
- `totalQuantityOfLineItems`: `Int!` — The sum of individual line item quantities.
- `totalShippingPriceSet`: `MoneyBag!` — The total shipping price.
- `totalTaxSet`: `MoneyBag!` — The total tax.
- `totalWeight`: `UnsignedInt64!` — The total weight in grams of the draft order.
- `transformerFingerprint`: `String` — Fingerprint of the current cart.
- `updatedAt`: `DateTime!` — The date and time when the draft order was last changed.
- `visibleToCustomer`: `Boolean!` — Whether the draft order will be visible to the customer on the self-serve portal.
- `warnings`: `[DraftOrderWarning!]!` — The list of warnings raised while calculating.

## Related Types

- [Attribute](../types/objects/Attribute.md)
- [CountryCode](../types/enums/CountryCode.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [Customer](../types/objects/Customer.md)
- [DraftOrder](../types/objects/DraftOrder.md)
- [DraftOrderAppliedDiscount](../types/objects/DraftOrderAppliedDiscount.md)
- [DraftOrderPlatformDiscount](../types/objects/DraftOrderPlatformDiscount.md)
- [DraftOrderStatus](../types/enums/DraftOrderStatus.md)
- [DraftOrderWarning](../types/interfaces/DraftOrderWarning.md)
- [MailingAddress](../types/objects/MailingAddress.md)
- [Metafield](../types/objects/Metafield.md)
- [MoneyBag](../types/objects/MoneyBag.md)
- [Order](../types/objects/Order.md)
- [PaymentTerms](../types/objects/PaymentTerms.md)
- [PurchasingEntity](../types/unions/PurchasingEntity.md)
- [ShippingLine](../types/objects/ShippingLine.md)
- [TaxLine](../types/objects/TaxLine.md)

## Example Query

```graphql
query DraftOrder($id: ID!) {
  draftOrder(id: $id) {
    id
    acceptAutomaticDiscounts
    allVariantPricesOverridden
    allowDiscountCodesInCheckout
    anyVariantPricesOverridden
    billingAddressMatchesShippingAddress
  }
}
```
