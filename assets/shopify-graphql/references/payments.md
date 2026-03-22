# Payments: Payments, gift cards, refunds, Shopify Payments, transactions

## Queries (14)

- **[cashTrackingSession](../queries/cashTrackingSession.md)** → `CashTrackingSession` `(id)`
  Returns a `CashTrackingSession` resource by ID.
- **[cashTrackingSessions](../queries/cashTrackingSessions.md)** → `CashTrackingSessionConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns a shop's cash tracking sessions for locations with a POS Pro subscription.
- **[financeAppAccessPolicy](../queries/financeAppAccessPolicy.md)** → `FinanceAppAccessPolicy!`
  Returns the access policy for a finance app .
- **[financeKycInformation](../queries/financeKycInformation.md)** → `FinanceKycInformation`
  Returns the KYC information for the shop's Shopify Payments account, used in embedded finance apps.
- **[giftCard](../queries/giftCard.md)** → `GiftCard` `(id)`
  Retrieves a [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) by its ID. Returns the gift card's balance, transaction h
- **[giftCardConfiguration](../queries/giftCardConfiguration.md)** → `GiftCardConfiguration!`
  The configuration for the shop's gift cards.
- **[giftCards](../queries/giftCards.md)** → `GiftCardConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a paginated list of [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) objects issued for the shop.
- **[giftCardsCount](../queries/giftCardsCount.md)** → `Count` `(query, savedSearchId, limit)`
  The total number of gift cards issued for the shop. Limited to a maximum of 10000 by default.
- **[paymentCustomization](../queries/paymentCustomization.md)** → `PaymentCustomization` `(id)`
  The payment customization.
- **[paymentCustomizations](../queries/paymentCustomizations.md)** → `PaymentCustomizationConnection!` `(first, after, last, before, reverse, query)`
  The payment customizations.
- **[paymentTermsTemplates](../queries/paymentTermsTemplates.md)** → `[PaymentTermsTemplate!]!` `(paymentTermsType)`
  The list of payment terms templates eligible for all shops and users.
- **[refund](../queries/refund.md)** → `Refund` `(id)`
  Retrieves a [refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund) by its ID.
- **[shopifyPaymentsAccount](../queries/shopifyPaymentsAccount.md)** → `ShopifyPaymentsAccount`
  Returns the Shopify Payments account information for the shop. Includes current balances across all currencies, payout schedules, and bank account con
- **[tenderTransactions](../queries/tenderTransactions.md)** → `TenderTransactionConnection!` `(first, after, last, before, reverse, query)`
  Transactions representing a movement of money between customers and the shop. Each transaction records the amount, payment method, processing details,

## Mutations (18)

- **[giftCardCreate](../mutations/giftCardCreate.md)** → `GiftCardCreatePayload` `(input)`
  Creates a new [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) with a specified initial value. You can assign the gift
- **[giftCardCredit](../mutations/giftCardCredit.md)** → `GiftCardCreditPayload` `(id, creditInput)`
  Credit a gift card.
- **[giftCardDeactivate](../mutations/giftCardDeactivate.md)** → `GiftCardDeactivatePayload` `(id)`
  Deactivate a gift card. A deactivated gift card cannot be used by a customer.
- **[giftCardDebit](../mutations/giftCardDebit.md)** → `GiftCardDebitPayload` `(id, debitInput)`
  Debit a gift card.
- **[giftCardSendNotificationToCustomer](../mutations/giftCardSendNotificationToCustomer.md)** → `GiftCardSendNotificationToCustomerPayload` `(id)`
  Send notification to the customer of a gift card.
- **[giftCardSendNotificationToRecipient](../mutations/giftCardSendNotificationToRecipient.md)** → `GiftCardSendNotificationToRecipientPayload` `(id)`
  Send notification to the recipient of a gift card.
- **[giftCardUpdate](../mutations/giftCardUpdate.md)** → `GiftCardUpdatePayload` `(id, input)`
  Update a gift card.
- **[paymentCustomizationActivation](../mutations/paymentCustomizationActivation.md)** → `PaymentCustomizationActivationPayload` `(ids, enabled)`
  Activates and deactivates payment customizations.
- **[paymentCustomizationCreate](../mutations/paymentCustomizationCreate.md)** → `PaymentCustomizationCreatePayload` `(paymentCustomization)`
  Creates a payment customization.
- **[paymentCustomizationDelete](../mutations/paymentCustomizationDelete.md)** → `PaymentCustomizationDeletePayload` `(id)`
  Deletes a payment customization.
- **[paymentCustomizationUpdate](../mutations/paymentCustomizationUpdate.md)** → `PaymentCustomizationUpdatePayload` `(id, paymentCustomization)`
  Updates a payment customization.
- **[paymentReminderSend](../mutations/paymentReminderSend.md)** → `PaymentReminderSendPayload` `(paymentScheduleId)`
  Sends an email payment reminder for a payment schedule.
- **[paymentTermsCreate](../mutations/paymentTermsCreate.md)** → `PaymentTermsCreatePayload` `(referenceId, paymentTermsAttributes)`
  Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInp
- **[paymentTermsDelete](../mutations/paymentTermsDelete.md)** → `PaymentTermsDeletePayload` `(input)`
  Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderIn
- **[paymentTermsUpdate](../mutations/paymentTermsUpdate.md)** → `PaymentTermsUpdatePayload` `(input)`
  Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInp
- **[refundCreate](../mutations/refundCreate.md)** → `RefundCreatePayload` `(input)`
  Creates a refund for an order, allowing you to process returns and issue payments back to customers.
- **[shopifyPaymentsPayoutAlternateCurrencyCreate](../mutations/shopifyPaymentsPayoutAlternateCurrencyCreate.md)** → `ShopifyPaymentsPayoutAlternateCurrencyCreatePayload` `(accountId, currency)`
  Creates an alternate currency payout for a Shopify Payments account.
- **[transactionVoid](../mutations/transactionVoid.md)** → `TransactionVoidPayload` `(parentTransactionId)`
  Trigger the voiding of an uncaptured authorization transaction.
