# Customers: Customers, companies (B2B), segments, store credit

## Queries (28)

- **[companies](../queries/companies.md)** → `CompanyConnection!` `(first, after, last, before, reverse, sortKey, query)`
  A paginated list of companies in the shop. [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) objects are business entitie
- **[companiesCount](../queries/companiesCount.md)** → `Count` `(limit)`
  The number of companies for a shop. Limited to a maximum of 10000 by default.
- **[company](../queries/company.md)** → `Company` `(id)`
  Returns a `Company` resource by ID.
- **[companyContact](../queries/companyContact.md)** → `CompanyContact` `(id)`
  Returns a `CompanyContact` resource by ID.
- **[companyContactRole](../queries/companyContactRole.md)** → `CompanyContactRole` `(id)`
  Returns a `CompanyContactRole` resource by ID.
- **[companyLocation](../queries/companyLocation.md)** → `CompanyLocation` `(id)`
  Returns a `CompanyLocation` resource by ID.
- **[companyLocations](../queries/companyLocations.md)** → `CompanyLocationConnection!` `(first, after, last, before, reverse, sortKey, query)`
  A paginated list of [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for B2B customers. Company 
- **[customer](../queries/customer.md)** → `Customer` `(id)`
  Returns a `Customer` resource by ID.
- **[customerAccountPage](../queries/customerAccountPage.md)** → `CustomerAccountPage` `(id)`
  Returns a `CustomerAccountPage` resource by ID.
- **[customerAccountPages](../queries/customerAccountPages.md)** → `CustomerAccountPageConnection` `(first, after, last, before, reverse)`
  List of the shop's customer account pages.
- **[customerByIdentifier](../queries/customerByIdentifier.md)** → `Customer` `(identifier)`
  Return a customer by an identifier.
- **[customerMergeJobStatus](../queries/customerMergeJobStatus.md)** → `CustomerMergeRequest` `(jobId)`
  Returns the status of a customer merge request job.
- **[customerMergePreview](../queries/customerMergePreview.md)** → `CustomerMergePreview!` `(customerOneId, customerTwoId, overrideFields)`
  Returns a preview of a customer merge request.
- **[customerPaymentMethod](../queries/customerPaymentMethod.md)** → `CustomerPaymentMethod` `(id, showRevoked)`
  Returns a CustomerPaymentMethod resource by its ID.
- **[customerSavedSearches](../queries/customerSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse, sortKey, query)`
  List of the shop's customer saved searches.
- **[customerSegmentMembers](../queries/customerSegmentMembers.md)** → `CustomerSegmentMemberConnection!` `(segmentId, query, queryId, timezone, reverse, sortKey, first, after, last, before)`
  A paginated list of customers that belong to an individual [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment). Segments gr
- **[customerSegmentMembersQuery](../queries/customerSegmentMembersQuery.md)** → `CustomerSegmentMembersQuery` `(id)`
  Returns a `CustomerSegmentMembersQuery` resource by ID.
- **[customerSegmentMembership](../queries/customerSegmentMembership.md)** → `SegmentMembershipResponse!` `(segmentIds, customerId)`
  Whether a member, which is a customer, belongs to a segment.
- **[customers](../queries/customers.md)** → `CustomerConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns a list of [customers](https://shopify.dev/api/admin-graphql/latest/objects/Customer) in your Shopify store, including key information such as 
- **[customersCount](../queries/customersCount.md)** → `Count` `(query, limit)`
  The number of customers. Limited to a maximum of 10000 by default.
- **[segment](../queries/segment.md)** → `Segment` `(id)`
  Retrieves a customer [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) by ID. Segments are dynamic groups of customers th
- **[segmentFilterSuggestions](../queries/segmentFilterSuggestions.md)** → `SegmentFilterConnection!` `(search, first, after)`
  A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.
- **[segmentFilters](../queries/segmentFilters.md)** → `SegmentFilterConnection!` `(first, after, last, before)`
  A list of filters.
- **[segmentMigrations](../queries/segmentMigrations.md)** → `SegmentMigrationConnection!` `(savedSearchId, first, after, last, before)`
  A list of a shop's segment migrations.
- **[segmentValueSuggestions](../queries/segmentValueSuggestions.md)** → `SegmentValueConnection!` `(search, filterQueryName, functionParameterQueryName, first, after, last, before)`
  The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specifi
- **[segments](../queries/segments.md)** → `SegmentConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns a paginated list of [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) objects for the shop. Segments are dynamic 
- **[segmentsCount](../queries/segmentsCount.md)** → `Count` `(limit)`
  The number of segments for a shop. Limited to a maximum of 10000 by default.
- **[storeCreditAccount](../queries/storeCreditAccount.md)** → `StoreCreditAccount` `(id)`
  Retrieves a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by ID. Store credit accounts hold mon

## Mutations (66)

- **[companiesDelete](../mutations/companiesDelete.md)** → `CompaniesDeletePayload` `(companyIds)`
  Deletes a list of companies.
- **[companyAddressDelete](../mutations/companyAddressDelete.md)** → `CompanyAddressDeletePayload` `(addressId)`
  Deletes a company address.
- **[companyAssignCustomerAsContact](../mutations/companyAssignCustomerAsContact.md)** → `CompanyAssignCustomerAsContactPayload` `(companyId, customerId)`
  Adds an existing [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) as a contact to a [`Company`](https://shopify.dev/do
- **[companyAssignMainContact](../mutations/companyAssignMainContact.md)** → `CompanyAssignMainContactPayload` `(companyId, companyContactId)`
  Assigns the main contact for the company.
- **[companyContactAssignRole](../mutations/companyContactAssignRole.md)** → `CompanyContactAssignRolePayload` `(companyContactId, companyContactRoleId, companyLocationId)`
  Assigns a role to a contact for a location.
- **[companyContactAssignRoles](../mutations/companyContactAssignRoles.md)** → `CompanyContactAssignRolesPayload` `(companyContactId, rolesToAssign)`
  Assigns roles on a company contact.
- **[companyContactCreate](../mutations/companyContactCreate.md)** → `CompanyContactCreatePayload` `(companyId, input)`
  Creates a company contact and the associated customer.
- **[companyContactDelete](../mutations/companyContactDelete.md)** → `CompanyContactDeletePayload` `(companyContactId)`
  Deletes a company contact.
- **[companyContactRemoveFromCompany](../mutations/companyContactRemoveFromCompany.md)** → `CompanyContactRemoveFromCompanyPayload` `(companyContactId)`
  Removes a company contact from a Company.
- **[companyContactRevokeRole](../mutations/companyContactRevokeRole.md)** → `CompanyContactRevokeRolePayload` `(companyContactId, companyContactRoleAssignmentId)`
  Revokes a role on a company contact.
- **[companyContactRevokeRoles](../mutations/companyContactRevokeRoles.md)** → `CompanyContactRevokeRolesPayload` `(companyContactId, roleAssignmentIds, revokeAll)`
  Revokes roles on a company contact.
- **[companyContactSendWelcomeEmail](../mutations/companyContactSendWelcomeEmail.md)** → `CompanyContactSendWelcomeEmailPayload` `(companyContactId, email)`
  Sends the company contact a welcome email.
- **[companyContactUpdate](../mutations/companyContactUpdate.md)** → `CompanyContactUpdatePayload` `(companyContactId, input)`
  Updates a company contact.
- **[companyContactsDelete](../mutations/companyContactsDelete.md)** → `CompanyContactsDeletePayload` `(companyContactIds)`
  Deletes one or more company contacts.
- **[companyCreate](../mutations/companyCreate.md)** → `CompanyCreatePayload` `(input)`
  Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can o
- **[companyDelete](../mutations/companyDelete.md)** → `CompanyDeletePayload` `(id)`
  Deletes a company.
- **[companyLocationAssignAddress](../mutations/companyLocationAssignAddress.md)** → `CompanyLocationAssignAddressPayload` `(locationId, address, addressTypes)`
  Updates an address on a company location.
- **[companyLocationAssignRoles](../mutations/companyLocationAssignRoles.md)** → `CompanyLocationAssignRolesPayload` `(companyLocationId, rolesToAssign)`
  Assigns roles on a company location.
- **[companyLocationAssignStaffMembers](../mutations/companyLocationAssignStaffMembers.md)** → `CompanyLocationAssignStaffMembersPayload` `(companyLocationId, staffMemberIds)`
  Creates one or more mappings between a staff member at a shop and a company location.
- **[companyLocationAssignTaxExemptions](../mutations/companyLocationAssignTaxExemptions.md)** → `CompanyLocationAssignTaxExemptionsPayload` `(companyLocationId, taxExemptions)`
  Assigns tax exemptions to the company location.
- **[companyLocationCreate](../mutations/companyLocationCreate.md)** → `CompanyLocationCreatePayload` `(companyId, input)`
  Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices
- **[companyLocationCreateTaxRegistration](../mutations/companyLocationCreateTaxRegistration.md)** → `CompanyLocationCreateTaxRegistrationPayload` `(locationId, taxId)`
  Creates a tax registration for a company location.
- **[companyLocationDelete](../mutations/companyLocationDelete.md)** → `CompanyLocationDeletePayload` `(companyLocationId)`
  Deletes a company location.
- **[companyLocationRemoveStaffMembers](../mutations/companyLocationRemoveStaffMembers.md)** → `CompanyLocationRemoveStaffMembersPayload` `(companyLocationStaffMemberAssignmentIds)`
  Deletes one or more existing mappings between a staff member at a shop and a company location.
- **[companyLocationRevokeRoles](../mutations/companyLocationRevokeRoles.md)** → `CompanyLocationRevokeRolesPayload` `(companyLocationId, rolesToRevoke)`
  Revokes roles on a company location.
- **[companyLocationRevokeTaxExemptions](../mutations/companyLocationRevokeTaxExemptions.md)** → `CompanyLocationRevokeTaxExemptionsPayload` `(companyLocationId, taxExemptions)`
  Revokes tax exemptions from the company location.
- **[companyLocationRevokeTaxRegistration](../mutations/companyLocationRevokeTaxRegistration.md)** → `CompanyLocationRevokeTaxRegistrationPayload` `(companyLocationId)`
  Revokes tax registration on a company location.
- **[companyLocationTaxSettingsUpdate](../mutations/companyLocationTaxSettingsUpdate.md)** → `CompanyLocationTaxSettingsUpdatePayload` `(companyLocationId, taxRegistrationId, taxExempt, exemptionsToAssign, exemptionsToRemove)`
  Sets the tax settings for a company location.
- **[companyLocationUpdate](../mutations/companyLocationUpdate.md)** → `CompanyLocationUpdatePayload` `(companyLocationId, input)`
  Updates a company location's information and B2B checkout settings. Company locations are branches or offices where [`CompanyContact`](https://shopify
- **[companyLocationsDelete](../mutations/companyLocationsDelete.md)** → `CompanyLocationsDeletePayload` `(companyLocationIds)`
  Deletes a list of company locations.
- **[companyRevokeMainContact](../mutations/companyRevokeMainContact.md)** → `CompanyRevokeMainContactPayload` `(companyId)`
  Revokes the main contact from the company.
- **[companyUpdate](../mutations/companyUpdate.md)** → `CompanyUpdatePayload` `(companyId, input)`
  Updates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) with new information. Companies represent business customers 
- **[customerAddTaxExemptions](../mutations/customerAddTaxExemptions.md)** → `CustomerAddTaxExemptionsPayload` `(customerId, taxExemptions)`
  Add tax exemptions for the customer.
- **[customerAddressCreate](../mutations/customerAddressCreate.md)** → `CustomerAddressCreatePayload` `(customerId, address, setAsDefault)`
  Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs
- **[customerAddressDelete](../mutations/customerAddressDelete.md)** → `CustomerAddressDeletePayload` `(customerId, addressId)`
  Deletes a customer's address.
- **[customerAddressUpdate](../mutations/customerAddressUpdate.md)** → `CustomerAddressUpdatePayload` `(customerId, addressId, address, setAsDefault)`
  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-gra
- **[customerCancelDataErasure](../mutations/customerCancelDataErasure.md)** → `CustomerCancelDataErasurePayload` `(customerId)`
  Cancels a pending erasure of a customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data
- **[customerCreate](../mutations/customerCreate.md)** → `CustomerCreatePayload` `(input)`
  Creates a new [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) in the store.
- **[customerDelete](../mutations/customerDelete.md)** → `CustomerDeletePayload` `(input)`
  Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't p
- **[customerEmailMarketingConsentUpdate](../mutations/customerEmailMarketingConsentUpdate.md)** → `CustomerEmailMarketingConsentUpdatePayload` `(input)`
  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must ha
- **[customerGenerateAccountActivationUrl](../mutations/customerGenerateAccountActivationUrl.md)** → `CustomerGenerateAccountActivationUrlPayload` `(customerId)`
  Generates a one-time activation URL for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) whose legacy customer accou
- **[customerMerge](../mutations/customerMerge.md)** → `CustomerMergePayload` `(customerOneId, customerTwoId, overrideFields)`
  Merges two customers.
- **[customerPaymentMethodCreateFromDuplicationData](../mutations/customerPaymentMethodCreateFromDuplicationData.md)** → `CustomerPaymentMethodCreateFromDuplicationDataPayload` `(customerId, billingAddress, encryptedDuplicationData)`
  Creates a vaulted payment method for a customer from duplication data.
- **[customerPaymentMethodCreditCardCreate](../mutations/customerPaymentMethodCreditCardCreate.md)** → `CustomerPaymentMethodCreditCardCreatePayload` `(customerId, billingAddress, sessionId)`
  Creates a credit card payment method for a customer using a session id.
- **[customerPaymentMethodCreditCardUpdate](../mutations/customerPaymentMethodCreditCardUpdate.md)** → `CustomerPaymentMethodCreditCardUpdatePayload` `(id, billingAddress, sessionId)`
  Updates the credit card payment method for a customer.
- **[customerPaymentMethodGetDuplicationData](../mutations/customerPaymentMethodGetDuplicationData.md)** → `CustomerPaymentMethodGetDuplicationDataPayload` `(customerPaymentMethodId, targetShopId, targetCustomerId)`
  Returns encrypted data that can be used to duplicate the payment method in another shop within the same organization.
- **[customerPaymentMethodGetUpdateUrl](../mutations/customerPaymentMethodGetUpdateUrl.md)** → `CustomerPaymentMethodGetUpdateUrlPayload` `(customerPaymentMethodId)`
  Returns a URL that allows the customer to update a specific payment method.
- **[customerPaymentMethodPaypalBillingAgreementCreate](../mutations/customerPaymentMethodPaypalBillingAgreementCreate.md)** → `CustomerPaymentMethodPaypalBillingAgreementCreatePayload` `(customerId, billingAddress, billingAgreementId, inactive)`
  Creates a PayPal billing agreement for a customer.
- **[customerPaymentMethodPaypalBillingAgreementUpdate](../mutations/customerPaymentMethodPaypalBillingAgreementUpdate.md)** → `CustomerPaymentMethodPaypalBillingAgreementUpdatePayload` `(id, billingAddress)`
  Updates a PayPal billing agreement for a customer.
- **[customerPaymentMethodRemoteCreate](../mutations/customerPaymentMethodRemoteCreate.md)** → `CustomerPaymentMethodRemoteCreatePayload` `(customerId, remoteReference)`
  Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment me
- **[customerPaymentMethodRevoke](../mutations/customerPaymentMethodRevoke.md)** → `CustomerPaymentMethodRevokePayload` `(customerPaymentMethodId)`
  Revokes a customer's payment method.
- **[customerPaymentMethodSendUpdateEmail](../mutations/customerPaymentMethodSendUpdateEmail.md)** → `CustomerPaymentMethodSendUpdateEmailPayload` `(customerPaymentMethodId, email)`
  Sends a link to the customer so they can update a specific payment method.
- **[customerRemoveTaxExemptions](../mutations/customerRemoveTaxExemptions.md)** → `CustomerRemoveTaxExemptionsPayload` `(customerId, taxExemptions)`
  Remove tax exemptions from a customer.
- **[customerReplaceTaxExemptions](../mutations/customerReplaceTaxExemptions.md)** → `CustomerReplaceTaxExemptionsPayload` `(customerId, taxExemptions)`
  Replace tax exemptions for a customer.
- **[customerRequestDataErasure](../mutations/customerRequestDataErasure.md)** → `CustomerRequestDataErasurePayload` `(customerId)`
  Enqueues a request to erase customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-re
- **[customerSegmentMembersQueryCreate](../mutations/customerSegmentMembersQueryCreate.md)** → `CustomerSegmentMembersQueryCreatePayload` `(input)`
  Creates a customer segment members query.
- **[customerSendAccountInviteEmail](../mutations/customerSendAccountInviteEmail.md)** → `CustomerSendAccountInviteEmailPayload` `(customerId, email)`
  Sends an email invitation for a customer to create a legacy customer account. The invitation lets customers set up their password and activate their a
- **[customerSet](../mutations/customerSet.md)** → `CustomerSetPayload` `(input, identifier)`
  Creates or updates a customer in a single mutation.
- **[customerSmsMarketingConsentUpdate](../mutations/customerSmsMarketingConsentUpdate.md)** → `CustomerSmsMarketingConsentUpdatePayload` `(input)`
  Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s SMS marketing consent information. The customer must have a
- **[customerUpdate](../mutations/customerUpdate.md)** → `CustomerUpdatePayload` `(input)`
  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s attributes including personal information and [`tax exemp
- **[customerUpdateDefaultAddress](../mutations/customerUpdateDefaultAddress.md)** → `CustomerUpdateDefaultAddressPayload` `(customerId, addressId)`
  Updates a customer's default address.
- **[segmentCreate](../mutations/segmentCreate.md)** → `SegmentCreatePayload` `(name, query)`
  Creates a segment.
- **[segmentDelete](../mutations/segmentDelete.md)** → `SegmentDeletePayload` `(id)`
  Deletes a segment.
- **[segmentUpdate](../mutations/segmentUpdate.md)** → `SegmentUpdatePayload` `(id, name, query)`
  Updates a segment.
- **[storeCreditAccountCredit](../mutations/storeCreditAccountCredit.md)** → `StoreCreditAccountCreditPayload` `(id, creditInput)`
  Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccoun
- **[storeCreditAccountDebit](../mutations/storeCreditAccountDebit.md)** → `StoreCreditAccountDebitPayload` `(id, debitInput)`
  Creates a debit transaction that decreases the store credit account balance by the given amount.
