# Subscriptions: Subscription contracts, billing, delivery schedules

## Queries (8)

- **[subscriptionBillingAttempt](../queries/subscriptionBillingAttempt.md)** → `SubscriptionBillingAttempt` `(id)`
  Returns a `SubscriptionBillingAttempt` resource by ID.
- **[subscriptionBillingAttempts](../queries/subscriptionBillingAttempts.md)** → `SubscriptionBillingAttemptConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns subscription billing attempts on a store.
- **[subscriptionBillingCycle](../queries/subscriptionBillingCycle.md)** → `SubscriptionBillingCycle` `(billingCycleInput)`
  Returns a subscription billing cycle found either by cycle index or date.
- **[subscriptionBillingCycleBulkResults](../queries/subscriptionBillingCycleBulkResults.md)** → `SubscriptionBillingCycleConnection!` `(jobId, first, after, last, before, reverse)`
  Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID.
- **[subscriptionBillingCycles](../queries/subscriptionBillingCycles.md)** → `SubscriptionBillingCycleConnection!` `(contractId, billingCyclesDateRangeSelector, billingCyclesIndexRangeSelector, first, after, last, before, reverse, sortKey)`
  Returns subscription billing cycles for a contract ID.
- **[subscriptionContract](../queries/subscriptionContract.md)** → `SubscriptionContract` `(id)`
  Retrieves a [`SubscriptionContract`](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract) by ID.
- **[subscriptionContracts](../queries/subscriptionContracts.md)** → `SubscriptionContractConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns a [`SubscriptionContractConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractConnection) containing [sub
- **[subscriptionDraft](../queries/subscriptionDraft.md)** → `SubscriptionDraft` `(id)`
  Returns a Subscription Draft resource by ID.

## Mutations (33)

- **[subscriptionBillingAttemptCreate](../mutations/subscriptionBillingAttemptCreate.md)** → `SubscriptionBillingAttemptCreatePayload` `(subscriptionContractId, subscriptionBillingAttemptInput)`
  Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). Th
- **[subscriptionBillingCycleBulkCharge](../mutations/subscriptionBillingCycleBulkCharge.md)** → `SubscriptionBillingCycleBulkChargePayload` `(billingAttemptExpectedDateRange, filters, inventoryPolicy)`
  Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/obj
- **[subscriptionBillingCycleBulkSearch](../mutations/subscriptionBillingCycleBulkSearch.md)** → `SubscriptionBillingCycleBulkSearchPayload` `(billingAttemptExpectedDateRange, filters)`
  Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/Subscri
- **[subscriptionBillingCycleCharge](../mutations/subscriptionBillingCycleCharge.md)** → `SubscriptionBillingCycleChargePayload` `(subscriptionContractId, billingCycleSelector, inventoryPolicy)`
  Creates a new subscription billing attempt for a specified billing cycle. This is the alternative mutation for [subscriptionBillingAttemptCreate](http
- **[subscriptionBillingCycleContractDraftCommit](../mutations/subscriptionBillingCycleContractDraftCommit.md)** → `SubscriptionBillingCycleContractDraftCommitPayload` `(draftId)`
  Commits the updates of a Subscription Billing Cycle Contract draft.
- **[subscriptionBillingCycleContractDraftConcatenate](../mutations/subscriptionBillingCycleContractDraftConcatenate.md)** → `SubscriptionBillingCycleContractDraftConcatenatePayload` `(draftId, concatenatedBillingCycleContracts)`
  Concatenates a contract to a Subscription Draft.
- **[subscriptionBillingCycleContractEdit](../mutations/subscriptionBillingCycleContractEdit.md)** → `SubscriptionBillingCycleContractEditPayload` `(billingCycleInput)`
  Edit the contents of a subscription contract for the specified billing cycle.
- **[subscriptionBillingCycleEditDelete](../mutations/subscriptionBillingCycleEditDelete.md)** → `SubscriptionBillingCycleEditDeletePayload` `(billingCycleInput)`
  Delete the schedule and contract edits of the selected subscription billing cycle.
- **[subscriptionBillingCycleEditsDelete](../mutations/subscriptionBillingCycleEditsDelete.md)** → `SubscriptionBillingCycleEditsDeletePayload` `(contractId, targetSelection)`
  Delete the current and future schedule and contract edits of a list of subscription billing cycles.
- **[subscriptionBillingCycleScheduleEdit](../mutations/subscriptionBillingCycleScheduleEdit.md)** → `SubscriptionBillingCycleScheduleEditPayload` `(billingCycleInput, input)`
  Modify the schedule of a specific billing cycle.
- **[subscriptionBillingCycleSkip](../mutations/subscriptionBillingCycleSkip.md)** → `SubscriptionBillingCycleSkipPayload` `(billingCycleInput)`
  Skips a Subscription Billing Cycle.
- **[subscriptionBillingCycleUnskip](../mutations/subscriptionBillingCycleUnskip.md)** → `SubscriptionBillingCycleUnskipPayload` `(billingCycleInput)`
  Unskips a Subscription Billing Cycle.
- **[subscriptionContractActivate](../mutations/subscriptionContractActivate.md)** → `SubscriptionContractActivatePayload` `(subscriptionContractId)`
  Activates a Subscription Contract. Contract status must be either active, paused, or failed.
- **[subscriptionContractAtomicCreate](../mutations/subscriptionContractAtomicCreate.md)** → `SubscriptionContractAtomicCreatePayload` `(input)`
  Creates a Subscription Contract.
- **[subscriptionContractCancel](../mutations/subscriptionContractCancel.md)** → `SubscriptionContractCancelPayload` `(subscriptionContractId)`
  Cancels a Subscription Contract.
- **[subscriptionContractCreate](../mutations/subscriptionContractCreate.md)** → `SubscriptionContractCreatePayload` `(input)`
  Creates a subscription contract draft, which is an intention to create a new subscription. The draft lets you incrementally build and modify subscript
- **[subscriptionContractExpire](../mutations/subscriptionContractExpire.md)** → `SubscriptionContractExpirePayload` `(subscriptionContractId)`
  Expires a Subscription Contract.
- **[subscriptionContractFail](../mutations/subscriptionContractFail.md)** → `SubscriptionContractFailPayload` `(subscriptionContractId)`
  Fails a Subscription Contract.
- **[subscriptionContractPause](../mutations/subscriptionContractPause.md)** → `SubscriptionContractPausePayload` `(subscriptionContractId)`
  Pauses a Subscription Contract.
- **[subscriptionContractProductChange](../mutations/subscriptionContractProductChange.md)** → `SubscriptionContractProductChangePayload` `(subscriptionContractId, lineId, input)`
  Allows for the easy change of a Product in a Contract or a Product price change.
- **[subscriptionContractSetNextBillingDate](../mutations/subscriptionContractSetNextBillingDate.md)** → `SubscriptionContractSetNextBillingDatePayload` `(contractId, date)`
  Sets the next billing date of a Subscription Contract. This field is managed by the apps.
- **[subscriptionContractUpdate](../mutations/subscriptionContractUpdate.md)** → `SubscriptionContractUpdatePayload` `(contractId)`
  Creates a draft of an existing [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The draft cap
- **[subscriptionDraftCommit](../mutations/subscriptionDraftCommit.md)** → `SubscriptionDraftCommitPayload` `(draftId)`
  Commits the updates of a Subscription Contract draft.
- **[subscriptionDraftDiscountAdd](../mutations/subscriptionDraftDiscountAdd.md)** → `SubscriptionDraftDiscountAddPayload` `(draftId, input)`
  Adds a subscription discount to a subscription draft.
- **[subscriptionDraftDiscountCodeApply](../mutations/subscriptionDraftDiscountCodeApply.md)** → `SubscriptionDraftDiscountCodeApplyPayload` `(draftId, redeemCode)`
  Applies a code discount on the subscription draft.
- **[subscriptionDraftDiscountRemove](../mutations/subscriptionDraftDiscountRemove.md)** → `SubscriptionDraftDiscountRemovePayload` `(draftId, discountId)`
  Removes a subscription discount from a subscription draft.
- **[subscriptionDraftDiscountUpdate](../mutations/subscriptionDraftDiscountUpdate.md)** → `SubscriptionDraftDiscountUpdatePayload` `(draftId, discountId, input)`
  Updates a subscription discount on a subscription draft.
- **[subscriptionDraftFreeShippingDiscountAdd](../mutations/subscriptionDraftFreeShippingDiscountAdd.md)** → `SubscriptionDraftFreeShippingDiscountAddPayload` `(draftId, input)`
  Adds a subscription free shipping discount to a subscription draft.
- **[subscriptionDraftFreeShippingDiscountUpdate](../mutations/subscriptionDraftFreeShippingDiscountUpdate.md)** → `SubscriptionDraftFreeShippingDiscountUpdatePayload` `(draftId, discountId, input)`
  Updates a subscription free shipping discount on a subscription draft.
- **[subscriptionDraftLineAdd](../mutations/subscriptionDraftLineAdd.md)** → `SubscriptionDraftLineAddPayload` `(draftId, input)`
  Adds a subscription line to a subscription draft.
- **[subscriptionDraftLineRemove](../mutations/subscriptionDraftLineRemove.md)** → `SubscriptionDraftLineRemovePayload` `(draftId, lineId)`
  Removes a subscription line from a subscription draft.
- **[subscriptionDraftLineUpdate](../mutations/subscriptionDraftLineUpdate.md)** → `SubscriptionDraftLineUpdatePayload` `(draftId, lineId, input)`
  Updates a subscription line on a subscription draft.
- **[subscriptionDraftUpdate](../mutations/subscriptionDraftUpdate.md)** → `SubscriptionDraftUpdatePayload` `(draftId, input)`
  Updates a Subscription Draft.
