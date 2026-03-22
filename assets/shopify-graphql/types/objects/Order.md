# Object: `Order`

The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

Use the `Order` object when you need to:

- Display order details on customer account pages or admin dashboards.
- Create orders for phone sales, wholesale customers, or subscription services.
- Update order information like shipping addresses, notes, or fulfillment status.
- Process returns, exchanges, and partial refunds.
- Generate invoices, receipts, and shipping labels.

The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

> Note:
> Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records,
> then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted
> access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

> Caution:
> Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

**Implements:** `CommentEventSubject`, `HasEvents`, `HasLocalizationExtensions`, `HasLocalizedFields`, `HasMetafieldDefinitions`, `HasMetafields`, `LegacyInteroperability`, `Node`

## Fields

- `additionalFees`: `[AdditionalFee!]!` — A list of additional fees applied to an order, such as duties, import fees, or [tax lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.additionalFees.taxLines).
- `agreements` `(first, after, last, before, reverse, query)`: `SalesAgreementConnection!` — A list of sales agreements associated with the order, such as contracts defining payment terms, or delivery schedules between merchants and customers.
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
- `cartDiscountAmount`: `Money` *(deprecated)* — The total discount amount that applies to the entire order in shop currency, before returns, refunds, order edits, and cancellations.
- `cartDiscountAmountSet`: `MoneyBag` — The total discount amount applied at the time the order was created, displayed in both shop and presentment currencies, before returns, refunds, order edits, and cancellations. This field only includes discounts applied to the entire order.
- `channel`: `Channel` *(deprecated)* — The sales channel from which an order originated, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale).
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
- `customerJourney`: `CustomerJourney` *(deprecated)* — The customer's visits and interactions with the online store before placing the order.
- `customerJourneySummary`: `CustomerJourneySummary` — The customer's visits and interactions with the online store before placing the order.
- `customerLocale`: `String` — The customer's language and region preference at the time of purchase. For example, "en" for English, "fr-CA" for French (Canada), or "es-MX" for Spanish (Mexico).
- `discountApplications` `(first, after, last, before, reverse)`: `DiscountApplicationConnection!` — A list of discounts that are applied to the order, excluding order edits and refunds.
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
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — A list of events associated with the order. Events track significant changes and activities related to the order, such as creation, payment, fulfillment, and cancellation.
- `exchangeV2s` `(first, after, last, before, reverse, query)`: `ExchangeV2Connection!` *(deprecated)* — A list of ExchangeV2s for the order.
- `fulfillable`: `Boolean!` — Whether there are line items that can be fulfilled.
- `fulfillmentOrders` `(displayable, first, after, last, before, reverse, query)`: `FulfillmentOrderConnection!` — A list of [fulfillment orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) for an order.
- `fulfillments` `(first, query)`: `[Fulfillment!]!` — A list of shipments for the order. Fulfillments represent the physical shipment of products to customers.
- `fulfillmentsCount`: `Count` — The total number of fulfillments for the order, including canceled ones.
- `fullyPaid`: `Boolean!` — Whether the order has been paid in full. This field returns `true` when the total amount received equals or exceeds the order total.
- `hasTimelineComment`: `Boolean!` — Whether the merchant has added a timeline comment to the order.
- `id`: `ID!` — A globally-unique ID.
- `landingPageDisplayText`: `String` *(deprecated)* — The URL of the first page of the online store that the customer visited before they submitted the order.
- `landingPageUrl`: `URL` *(deprecated)* — The first page of the online store that the customer visited before they submitted the order.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `lineItems` `(first, after, last, before, reverse)`: `LineItemConnection!` — A list of the order's line items. Line items represent the individual products and quantities that make up the order.
- `localizationExtensions` `(countryCodes, purposes, first, after, last, before, reverse)`: `LocalizationExtensionConnection!` *(deprecated)* — List of localization extensions for the resource.
- `localizedFields` `(countryCodes, purposes, first, after, last, before, reverse)`: `LocalizedFieldConnection!` — List of localized fields for the resource.
- `merchantBusinessEntity`: `BusinessEntity!` — The legal business structure that the merchant operates under for this order, such as an LLC, corporation, or partnership.
- `merchantEditable`: `Boolean!` — Whether the order can be edited by the merchant. Returns `false` for orders that can't be modified, such as canceled orders or orders with specific payment statuses.
- `merchantEditableErrors`: `[String!]!` — A list of reasons why the order can't be edited. For example, canceled orders can't be edited.
- `merchantOfRecordApp`: `OrderApp` — The application acting as the Merchant of Record for the order. The Merchant of Record is responsible for tax collection and remittance.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The unique identifier for the order that appears on the order page in the Shopify admin and the **Order status** page.
- `netPayment`: `Money!` *(deprecated)* — The net payment for the order, based on the total amount received minus the total amount refunded, in shop currency.
- `netPaymentSet`: `MoneyBag!` — The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies.
- `nonFulfillableLineItems` `(first, after, last, before, reverse)`: `LineItemConnection!` — A list of line items that can't be fulfilled.
- `note`: `String` — The note associated with the order.
- `number`: `Int!` — The order number used to generate the name using the store's configured order number prefix/suffix. This number isn't guaranteed to follow a consecutive integer sequence (e.g. 1, 2, 3..), nor is it guaranteed to be unique across multiple stores, or even for a single store.
- `originalTotalAdditionalFeesSet`: `MoneyBag` — The total amount of all additional fees, such as import fees or taxes, that were applied when an order was created.
- `originalTotalDutiesSet`: `MoneyBag` — The total amount of duties calculated when an order was created, before any modifications. Modifications include returns, refunds, order edits, and cancellations. Use [`currentTotalDutiesSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDutiesSet) to retrieve the current duties amount after adjustments.
- `originalTotalPriceSet`: `MoneyBag!` — The total price of the order at the time of order creation, in shop and presentment currencies.
- `paymentCollectionDetails`: `OrderPaymentCollectionDetails!` — The payment collection details for the order, including payment status, outstanding amounts, and collection information.
- `paymentGatewayNames`: `[String!]!` — A list of the names of all payment gateways used for the order.
- `paymentTerms`: `PaymentTerms` — The payment terms associated with the order, such as net payment due dates or early payment discounts. Payment terms define when and how an order should be paid. Returns `null` if no specific payment terms were set for the order.
- `phone`: `String` — The phone number associated with the customer for this order.
- `physicalLocation`: `Location` *(deprecated)* — The fulfillment location that was assigned when the order was created.
- `poNumber`: `String` — The purchase order (PO) number that's associated with an order.
- `presentmentCurrencyCode`: `CurrencyCode!` — The currency used by the customer when placing the order. For example, "USD", "EUR", or "CAD".
- `processedAt`: `DateTime!` — The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was processed.
- `productNetwork`: `Boolean!` — Whether the customer also purchased items from other stores in the network.
- `publication`: `Publication` — The sales channel that the order was created from, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale).
- `purchasingEntity`: `PurchasingEntity` — The business entity that placed the order, including company details and purchasing relationships.
- `referralCode`: `String` *(deprecated)* — The marketing referral code from the link that the customer clicked to visit the store.
- `referrerDisplayText`: `String` *(deprecated)* — A web domain or short description of the source that sent the customer to your online store. For example, "shopify.com" or "email".
- `referrerUrl`: `URL` *(deprecated)* — The URL of the webpage where the customer clicked a link that sent them to your online store.
- `refundDiscrepancySet`: `MoneyBag!` — The difference between the suggested and actual refund amount of all refunds that have been applied to the order.
- `refundable`: `Boolean!` — Whether the order can be refunded based on its payment transactions.
- `refunds` `(first)`: `[Refund!]!` — A list of refunds that have been applied to the order.
- `registeredSourceUrl`: `URL` — The URL of the source that the order originated from, if found in the domain registry. Returns `null` if the source URL isn't in the domain registry.
- `requiresShipping`: `Boolean!` — Whether the order requires physical shipping to the customer.
- `restockable`: `Boolean!` — Whether any line items on the order can be restocked into inventory.
- `retailLocation`: `Location` — The physical location where a retail order is created or completed, except for draft POS orders completed using the "mark as paid" flow in the Shopify admin, which return `null`. Transactions associated with the order might have been processed at a different location.
- `returnStatus`: `OrderReturnStatus!` — The order's aggregated return status for display purposes.
- `returns` `(first, after, last, before, reverse, query)`: `ReturnConnection!` — The returns associated with the order.
- `risk`: `OrderRiskSummary!` — The risk assessment summary for the order.
- `riskLevel`: `OrderRiskLevel!` *(deprecated)* — The fraud risk level of the order.
- `risks` `(first)`: `[OrderRisk!]!` *(deprecated)* — A list of risks associated with the order.
- `shippingAddress`: `MailingAddress` — The shipping address where the order will be delivered.
- `shippingLine`: `ShippingLine` — A summary of all shipping costs on the order.
- `shippingLines` `(includeRemovals, first, after, last, before, reverse)`: `ShippingLineConnection!` — The shipping methods applied to the order.
- `shopifyProtect`: `ShopifyProtectOrderSummary` — The Shopify Protect details for the order, including fraud protection status and coverage information.
- `sourceIdentifier`: `String` — A unique POS or third party order identifier.
- `sourceName`: `String` — The name of the source associated with the order, such as "web", "mobile_app", or "pos". Use this field to identify the platform where the order was placed.
- `staffMember`: `StaffMember` — The staff member who created or is responsible for the order.
- `statusPageUrl` `(audience, notificationUsage)`: `URL!` — The URL where customers can check their order's current status, including tracking information and delivery updates.
- `subtotalLineItemsQuantity`: `Int!` — The sum of quantities for all line items that contribute to the order's subtotal price.
- `subtotalPrice`: `Money` *(deprecated)* — The sum of the prices for all line items after discounts and before returns, in shop currency.
- `subtotalPriceSet`: `MoneyBag` — The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies.
- `suggestedRefund` `(shippingAmount, refundShipping, refundLineItems, refundDuties, suggestFullRefund, refundMethodAllocation)`: `SuggestedRefund` — A calculated refund suggestion for the order based on specified line items, shipping, and duties.
- `tags`: `[String!]!` — A comma separated list of tags associated with the order. Updating `tags` overwrites
- `taxExempt`: `Boolean!` — Whether taxes are exempt on the order.
- `taxLines`: `[TaxLine!]!` — A list of all tax lines applied to line items on the order, before returns.
- `taxesIncluded`: `Boolean!` — Whether taxes are included in the subtotal price of the order.
- `test`: `Boolean!` — Whether the order is a test.
- `totalCapturable`: `Money!` *(deprecated)* — The authorized amount that's uncaptured or undercaptured, in shop currency.
- `totalCapturableSet`: `MoneyBag!` — The authorized amount that's uncaptured or undercaptured, in shop and presentment currencies.
- `totalCashRoundingAdjustment`: `CashRoundingAdjustment!` — The total rounding adjustment applied to payments or refunds for an order involving cash payments. Applies to some countries where cash transactions are rounded to the nearest currency denomination.
- `totalDiscounts`: `Money` *(deprecated)* — The total amount discounted on the order before returns, in shop currency.
- `totalDiscountsSet`: `MoneyBag` — The total amount discounted on the order before returns, in shop and presentment currencies.
- `totalOutstandingSet`: `MoneyBag!` — The total amount not yet transacted for the order, in shop and presentment currencies.
- `totalPrice`: `Money!` *(deprecated)* — The total price of the order, before returns, in shop currency.
- `totalPriceSet`: `MoneyBag!` — The total price of the order, before returns, in shop and presentment currencies.
- `totalReceived`: `Money!` *(deprecated)* — The total amount received from the customer before returns, in shop currency.
- `totalReceivedSet`: `MoneyBag!` — The total amount received from the customer before returns, in shop and presentment currencies.
- `totalRefunded`: `Money!` *(deprecated)* — The total amount that was refunded, in shop currency.
- `totalRefundedSet`: `MoneyBag!` — The total amount that was refunded, in shop and presentment currencies.
- `totalRefundedShippingSet`: `MoneyBag!` — The total amount of shipping that was refunded, in shop and presentment currencies.
- `totalShippingPrice`: `Money!` *(deprecated)* — The total shipping amount before discounts and returns, in shop currency.
- `totalShippingPriceSet`: `MoneyBag!` — The total shipping costs returned to the customer, in shop and presentment currencies. This includes fees and any related discounts that were refunded.
- `totalTax`: `Money` *(deprecated)* — The total tax amount before returns, in shop currency.
- `totalTaxSet`: `MoneyBag` — The total tax amount before returns, in shop and presentment currencies.
- `totalTipReceived`: `MoneyV2!` *(deprecated)* — The sum of all tip amounts for the order, in shop currency.
- `totalTipReceivedSet`: `MoneyBag!` — The sum of all tip amounts for the order, in shop and presentment currencies.
- `totalWeight`: `UnsignedInt64` — The total weight of the order before returns, in grams.
- `transactions` `(first, capturable, manuallyResolvable)`: `[OrderTransaction!]!` — A list of transactions associated with the order.
- `transactionsCount`: `Count` — The number of transactions associated with the order.
- `unpaid`: `Boolean!` — Whether no payments have been made for the order.
- `updatedAt`: `DateTime!` — The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was last modified.

## Related Types

- [AdditionalFee](../../types/objects/AdditionalFee.md)
- [Attribute](../../types/objects/Attribute.md)
- [Audience](../../types/enums/Audience.md)
- [BusinessEntity](../../types/objects/BusinessEntity.md)
- [CashRoundingAdjustment](../../types/objects/CashRoundingAdjustment.md)
- [Channel](../../types/objects/Channel.md)
- [ChannelInformation](../../types/objects/ChannelInformation.md)
- [Count](../../types/objects/Count.md)
- [CountryCode](../../types/enums/CountryCode.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [Customer](../../types/objects/Customer.md)
- [CustomerJourney](../../types/objects/CustomerJourney.md)
- [CustomerJourneySummary](../../types/objects/CustomerJourneySummary.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Fulfillment](../../types/objects/Fulfillment.md)
- [LocalizationExtensionPurpose](../../types/enums/LocalizationExtensionPurpose.md)
- [LocalizedFieldPurpose](../../types/enums/LocalizedFieldPurpose.md)
- [Location](../../types/objects/Location.md)
- [MailingAddress](../../types/objects/MailingAddress.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [NotificationUsage](../../types/enums/NotificationUsage.md)
- [OrderApp](../../types/objects/OrderApp.md)
- [OrderCancelReason](../../types/enums/OrderCancelReason.md)
- [OrderCancellation](../../types/objects/OrderCancellation.md)
- [OrderDisplayFinancialStatus](../../types/enums/OrderDisplayFinancialStatus.md)
- [OrderDisplayFulfillmentStatus](../../types/enums/OrderDisplayFulfillmentStatus.md)
- [OrderDisputeSummary](../../types/objects/OrderDisputeSummary.md)
- [OrderPaymentCollectionDetails](../../types/objects/OrderPaymentCollectionDetails.md)
- [OrderReturnStatus](../../types/enums/OrderReturnStatus.md)
- [OrderRisk](../../types/objects/OrderRisk.md)
- [OrderRiskLevel](../../types/enums/OrderRiskLevel.md)
- [OrderRiskSummary](../../types/objects/OrderRiskSummary.md)
- [OrderTransaction](../../types/objects/OrderTransaction.md)
- [PaymentTerms](../../types/objects/PaymentTerms.md)
- [Publication](../../types/objects/Publication.md)
- [PurchasingEntity](../../types/unions/PurchasingEntity.md)
- [Refund](../../types/objects/Refund.md)
- [RefundDutyInput](../../types/inputs/RefundDutyInput.md)
- [RefundLineItemInput](../../types/inputs/RefundLineItemInput.md)
- [RefundMethodAllocation](../../types/enums/RefundMethodAllocation.md)
- [ResourceAlert](../../types/objects/ResourceAlert.md)
- [ShippingLine](../../types/objects/ShippingLine.md)
- [ShopifyProtectOrderSummary](../../types/objects/ShopifyProtectOrderSummary.md)
- [StaffMember](../../types/objects/StaffMember.md)
- [SuggestedRefund](../../types/objects/SuggestedRefund.md)
- [TaxLine](../../types/objects/TaxLine.md)
