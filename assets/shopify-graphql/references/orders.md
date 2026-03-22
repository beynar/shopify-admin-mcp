# Orders: Orders, draft orders, abandoned checkouts

## Queries (17)

- **[abandonedCheckouts](../queries/abandonedCheckouts.md)** → `AbandonedCheckoutConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a list of abandoned checkouts. A checkout is considered abandoned when a customer adds contact information but doesn't complete their purchase
- **[abandonedCheckoutsCount](../queries/abandonedCheckoutsCount.md)** → `Count` `(query, savedSearchId, limit)`
  Returns the count of abandoned checkouts for the given shop. Limited to a maximum of 10000 by default.
- **[abandonment](../queries/abandonment.md)** → `Abandonment` `(id)`
  Returns a `Abandonment` resource by ID.
- **[abandonmentByAbandonedCheckoutId](../queries/abandonmentByAbandonedCheckoutId.md)** → `Abandonment` `(abandonedCheckoutId)`
  Returns an Abandonment by the Abandoned Checkout ID.
- **[draftOrder](../queries/draftOrder.md)** → `DraftOrder` `(id)`
  Retrieves a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) by its ID.
- **[draftOrderAvailableDeliveryOptions](../queries/draftOrderAvailableDeliveryOptions.md)** → `DraftOrderAvailableDeliveryOptions!` `(input, search, localPickupFrom, localPickupCount, sessionToken)`
  Available delivery options for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) based on the provided input. The
- **[draftOrderSavedSearches](../queries/draftOrderSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  List of the shop's draft order saved searches.
- **[draftOrderTag](../queries/draftOrderTag.md)** → `DraftOrderTag` `(id)`
  Returns a `DraftOrderTag` resource by ID.
- **[draftOrders](../queries/draftOrders.md)** → `DraftOrderConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  List of saved draft orders.
- **[draftOrdersCount](../queries/draftOrdersCount.md)** → `Count` `(query, savedSearchId, limit)`
  Returns the number of draft orders that match the query. Limited to a maximum of 10000 by default.
- **[order](../queries/order.md)** → `Order` `(id)`
  The `order` query retrieves an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order) by its ID. This query provides access to compr
- **[orderByIdentifier](../queries/orderByIdentifier.md)** → `Order` `(identifier)`
  Return an order by an identifier.
- **[orderEditSession](../queries/orderEditSession.md)** → `OrderEditSession` `(id)`
  Returns a `OrderEditSession` resource by ID.
- **[orderPaymentStatus](../queries/orderPaymentStatus.md)** → `OrderPaymentStatus` `(paymentReferenceId, orderId)`
  Retrieves the status of a deferred payment by its payment reference ID. Use this query to monitor the processing status of payments that are initiated
- **[orderSavedSearches](../queries/orderSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  Returns [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) for orders in the shop. Saved searches store search qu
- **[orders](../queries/orders.md)** → `OrderConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a list of [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) placed in the store, including data such as order status, custo
- **[ordersCount](../queries/ordersCount.md)** → `Count` `(query, savedSearchId, limit)`
  Returns the number of [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) in the shop. You can filter orders using [search synta

## Mutations (40)

- **[abandonmentEmailStateUpdate](../mutations/abandonmentEmailStateUpdate.md)** → `AbandonmentEmailStateUpdatePayload` `(id, emailState, emailSentAt, emailStateChangeReason)`
  Updates the email state value for an abandonment.
- **[abandonmentUpdateActivitiesDeliveryStatuses](../mutations/abandonmentUpdateActivitiesDeliveryStatuses.md)** → `AbandonmentUpdateActivitiesDeliveryStatusesPayload` `(abandonmentId, marketingActivityId, deliveryStatus, deliveredAt, deliveryStatusChangeReason)`
  Updates the marketing activities delivery statuses for an abandonment.
- **[draftOrderBulkAddTags](../mutations/draftOrderBulkAddTags.md)** → `DraftOrderBulkAddTagsPayload` `(search, savedSearchId, ids, tags)`
  Adds tags to multiple draft orders.
- **[draftOrderBulkDelete](../mutations/draftOrderBulkDelete.md)** → `DraftOrderBulkDeletePayload` `(search, savedSearchId, ids)`
  Deletes multiple draft orders.
- **[draftOrderBulkRemoveTags](../mutations/draftOrderBulkRemoveTags.md)** → `DraftOrderBulkRemoveTagsPayload` `(search, savedSearchId, ids, tags)`
  Removes tags from multiple draft orders.
- **[draftOrderCalculate](../mutations/draftOrderCalculate.md)** → `DraftOrderCalculatePayload` `(input)`
  Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns prici
- **[draftOrderComplete](../mutations/draftOrderComplete.md)** → `DraftOrderCompletePayload` `(id, paymentGatewayId, sourceName)`
  Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and
- **[draftOrderCreate](../mutations/draftOrderCreate.md)** → `DraftOrderCreatePayload` `(input)`
  Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)
- **[draftOrderCreateFromOrder](../mutations/draftOrderCreateFromOrder.md)** → `DraftOrderCreateFromOrderPayload` `(orderId)`
  Creates a draft order from order.
- **[draftOrderDelete](../mutations/draftOrderDelete.md)** → `DraftOrderDeletePayload` `(input)`
  Deletes a draft order.
- **[draftOrderDuplicate](../mutations/draftOrderDuplicate.md)** → `DraftOrderDuplicatePayload` `(id)`
  Duplicates a draft order.
- **[draftOrderInvoicePreview](../mutations/draftOrderInvoicePreview.md)** → `DraftOrderInvoicePreviewPayload` `(id, email)`
  Previews a draft order invoice email.
- **[draftOrderInvoiceSend](../mutations/draftOrderInvoiceSend.md)** → `DraftOrderInvoiceSendPayload` `(id, email)`
  Sends an invoice email for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). The invoice includes a secure check
- **[draftOrderUpdate](../mutations/draftOrderUpdate.md)** → `DraftOrderUpdatePayload` `(id, input)`
  Updates a draft order.
- **[orderCancel](../mutations/orderCancel.md)** → `OrderCancelPayload` `(orderId, refundMethod, restock, reason, notifyCustomer, staffNote)`
  Cancels an order, with options for refunding, restocking inventory, and customer notification.
- **[orderCapture](../mutations/orderCapture.md)** → `OrderCapturePayload` `(input)`
  Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously
- **[orderClose](../mutations/orderClose.md)** → `OrderClosePayload` `(input)`
  Marks an open [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as closed. A closed order is one where merchants fulfill or c
- **[orderCreate](../mutations/orderCreate.md)** → `OrderCreatePayload` `(order, options)`
  Creates an order with attributes such as customer information, line items, and shipping and billing addresses.
- **[orderCreateMandatePayment](../mutations/orderCreateMandatePayment.md)** → `OrderCreateMandatePaymentPayload` `(id, paymentScheduleId, idempotencyKey, mandateId, amount, autoCapture)`
  Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.
- **[orderCreateManualPayment](../mutations/orderCreateManualPayment.md)** → `OrderCreateManualPaymentPayload` `(id, amount, paymentMethodName, processedAt)`
  Records a manual payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that isn't fully paid. Use this mutation to
- **[orderCustomerRemove](../mutations/orderCustomerRemove.md)** → `OrderCustomerRemovePayload` `(orderId)`
  Removes customer from an order.
- **[orderCustomerSet](../mutations/orderCustomerSet.md)** → `OrderCustomerSetPayload` `(orderId, customerId)`
  Sets a customer on an order.
- **[orderDelete](../mutations/orderDelete.md)** → `OrderDeletePayload` `(orderId)`
  Permanently deletes an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) from the store.
- **[orderEditAddCustomItem](../mutations/orderEditAddCustomItem.md)** → `OrderEditAddCustomItemPayload` `(id, title, locationId, price, quantity, taxable, requiresShipping)`
  Adds a custom line item to an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Custom line items represent product
- **[orderEditAddLineItemDiscount](../mutations/orderEditAddLineItemDiscount.md)** → `OrderEditAddLineItemDiscountPayload` `(id, lineItemId, discount)`
  Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount ca
- **[orderEditAddShippingLine](../mutations/orderEditAddShippingLine.md)** → `OrderEditAddShippingLinePayload` `(id, shippingLine)`
  Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipp
- **[orderEditAddVariant](../mutations/orderEditAddVariant.md)** → `OrderEditAddVariantPayload` `(id, variantId, locationId, quantity, allowDuplicates)`
  Adds a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) as a line item to an [`Order`](https://shopify.dev
- **[orderEditBegin](../mutations/orderEditBegin.md)** → `OrderEditBeginPayload` `(id)`
  Starts an order editing session that enables you to modify an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Thi
- **[orderEditCommit](../mutations/orderEditCommit.md)** → `OrderEditCommitPayload` `(id, notifyCustomer, staffNote)`
  Applies staged changes from an order editing session to the original order. This finalizes all modifications made during the edit session, including c
- **[orderEditRemoveDiscount](../mutations/orderEditRemoveDiscount.md)** → `OrderEditRemoveDiscountPayload` `(id, discountApplicationId)`
  Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit exist
- **[orderEditRemoveLineItemDiscount](../mutations/orderEditRemoveLineItemDiscount.md)** → `OrderEditRemoveLineItemDiscountPayload` `(id, discountApplicationId)`
  Removes a line item discount that was applied as part of an order edit.
- **[orderEditRemoveShippingLine](../mutations/orderEditRemoveShippingLine.md)** → `OrderEditRemoveShippingLinePayload` `(id, shippingLineId)`
  Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit exi
- **[orderEditSetQuantity](../mutations/orderEditSetQuantity.md)** → `OrderEditSetQuantityPayload` `(id, lineItemId, quantity, restock)`
  Sets the quantity of a line item on an order that's being edited. Use this mutation to increase, decrease, or remove items by adjusting their quantiti
- **[orderEditUpdateDiscount](../mutations/orderEditUpdateDiscount.md)** → `OrderEditUpdateDiscountPayload` `(id, discount, discountApplicationId)`
  Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, re
- **[orderEditUpdateShippingLine](../mutations/orderEditUpdateShippingLine.md)** → `OrderEditUpdateShippingLinePayload` `(id, shippingLine, shippingLineId)`
  Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit 
- **[orderInvoiceSend](../mutations/orderInvoiceSend.md)** → `OrderInvoiceSendPayload` `(id, email)`
  Sends an email invoice for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).
- **[orderMarkAsPaid](../mutations/orderMarkAsPaid.md)** → `OrderMarkAsPaidPayload` `(input)`
  Marks an order as paid by recording a payment transaction for the outstanding amount.
- **[orderOpen](../mutations/orderOpen.md)** → `OrderOpenPayload` `(input)`
  Opens a closed order.
- **[orderRiskAssessmentCreate](../mutations/orderRiskAssessmentCreate.md)** → `OrderRiskAssessmentCreatePayload` `(orderRiskAssessmentInput)`
  Create a risk assessment for an order.
- **[orderUpdate](../mutations/orderUpdate.md)** → `OrderUpdatePayload` `(input)`
  Updates the attributes of an order, such as the customer's email, the shipping address for the order,
