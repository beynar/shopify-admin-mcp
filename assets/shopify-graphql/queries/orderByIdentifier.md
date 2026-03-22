# Query: `orderByIdentifier`

**Returns:** `Order`

Return an order by an identifier.

## Arguments

- **`identifier`**: `OrderIdentifierInput!` — The identifier of the order.

## Return Type Fields

- `additionalFees`: `[AdditionalFee!]!` — A list of additional fees applied to an order, such as duties, import fees, or [tax lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.additionalFees.taxLines).
- `agreements`: `SalesAgreementConnection!` — A list of sales agreements associated with the order, such as contracts defining payment terms, or delivery schedules between merchants and customers.
- `alerts`: `[ResourceAlert!]!` — A list of messages that appear on the **Orders** page in the Shopify admin. These alerts provide merchants with important information about an order's status or required actions.
- `app`: `OrderApp` — The application that created the order. For example, "Online Store", "Point of Sale", or a custom app name.
- `billingAddress`: `MailingAddress` — The billing address associated with the payment method selected by the customer for an order.
- `billingAddressMatchesShippingAddress`: `Boolean!` — Whether the billing address matches the [shipping address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingAddress). Returns `true` if both addresses are the same, and `false` if they're different or if an address is missing.
- `canMarkAsPaid`: `Boolean!` — Whether an order can be manually marked as paid. Returns `false` if the order is already paid, is canceled, has pending [Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/payouts) transactions, or has a negative payment amount.
- `canNotifyCustomer`: `Boolean!` — Whether order notifications can be sent to the customer.
- `cancelReason`: `OrderCancelReason` — The reason provided for an order cancellation. For example, a merchant might cancel an order if there's insufficient inventory. Returns `null` if the order hasn't been canceled.
- `cancellation`: `OrderCancellation` — Details of an order's cancellation, if it has been canceled. This includes the reason, date, and any [staff notes](https://shopify.dev/api/admin-graphql/latest/objects/OrderCancellation#field-OrderCancellation.fields.staffNote).
- `cancelledAt`: `DateTime` — The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was canceled.
- `capturable`: `Boolean!` — Whether an authorized payment for an order can be captured.
- `cartDiscountAmountSet`: `MoneyBag` — The total discount amount applied at the time the order was created, displayed in both shop and presentment currencies, before returns, refunds, order edits, and cancellations. This field only includes discounts applied to the entire order.
- `channelInformation`: `ChannelInformation` — Details about the sales channel that created the order, such as the [channel app type](https://shopify.dev/docs/api/admin-graphql/latest/objects/channel#field-Channel.fields.channelType)
- `clientIp`: `String` — The IP address of the customer who placed the order. Useful for fraud detection and geographic analysis.
- `closed`: `Boolean!` — Whether an order is closed. An order is considered closed if all its line items have been fulfilled or canceled, and all financial transactions are complete.
- `closedAt`: `DateTime` — The date and time [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was closed. Shopify automatically records this timestamp when all items have been fulfilled or canceled, and all financial transactions are complete. Returns `null` if the order isn't closed.
- `confirmationNumber`: `String` — A customer-facing order identifier, often shown instead of the sequential order name.
- `confirmed`: `Boolean!` — Whether inventory has been reserved for an order. Returns `true` if inventory quantities for an order's [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) have been reserved.
- `createdAt`: `DateTime!` — The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was created. This timestamp is set when the customer completes checkout and remains unchanged throughout an order's lifecycle.
- `currencyCode`: `CurrencyCode!` — The shop currency when the order was placed. For example, "USD" or "CAD".
- `currentCartDiscountAmountSet`: `MoneyBag!` — The current total of all discounts applied to the entire order, after returns, refunds, order edits, and cancellations. This includes discount codes, automatic discounts, and other promotions that affect the whole order rather than individual line items. To get the original discount amount at the time of order creation, use the [`cartDiscountAmountSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cartDiscountAmountSet) field.
- `currentShippingPriceSet`: `MoneyBag!` — The current shipping price after applying refunds and discounts.
- `currentSubtotalLineItemsQuantity`: `Int!` — The current sum of the quantities for all line items that contribute to the order's subtotal price, after returns, refunds, order edits, and cancellations.
- `currentSubtotalPriceSet`: `MoneyBag!` — The total price of the order, after returns and refunds, in shop and presentment currencies.
- `currentTaxLines`: `[TaxLine!]!` — A list of all tax lines applied to line items on the order, after returns.
- `currentTotalAdditionalFeesSet`: `MoneyBag` — The current total of all additional fees for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations. Additional fees can include charges such as duties, import fees, and special handling.
- `currentTotalDiscountsSet`: `MoneyBag!` — The total amount discounted on the order after returns and refunds, in shop and presentment currencies.
- `currentTotalDutiesSet`: `MoneyBag` — The current total duties amount for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations.
- `currentTotalPriceSet`: `MoneyBag!` — The total price of the order, after returns, in shop and presentment currencies.
- `currentTotalTaxSet`: `MoneyBag!` — The sum of the prices of all tax lines applied to line items on the order, after returns and refunds, in shop and presentment currencies.
- `currentTotalWeight`: `UnsignedInt64!` — The total weight of the order after returns and refunds, in grams.
- `customAttributes`: `[Attribute!]!` — A list of additional information that has been attached to the order. For example, gift message, delivery instructions, or internal notes.
- `customer`: `Customer` — The customer who placed an order. Returns `null` if an order was created through a checkout without customer authentication, such as a guest checkout.
- `customerAcceptsMarketing`: `Boolean!` — Whether the customer agreed to receive marketing emails at the time of purchase.
- `customerJourneySummary`: `CustomerJourneySummary` — The customer's visits and interactions with the online store before placing the order.
- `customerLocale`: `String` — The customer's language and region preference at the time of purchase. For example, "en" for English, "fr-CA" for French (Canada), or "es-MX" for Spanish (Mexico).
- `discountApplications`: `DiscountApplicationConnection!` — A list of discounts that are applied to the order, excluding order edits and refunds.
- `discountCode`: `String` — The discount code used for an order. Returns `null` if no discount code was applied.
- `discountCodes`: `[String!]!` — The discount codes used for the order. Multiple codes can be applied to a single order.
- `displayAddress`: `MailingAddress` — The primary address of the customer, prioritizing shipping address over billing address when both are available.
- `displayFinancialStatus`: `OrderDisplayFinancialStatus` — An order's financial status for display in the Shopify admin.
- `displayFulfillmentStatus`: `OrderDisplayFulfillmentStatus!` — The order's fulfillment status that displays in the Shopify admin to merchants. For example, an order might be unfulfilled or scheduled.
- `disputes`: `[OrderDisputeSummary!]!` — A list of payment disputes associated with the order, such as chargebacks or payment inquiries.
- `dutiesIncluded`: `Boolean!` — Whether duties are included in the subtotal price of the order.
- `edited`: `Boolean!` — Whether the order has had any edits applied. For example, adding or removing line items, updating quantities, or changing prices.
- `email`: `String` — The email address associated with the customer for this order.
- `estimatedTaxes`: `Boolean!` — Whether taxes on the order are estimated.
- `events`: `EventConnection!` — A list of events associated with the order. Events track significant changes and activities related to the order, such as creation, payment, fulfillment, and cancellation.
- `fulfillable`: `Boolean!` — Whether there are line items that can be fulfilled.
- `fulfillmentOrders`: `FulfillmentOrderConnection!` — A list of [fulfillment orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) for an order.
- `fulfillments`: `[Fulfillment!]!` — A list of shipments for the order. Fulfillments represent the physical shipment of products to customers.
- `fulfillmentsCount`: `Count` — The total number of fulfillments for the order, including canceled ones.
- `fullyPaid`: `Boolean!` — Whether the order has been paid in full. This field returns `true` when the total amount received equals or exceeds the order total.
- `hasTimelineComment`: `Boolean!` — Whether the merchant has added a timeline comment to the order.
- `id`: `ID!` — A globally-unique ID.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `lineItems`: `LineItemConnection!` — A list of the order's line items. Line items represent the individual products and quantities that make up the order.
- `localizedFields`: `LocalizedFieldConnection!` — List of localized fields for the resource.
- `merchantBusinessEntity`: `BusinessEntity!` — The legal business structure that the merchant operates under for this order, such as an LLC, corporation, or partnership.
- `merchantEditable`: `Boolean!` — Whether the order can be edited by the merchant. Returns `false` for orders that can't be modified, such as canceled orders or orders with specific payment statuses.
- `merchantEditableErrors`: `[String!]!` — A list of reasons why the order can't be edited. For example, canceled orders can't be edited.
- `merchantOfRecordApp`: `OrderApp` — The application acting as the Merchant of Record for the order. The Merchant of Record is responsible for tax collection and remittance.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The unique identifier for the order that appears on the order page in the Shopify admin and the **Order status** page.
- `netPaymentSet`: `MoneyBag!` — The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies.
- `nonFulfillableLineItems`: `LineItemConnection!` — A list of line items that can't be fulfilled.
- `note`: `String` — The note associated with the order.
- `number`: `Int!` — The order number used to generate the name using the store's configured order number prefix/suffix. This number isn't guaranteed to follow a consecutive integer sequence (e.g. 1, 2, 3..), nor is it guaranteed to be unique across multiple stores, or even for a single store.
- `originalTotalAdditionalFeesSet`: `MoneyBag` — The total amount of all additional fees, such as import fees or taxes, that were applied when an order was created.
- `originalTotalDutiesSet`: `MoneyBag` — The total amount of duties calculated when an order was created, before any modifications. Modifications include returns, refunds, order edits, and cancellations. Use [`currentTotalDutiesSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDutiesSet) to retrieve the current duties amount after adjustments.
- `originalTotalPriceSet`: `MoneyBag!` — The total price of the order at the time of order creation, in shop and presentment currencies.
- `paymentCollectionDetails`: `OrderPaymentCollectionDetails!` — The payment collection details for the order, including payment status, outstanding amounts, and collection information.
- `paymentGatewayNames`: `[String!]!` — A list of the names of all payment gateways used for the order.
- `paymentTerms`: `PaymentTerms` — The payment terms associated with the order, such as net payment due dates or early payment discounts. Payment terms define when and how an order should be paid. Returns `null` if no specific payment terms were set for the order.
- `phone`: `String` — The phone number associated with the customer for this order.
- `poNumber`: `String` — The purchase order (PO) number that's associated with an order.
- `presentmentCurrencyCode`: `CurrencyCode!` — The currency used by the customer when placing the order. For example, "USD", "EUR", or "CAD".
- `processedAt`: `DateTime!` — The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was processed.
- `productNetwork`: `Boolean!` — Whether the customer also purchased items from other stores in the network.
- `publication`: `Publication` — The sales channel that the order was created from, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale).
- `purchasingEntity`: `PurchasingEntity` — The business entity that placed the order, including company details and purchasing relationships.
- `refundDiscrepancySet`: `MoneyBag!` — The difference between the suggested and actual refund amount of all refunds that have been applied to the order.
- `refundable`: `Boolean!` — Whether the order can be refunded based on its payment transactions.
- `refunds`: `[Refund!]!` — A list of refunds that have been applied to the order.
- `registeredSourceUrl`: `URL` — The URL of the source that the order originated from, if found in the domain registry. Returns `null` if the source URL isn't in the domain registry.
- `requiresShipping`: `Boolean!` — Whether the order requires physical shipping to the customer.
- `restockable`: `Boolean!` — Whether any line items on the order can be restocked into inventory.
- `retailLocation`: `Location` — The physical location where a retail order is created or completed, except for draft POS orders completed using the "mark as paid" flow in the Shopify admin, which return `null`. Transactions associated with the order might have been processed at a different location.
- `returnStatus`: `OrderReturnStatus!` — The order's aggregated return status for display purposes.
- `returns`: `ReturnConnection!` — The returns associated with the order.
- `risk`: `OrderRiskSummary!` — The risk assessment summary for the order.
- `shippingAddress`: `MailingAddress` — The shipping address where the order will be delivered.
- `shippingLine`: `ShippingLine` — A summary of all shipping costs on the order.
- `shippingLines`: `ShippingLineConnection!` — The shipping methods applied to the order.
- `shopifyProtect`: `ShopifyProtectOrderSummary` — The Shopify Protect details for the order, including fraud protection status and coverage information.
- `sourceIdentifier`: `String` — A unique POS or third party order identifier.
- `sourceName`: `String` — The name of the source associated with the order, such as "web", "mobile_app", or "pos". Use this field to identify the platform where the order was placed.
- `staffMember`: `StaffMember` — The staff member who created or is responsible for the order.
- `statusPageUrl`: `URL!` — The URL where customers can check their order's current status, including tracking information and delivery updates.
- `subtotalLineItemsQuantity`: `Int!` — The sum of quantities for all line items that contribute to the order's subtotal price.
- `subtotalPriceSet`: `MoneyBag` — The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies.
- `suggestedRefund`: `SuggestedRefund` — A calculated refund suggestion for the order based on specified line items, shipping, and duties.
- `tags`: `[String!]!` — A comma separated list of tags associated with the order. Updating `tags` overwrites
- `taxExempt`: `Boolean!` — Whether taxes are exempt on the order.
- `taxLines`: `[TaxLine!]!` — A list of all tax lines applied to line items on the order, before returns.
- `taxesIncluded`: `Boolean!` — Whether taxes are included in the subtotal price of the order.
- `test`: `Boolean!` — Whether the order is a test.
- `totalCapturableSet`: `MoneyBag!` — The authorized amount that's uncaptured or undercaptured, in shop and presentment currencies.
- `totalCashRoundingAdjustment`: `CashRoundingAdjustment!` — The total rounding adjustment applied to payments or refunds for an order involving cash payments. Applies to some countries where cash transactions are rounded to the nearest currency denomination.
- `totalDiscountsSet`: `MoneyBag` — The total amount discounted on the order before returns, in shop and presentment currencies.
- `totalOutstandingSet`: `MoneyBag!` — The total amount not yet transacted for the order, in shop and presentment currencies.
- `totalPriceSet`: `MoneyBag!` — The total price of the order, before returns, in shop and presentment currencies.
- `totalReceivedSet`: `MoneyBag!` — The total amount received from the customer before returns, in shop and presentment currencies.
- `totalRefundedSet`: `MoneyBag!` — The total amount that was refunded, in shop and presentment currencies.
- `totalRefundedShippingSet`: `MoneyBag!` — The total amount of shipping that was refunded, in shop and presentment currencies.
- `totalShippingPriceSet`: `MoneyBag!` — The total shipping costs returned to the customer, in shop and presentment currencies. This includes fees and any related discounts that were refunded.
- `totalTaxSet`: `MoneyBag` — The total tax amount before returns, in shop and presentment currencies.
- `totalTipReceivedSet`: `MoneyBag!` — The sum of all tip amounts for the order, in shop and presentment currencies.
- `totalWeight`: `UnsignedInt64` — The total weight of the order before returns, in grams.
- `transactions`: `[OrderTransaction!]!` — A list of transactions associated with the order.
- `transactionsCount`: `Count` — The number of transactions associated with the order.
- `unpaid`: `Boolean!` — Whether no payments have been made for the order.
- `updatedAt`: `DateTime!` — The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was last modified.

## Related Types

- [AdditionalFee](../types/objects/AdditionalFee.md)
- [Attribute](../types/objects/Attribute.md)
- [BusinessEntity](../types/objects/BusinessEntity.md)
- [CashRoundingAdjustment](../types/objects/CashRoundingAdjustment.md)
- [Channel](../types/objects/Channel.md)
- [ChannelInformation](../types/objects/ChannelInformation.md)
- [Count](../types/objects/Count.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [Customer](../types/objects/Customer.md)
- [CustomerJourney](../types/objects/CustomerJourney.md)
- [CustomerJourneySummary](../types/objects/CustomerJourneySummary.md)
- [Fulfillment](../types/objects/Fulfillment.md)
- [Location](../types/objects/Location.md)
- [MailingAddress](../types/objects/MailingAddress.md)
- [Metafield](../types/objects/Metafield.md)
- [MoneyBag](../types/objects/MoneyBag.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Order](../types/objects/Order.md)
- [OrderApp](../types/objects/OrderApp.md)
- [OrderCancelReason](../types/enums/OrderCancelReason.md)
- [OrderCancellation](../types/objects/OrderCancellation.md)
- [OrderDisplayFinancialStatus](../types/enums/OrderDisplayFinancialStatus.md)
- [OrderDisplayFulfillmentStatus](../types/enums/OrderDisplayFulfillmentStatus.md)
- [OrderDisputeSummary](../types/objects/OrderDisputeSummary.md)
- [OrderIdentifierInput](../types/inputs/OrderIdentifierInput.md)
- [OrderPaymentCollectionDetails](../types/objects/OrderPaymentCollectionDetails.md)
- [OrderReturnStatus](../types/enums/OrderReturnStatus.md)
- [OrderRisk](../types/objects/OrderRisk.md)
- [OrderRiskLevel](../types/enums/OrderRiskLevel.md)
- [OrderRiskSummary](../types/objects/OrderRiskSummary.md)
- [OrderTransaction](../types/objects/OrderTransaction.md)
- [PaymentTerms](../types/objects/PaymentTerms.md)
- [Publication](../types/objects/Publication.md)
- [PurchasingEntity](../types/unions/PurchasingEntity.md)
- [Refund](../types/objects/Refund.md)
- [ResourceAlert](../types/objects/ResourceAlert.md)
- [ShippingLine](../types/objects/ShippingLine.md)
- [ShopifyProtectOrderSummary](../types/objects/ShopifyProtectOrderSummary.md)
- [StaffMember](../types/objects/StaffMember.md)
- [SuggestedRefund](../types/objects/SuggestedRefund.md)
- [TaxLine](../types/objects/TaxLine.md)

## Example Query

```graphql
query OrderByIdentifier($identifier: OrderIdentifierInput!) {
  orderByIdentifier(identifier: $identifier) {
    id
    billingAddressMatchesShippingAddress
    canMarkAsPaid
    canNotifyCustomer
    cancelledAt
    capturable
  }
}
```
