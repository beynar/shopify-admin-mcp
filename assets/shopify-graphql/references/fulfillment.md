# Fulfillment: Fulfillment, shipping, delivery, returns, reverse logistics

## Queries (22)

- **[carrierService](../queries/carrierService.md)** → `DeliveryCarrierService` `(id)`
  Returns a `DeliveryCarrierService` resource by ID.
- **[carrierServices](../queries/carrierServices.md)** → `DeliveryCarrierServiceConnection!` `(first, after, last, before, reverse, sortKey, query)`
  A paginated list of carrier services configured for the shop. Carrier services provide real-time shipping rates from external providers like FedEx, UP
- **[deliveryCustomization](../queries/deliveryCustomization.md)** → `DeliveryCustomization` `(id)`
  The delivery customization.
- **[deliveryCustomizations](../queries/deliveryCustomizations.md)** → `DeliveryCustomizationConnection!` `(first, after, last, before, reverse, query)`
  The delivery customizations.
- **[deliveryProfile](../queries/deliveryProfile.md)** → `DeliveryProfile` `(id)`
  Retrieves a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) by ID. Delivery profiles group shipping set
- **[deliveryProfiles](../queries/deliveryProfiles.md)** → `DeliveryProfileConnection!` `(merchantOwnedOnly, first, after, last, before, reverse)`
  Returns a paginated list of [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) objects for the shop. Deliv
- **[deliveryPromiseParticipants](../queries/deliveryPromiseParticipants.md)** → `DeliveryPromiseParticipantConnection` `(ownerIds, brandedPromiseHandle, first, after, last, before, reverse)`
  Returns delivery promise participants.
- **[deliveryPromiseProvider](../queries/deliveryPromiseProvider.md)** → `DeliveryPromiseProvider` `(locationId)`
  Lookup a delivery promise provider.
- **[deliveryPromiseSettings](../queries/deliveryPromiseSettings.md)** → `DeliveryPromiseSetting!`
  Represents the delivery promise settings for a shop.
- **[deliverySettings](../queries/deliverySettings.md)** → `DeliverySetting`
  Returns the shop-wide shipping settings.
- **[fulfillment](../queries/fulfillment.md)** → `Fulfillment` `(id)`
  Retrieves a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) by its ID. A fulfillment is a record that the merch
- **[fulfillmentConstraintRules](../queries/fulfillmentConstraintRules.md)** → `[FulfillmentConstraintRule!]!`
  The fulfillment constraint rules that belong to a shop.
- **[fulfillmentOrder](../queries/fulfillmentOrder.md)** → `FulfillmentOrder` `(id)`
  Returns a `FulfillmentOrder` resource by ID.
- **[fulfillmentOrders](../queries/fulfillmentOrders.md)** → `FulfillmentOrderConnection!` `(includeClosed, first, after, last, before, reverse, sortKey, query)`
  The paginated list of all fulfillment orders.
- **[fulfillmentService](../queries/fulfillmentService.md)** → `FulfillmentService` `(id)`
  Returns a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) by its ID. The service can manage inven
- **[return](../queries/return.md)** → `Return` `(id)`
  Retrieves a return by its ID. A return represents the intent of a buyer to ship one or more items from an
- **[returnCalculate](../queries/returnCalculate.md)** → `CalculatedReturn` `(input)`
  Calculates the financial outcome of a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) without creating it. Use this query
- **[returnReasonDefinitions](../queries/returnReasonDefinitions.md)** → `ReturnReasonDefinitionConnection!` `(ids, handles, first, after, last, before, reverse, sortKey, query)`
  Returns the full library of available return reason definitions.
- **[returnableFulfillment](../queries/returnableFulfillment.md)** → `ReturnableFulfillment` `(id)`
  Returns a `ReturnableFulfillment` resource by ID.
- **[returnableFulfillments](../queries/returnableFulfillments.md)** → `ReturnableFulfillmentConnection!` `(orderId, first, after, last, before, reverse)`
  List of returnable fulfillments.
- **[reverseDelivery](../queries/reverseDelivery.md)** → `ReverseDelivery` `(id)`
  Lookup a reverse delivery by ID.
- **[reverseFulfillmentOrder](../queries/reverseFulfillmentOrder.md)** → `ReverseFulfillmentOrder` `(id)`
  Lookup a reverse fulfillment order by ID.

## Mutations (60)

- **[carrierServiceCreate](../mutations/carrierServiceCreate.md)** → `CarrierServiceCreatePayload` `(input)`
  Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers
- **[carrierServiceDelete](../mutations/carrierServiceDelete.md)** → `CarrierServiceDeletePayload` `(id)`
  Removes an existing carrier service.
- **[carrierServiceUpdate](../mutations/carrierServiceUpdate.md)** → `CarrierServiceUpdatePayload` `(input)`
  Updates a carrier service. Only the app that creates a carrier service can update it.
- **[deliveryCustomizationActivation](../mutations/deliveryCustomizationActivation.md)** → `DeliveryCustomizationActivationPayload` `(ids, enabled)`
  Activates and deactivates delivery customizations.
- **[deliveryCustomizationCreate](../mutations/deliveryCustomizationCreate.md)** → `DeliveryCustomizationCreatePayload` `(deliveryCustomization)`
  Creates a delivery customization.
- **[deliveryCustomizationDelete](../mutations/deliveryCustomizationDelete.md)** → `DeliveryCustomizationDeletePayload` `(id)`
  Creates a delivery customization.
- **[deliveryCustomizationUpdate](../mutations/deliveryCustomizationUpdate.md)** → `DeliveryCustomizationUpdatePayload` `(id, deliveryCustomization)`
  Updates a delivery customization.
- **[deliveryProfileCreate](../mutations/deliveryProfileCreate.md)** → `DeliveryProfileCreatePayload` `(profile)`
  Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific prod
- **[deliveryProfileRemove](../mutations/deliveryProfileRemove.md)** → `DeliveryProfileRemovePayload` `(id)`
  Enqueue the removal of a delivery profile.
- **[deliveryProfileUpdate](../mutations/deliveryProfileUpdate.md)** → `DeliveryProfileUpdatePayload` `(id, profile)`
  Updates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)'s configuration, including its shipping zones
- **[deliveryPromiseParticipantsUpdate](../mutations/deliveryPromiseParticipantsUpdate.md)** → `DeliveryPromiseParticipantsUpdatePayload` `(brandedPromiseHandle, ownersToAdd, ownersToRemove)`
  Updates the delivery promise participants by adding or removing owners based on a branded promise handle.
- **[deliveryPromiseProviderUpsert](../mutations/deliveryPromiseProviderUpsert.md)** → `DeliveryPromiseProviderUpsertPayload` `(active, fulfillmentDelay, timeZone, locationId)`
  Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.
- **[deliverySettingUpdate](../mutations/deliverySettingUpdate.md)** → `DeliverySettingUpdatePayload` `(setting)`
  Set the delivery settings for a shop.
- **[deliveryShippingOriginAssign](../mutations/deliveryShippingOriginAssign.md)** → `DeliveryShippingOriginAssignPayload` `(locationId)`
  Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.
- **[fulfillmentCancel](../mutations/fulfillmentCancel.md)** → `FulfillmentCancelPayload` `(id)`
  Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`Fu
- **[fulfillmentConstraintRuleCreate](../mutations/fulfillmentConstraintRuleCreate.md)** → `FulfillmentConstraintRuleCreatePayload` `(functionHandle, deliveryMethodTypes, metafields)`
  Creates a fulfillment constraint rule and its metafield.
- **[fulfillmentConstraintRuleDelete](../mutations/fulfillmentConstraintRuleDelete.md)** → `FulfillmentConstraintRuleDeletePayload` `(id)`
  Deletes a fulfillment constraint rule and its metafields.
- **[fulfillmentConstraintRuleUpdate](../mutations/fulfillmentConstraintRuleUpdate.md)** → `FulfillmentConstraintRuleUpdatePayload` `(id, deliveryMethodTypes)`
  Update a fulfillment constraint rule.
- **[fulfillmentCreate](../mutations/fulfillmentCreate.md)** → `FulfillmentCreatePayload` `(fulfillment, message)`
  Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fu
- **[fulfillmentCreateV2](../mutations/fulfillmentCreateV2.md)** → `FulfillmentCreateV2Payload` `(fulfillment, message)`
  Creates a fulfillment for one or many fulfillment orders.
- **[fulfillmentEventCreate](../mutations/fulfillmentEventCreate.md)** → `FulfillmentEventCreatePayload` `(fulfillmentEvent)`
  Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location o
- **[fulfillmentOrderAcceptCancellationRequest](../mutations/fulfillmentOrderAcceptCancellationRequest.md)** → `FulfillmentOrderAcceptCancellationRequestPayload` `(id, message)`
  Accept a cancellation request sent to a fulfillment service for a fulfillment order.
- **[fulfillmentOrderAcceptFulfillmentRequest](../mutations/fulfillmentOrderAcceptFulfillmentRequest.md)** → `FulfillmentOrderAcceptFulfillmentRequestPayload` `(id, message, estimatedShippedAt)`
  Accepts a fulfillment request that the fulfillment service has received for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/o
- **[fulfillmentOrderCancel](../mutations/fulfillmentOrderCancel.md)** → `FulfillmentOrderCancelPayload` `(id)`
  Cancels a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) and creates a replacement fulfillment order
- **[fulfillmentOrderClose](../mutations/fulfillmentOrderClose.md)** → `FulfillmentOrderClosePayload` `(id, message)`
  Marks an in-progress fulfillment order as incomplete,
- **[fulfillmentOrderHold](../mutations/fulfillmentOrderHold.md)** → `FulfillmentOrderHoldPayload` `(id, fulfillmentHold)`
  Applies a fulfillment hold on a fulfillment order.
- **[fulfillmentOrderLineItemsPreparedForPickup](../mutations/fulfillmentOrderLineItemsPreparedForPickup.md)** → `FulfillmentOrderLineItemsPreparedForPickupPayload` `(input)`
  Marks [fulfillment order line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem) as ready for customer pickup.
- **[fulfillmentOrderMerge](../mutations/fulfillmentOrderMerge.md)** → `FulfillmentOrderMergePayload` `(fulfillmentOrderMergeInputs)`
  Merges a set or multiple sets of fulfillment orders together into one based on
- **[fulfillmentOrderMove](../mutations/fulfillmentOrderMove.md)** → `FulfillmentOrderMovePayload` `(id, newLocationId, fulfillmentOrderLineItems)`
  Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.
- **[fulfillmentOrderOpen](../mutations/fulfillmentOrderOpen.md)** → `FulfillmentOrderOpenPayload` `(id)`
  Marks a scheduled fulfillment order as open.
- **[fulfillmentOrderRejectCancellationRequest](../mutations/fulfillmentOrderRejectCancellationRequest.md)** → `FulfillmentOrderRejectCancellationRequestPayload` `(id, message)`
  Rejects a cancellation request sent to a fulfillment service for a fulfillment order.
- **[fulfillmentOrderRejectFulfillmentRequest](../mutations/fulfillmentOrderRejectFulfillmentRequest.md)** → `FulfillmentOrderRejectFulfillmentRequestPayload` `(id, reason, message, lineItems)`
  Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.
- **[fulfillmentOrderReleaseHold](../mutations/fulfillmentOrderReleaseHold.md)** → `FulfillmentOrderReleaseHoldPayload` `(id, holdIds, externalId)`
  Releases the fulfillment hold on a fulfillment order.
- **[fulfillmentOrderReschedule](../mutations/fulfillmentOrderReschedule.md)** → `FulfillmentOrderReschedulePayload` `(id, fulfillAt)`
  Reschedules a scheduled fulfillment order.
- **[fulfillmentOrderSplit](../mutations/fulfillmentOrderSplit.md)** → `FulfillmentOrderSplitPayload` `(fulfillmentOrderSplits)`
  Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](h
- **[fulfillmentOrderSubmitCancellationRequest](../mutations/fulfillmentOrderSubmitCancellationRequest.md)** → `FulfillmentOrderSubmitCancellationRequestPayload` `(id, message)`
  Sends a cancellation request to the fulfillment service of a fulfillment order.
- **[fulfillmentOrderSubmitFulfillmentRequest](../mutations/fulfillmentOrderSubmitFulfillmentRequest.md)** → `FulfillmentOrderSubmitFulfillmentRequestPayload` `(id, message, notifyCustomer, fulfillmentOrderLineItems)`
  Sends a fulfillment request to the fulfillment service assigned to a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fu
- **[fulfillmentOrdersReroute](../mutations/fulfillmentOrdersReroute.md)** → `FulfillmentOrdersReroutePayload` `(fulfillmentOrderIds, includedLocationIds, excludedLocationIds)`
  Route the fulfillment orders to an alternative location, according to the shop's order routing settings. This involves:
- **[fulfillmentOrdersSetFulfillmentDeadline](../mutations/fulfillmentOrdersSetFulfillmentDeadline.md)** → `FulfillmentOrdersSetFulfillmentDeadlinePayload` `(fulfillmentOrderIds, fulfillmentDeadline)`
  Sets the latest date and time by which the fulfillment orders need to be fulfilled.
- **[fulfillmentServiceCreate](../mutations/fulfillmentServiceCreate.md)** → `FulfillmentServiceCreatePayload` `(name, callbackUrl, trackingSupport, inventoryManagement, requiresShippingMethod)`
  Creates a fulfillment service.
- **[fulfillmentServiceDelete](../mutations/fulfillmentServiceDelete.md)** → `FulfillmentServiceDeletePayload` `(id, destinationLocationId, inventoryAction)`
  Deletes a fulfillment service.
- **[fulfillmentServiceUpdate](../mutations/fulfillmentServiceUpdate.md)** → `FulfillmentServiceUpdatePayload` `(id, name, callbackUrl, trackingSupport, inventoryManagement, requiresShippingMethod)`
  Updates the [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) configuration, including its name, ca
- **[fulfillmentTrackingInfoUpdate](../mutations/fulfillmentTrackingInfoUpdate.md)** → `FulfillmentTrackingInfoUpdatePayload` `(fulfillmentId, trackingInfoInput, notifyCustomer)`
  Updates tracking information for a fulfillment, including the carrier name, tracking numbers, and tracking URLs. You can provide either single or mult
- **[fulfillmentTrackingInfoUpdateV2](../mutations/fulfillmentTrackingInfoUpdateV2.md)** → `FulfillmentTrackingInfoUpdateV2Payload` `(fulfillmentId, trackingInfoInput, notifyCustomer)`
  Updates tracking information for a fulfillment.
- **[returnApproveRequest](../mutations/returnApproveRequest.md)** → `ReturnApproveRequestPayload` `(input)`
  Approves a customer's return request.
- **[returnCancel](../mutations/returnCancel.md)** → `ReturnCancelPayload` `(id)`
  Cancels a return and restores the items back to being fulfilled.
- **[returnClose](../mutations/returnClose.md)** → `ReturnClosePayload` `(id)`
  Indicates a return is complete, either when a refund has been made and items restocked,
- **[returnCreate](../mutations/returnCreate.md)** → `ReturnCreatePayload` `(returnInput)`
  Creates a return from an existing order that has at least one fulfilled
- **[returnDeclineRequest](../mutations/returnDeclineRequest.md)** → `ReturnDeclineRequestPayload` `(input)`
  Declines a return on an order.
- **[returnLineItemRemoveFromReturn](../mutations/returnLineItemRemoveFromReturn.md)** → `ReturnLineItemRemoveFromReturnPayload` `(returnId, returnLineItems)`
  Removes return lines from a return.
- **[returnProcess](../mutations/returnProcess.md)** → `ReturnProcessPayload` `(input)`
  Processes a return by confirming which items customers return and exchange, handling their disposition, and optionally issuing refunds. This mutation 
- **[returnRefund](../mutations/returnRefund.md)** → `ReturnRefundPayload` `(returnRefundInput)`
  Creates a refund for items being returned when the return status is `OPEN` or `CLOSED`. This mutation processes the financial aspects of a return by r
- **[returnReopen](../mutations/returnReopen.md)** → `ReturnReopenPayload` `(id)`
  Reopens a closed return.
- **[returnRequest](../mutations/returnRequest.md)** → `ReturnRequestPayload` `(input)`
  Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve
- **[reverseDeliveryCreateWithShipping](../mutations/reverseDeliveryCreateWithShipping.md)** → `ReverseDeliveryCreateWithShippingPayload` `(reverseFulfillmentOrderId, reverseDeliveryLineItems, trackingInput, labelInput, notifyCustomer)`
  Creates a new reverse delivery with associated external shipping information.
- **[reverseDeliveryShippingUpdate](../mutations/reverseDeliveryShippingUpdate.md)** → `ReverseDeliveryShippingUpdatePayload` `(reverseDeliveryId, trackingInput, labelInput, notifyCustomer)`
  Updates a reverse delivery with associated external shipping information.
- **[reverseFulfillmentOrderDispose](../mutations/reverseFulfillmentOrderDispose.md)** → `ReverseFulfillmentOrderDisposePayload` `(dispositionInputs)`
  Disposes reverse fulfillment order line items.
- **[shippingPackageDelete](../mutations/shippingPackageDelete.md)** → `ShippingPackageDeletePayload` `(id)`
  Deletes a shipping package.
- **[shippingPackageMakeDefault](../mutations/shippingPackageMakeDefault.md)** → `ShippingPackageMakeDefaultPayload` `(id)`
  Set a shipping package as the default.
- **[shippingPackageUpdate](../mutations/shippingPackageUpdate.md)** → `ShippingPackageUpdatePayload` `(id, shippingPackage)`
  Updates a shipping package.
