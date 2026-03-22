# Discounts: Discounts, price rules, price lists, selling plans

## Queries (19)

- **[automaticDiscount](../queries/automaticDiscount.md)** → `DiscountAutomatic` `(id)`
  Returns a `DiscountAutomatic` resource by ID.
- **[automaticDiscountNode](../queries/automaticDiscountNode.md)** → `DiscountAutomaticNode` `(id)`
  Returns a `DiscountAutomaticNode` resource by ID.
- **[automaticDiscountNodes](../queries/automaticDiscountNodes.md)** → `DiscountAutomaticNodeConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a list of [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).
- **[automaticDiscountSavedSearches](../queries/automaticDiscountSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  List of the shop's automatic discount saved searches.
- **[automaticDiscounts](../queries/automaticDiscounts.md)** → `DiscountAutomaticConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a list of automatic discounts that are applied in the cart and at checkout without requiring a discount code.
- **[codeDiscountNode](../queries/codeDiscountNode.md)** → `DiscountCodeNode` `(id)`
  Returns a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) resource by ID.
- **[codeDiscountNodeByCode](../queries/codeDiscountNodeByCode.md)** → `DiscountCodeNode` `(code)`
  Retrieves a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) by its discount code. The search is case-insensit
- **[codeDiscountNodes](../queries/codeDiscountNodes.md)** → `DiscountCodeNodeConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a list of [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes).
- **[codeDiscountSavedSearches](../queries/codeDiscountSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  List of the shop's code discount saved searches.
- **[discountCodesCount](../queries/discountCodesCount.md)** → `Count` `(query, limit)`
  The total number of discount codes for the shop. Limited to a maximum of 10000 by default.
- **[discountNode](../queries/discountNode.md)** → `DiscountNode` `(id)`
  Returns a `DiscountNode` resource by ID.
- **[discountNodes](../queries/discountNodes.md)** → `DiscountNodeConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a list of discounts.
- **[discountNodesCount](../queries/discountNodesCount.md)** → `Count` `(query, savedSearchId, limit)`
  The total number of discounts for the shop. Limited to a maximum of 10000 by default.
- **[discountRedeemCodeBulkCreation](../queries/discountRedeemCodeBulkCreation.md)** → `DiscountRedeemCodeBulkCreation` `(id)`
  Returns a `DiscountRedeemCodeBulkCreation` resource by ID.
- **[discountRedeemCodeSavedSearches](../queries/discountRedeemCodeSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse, sortKey, query)`
  List of the shop's redeemed discount code saved searches.
- **[priceList](../queries/priceList.md)** → `PriceList` `(id)`
  Returns a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) by ID. You can use price lists to specify either fixed pr
- **[priceLists](../queries/priceLists.md)** → `PriceListConnection!` `(first, after, last, before, reverse, sortKey)`
  All price lists for a shop.
- **[sellingPlanGroup](../queries/sellingPlanGroup.md)** → `SellingPlanGroup` `(id)`
  Returns a `SellingPlanGroup` resource by ID.
- **[sellingPlanGroups](../queries/sellingPlanGroups.md)** → `SellingPlanGroupConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Retrieves a paginated list of [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects that belong to 

## Mutations (45)

- **[discountAutomaticActivate](../mutations/discountAutomaticActivate.md)** → `DiscountAutomaticActivatePayload` `(id)`
  Activates an automatic discount.
- **[discountAutomaticAppCreate](../mutations/discountAutomaticAppCreate.md)** → `DiscountAutomaticAppCreatePayload` `(automaticAppDiscount)`
  Creates an automatic discount that's managed by an app.
- **[discountAutomaticAppUpdate](../mutations/discountAutomaticAppUpdate.md)** → `DiscountAutomaticAppUpdatePayload` `(id, automaticAppDiscount)`
  Updates an existing automatic discount that's managed by an app using
- **[discountAutomaticBasicCreate](../mutations/discountAutomaticBasicCreate.md)** → `DiscountAutomaticBasicCreatePayload` `(automaticBasicDiscount)`
  Creates an
- **[discountAutomaticBasicUpdate](../mutations/discountAutomaticBasicUpdate.md)** → `DiscountAutomaticBasicUpdatePayload` `(id, automaticBasicDiscount)`
  Updates an existing
- **[discountAutomaticBulkDelete](../mutations/discountAutomaticBulkDelete.md)** → `DiscountAutomaticBulkDeletePayload` `(search, savedSearchId, ids)`
  Deletes multiple automatic discounts in a single operation, providing efficient bulk management for stores with extensive discount catalogs. This muta
- **[discountAutomaticBxgyCreate](../mutations/discountAutomaticBxgyCreate.md)** → `DiscountAutomaticBxgyCreatePayload` `(automaticBxgyDiscount)`
  Creates a
- **[discountAutomaticBxgyUpdate](../mutations/discountAutomaticBxgyUpdate.md)** → `DiscountAutomaticBxgyUpdatePayload` `(id, automaticBxgyDiscount)`
  Updates an existing
- **[discountAutomaticDeactivate](../mutations/discountAutomaticDeactivate.md)** → `DiscountAutomaticDeactivatePayload` `(id)`
  Deactivates an automatic discount.
- **[discountAutomaticDelete](../mutations/discountAutomaticDelete.md)** → `DiscountAutomaticDeletePayload` `(id)`
  Deletes an existing automatic discount from the store, permanently removing it from all future order calculations. This mutation provides a clean way 
- **[discountAutomaticFreeShippingCreate](../mutations/discountAutomaticFreeShippingCreate.md)** → `DiscountAutomaticFreeShippingCreatePayload` `(freeShippingAutomaticDiscount)`
  Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate wh
- **[discountAutomaticFreeShippingUpdate](../mutations/discountAutomaticFreeShippingUpdate.md)** → `DiscountAutomaticFreeShippingUpdatePayload` `(id, freeShippingAutomaticDiscount)`
  Updates existing automatic free shipping discounts, allowing merchants to modify promotion criteria, shipping destinations, and eligibility requiremen
- **[discountCodeActivate](../mutations/discountCodeActivate.md)** → `DiscountCodeActivatePayload` `(id)`
  Activates a previously created code discount, making it available for customers to use during checkout. This mutation transitions inactive discount co
- **[discountCodeAppCreate](../mutations/discountCodeAppCreate.md)** → `DiscountCodeAppCreatePayload` `(codeAppDiscount)`
  Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/func
- **[discountCodeAppUpdate](../mutations/discountCodeAppUpdate.md)** → `DiscountCodeAppUpdatePayload` `(id, codeAppDiscount)`
  Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/fun
- **[discountCodeBasicCreate](../mutations/discountCodeBasicCreate.md)** → `DiscountCodeBasicCreatePayload` `(basicCodeDiscount)`
  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at che
- **[discountCodeBasicUpdate](../mutations/discountCodeBasicUpdate.md)** → `DiscountCodeBasicUpdatePayload` `(id, basicCodeDiscount)`
  Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at che
- **[discountCodeBulkActivate](../mutations/discountCodeBulkActivate.md)** → `DiscountCodeBulkActivatePayload` `(search, savedSearchId, ids)`
  Activates multiple [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following
- **[discountCodeBulkDeactivate](../mutations/discountCodeBulkDeactivate.md)** → `DiscountCodeBulkDeactivatePayload` `(search, savedSearchId, ids)`
  Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the f
- **[discountCodeBulkDelete](../mutations/discountCodeBulkDelete.md)** → `DiscountCodeBulkDeletePayload` `(search, savedSearchId, ids)`
  Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the follo
- **[discountCodeBxgyCreate](../mutations/discountCodeBxgyCreate.md)** → `DiscountCodeBxgyCreatePayload` `(bxgyCodeDiscount)`
  Creates a
- **[discountCodeBxgyUpdate](../mutations/discountCodeBxgyUpdate.md)** → `DiscountCodeBxgyUpdatePayload` `(id, bxgyCodeDiscount)`
  Updates a
- **[discountCodeDeactivate](../mutations/discountCodeDeactivate.md)** → `DiscountCodeDeactivatePayload` `(id)`
  Temporarily suspends a code discount without permanently removing it from the store. Deactivation allows merchants to pause promotional campaigns whil
- **[discountCodeDelete](../mutations/discountCodeDelete.md)** → `DiscountCodeDeletePayload` `(id)`
  Removes a code discount from the store, making it permanently unavailable for customer use. This mutation provides a clean way to eliminate discount c
- **[discountCodeFreeShippingCreate](../mutations/discountCodeFreeShippingCreate.md)** → `DiscountCodeFreeShippingCreatePayload` `(freeShippingCodeDiscount)`
  Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout w
- **[discountCodeFreeShippingUpdate](../mutations/discountCodeFreeShippingUpdate.md)** → `DiscountCodeFreeShippingUpdatePayload` `(id, freeShippingCodeDiscount)`
  Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout wh
- **[discountCodeRedeemCodeBulkDelete](../mutations/discountCodeRedeemCodeBulkDelete.md)** → `DiscountCodeRedeemCodeBulkDeletePayload` `(discountId, search, savedSearchId, ids)`
  Asynchronously delete
- **[discountRedeemCodeBulkAdd](../mutations/discountRedeemCodeBulkAdd.md)** → `DiscountRedeemCodeBulkAddPayload` `(discountId, codes)`
  Asynchronously add
- **[priceListCreate](../mutations/priceListCreate.md)** → `PriceListCreatePayload` `(input)`
  Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed 
- **[priceListDelete](../mutations/priceListDelete.md)** → `PriceListDeletePayload` `(id)`
  Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.
- **[priceListFixedPricesAdd](../mutations/priceListFixedPricesAdd.md)** → `PriceListFixedPricesAddPayload` `(priceListId, prices)`
  Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set spec
- **[priceListFixedPricesByProductUpdate](../mutations/priceListFixedPricesByProductUpdate.md)** → `PriceListFixedPricesByProductUpdatePayload` `(pricesToAdd, pricesToDeleteByProductIds, priceListId)`
  Sets or removes fixed prices for all variants of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) on a [`PriceList`](h
- **[priceListFixedPricesDelete](../mutations/priceListFixedPricesDelete.md)** → `PriceListFixedPricesDeletePayload` `(priceListId, variantIds)`
  Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of f
- **[priceListFixedPricesUpdate](../mutations/priceListFixedPricesUpdate.md)** → `PriceListFixedPricesUpdatePayload` `(priceListId, pricesToAdd, variantIdsToDelete)`
  Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed pri
- **[priceListUpdate](../mutations/priceListUpdate.md)** → `PriceListUpdatePayload` `(id, input)`
  Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`
- **[quantityPricingByVariantUpdate](../mutations/quantityPricingByVariantUpdate.md)** → `QuantityPricingByVariantUpdatePayload` `(priceListId, input)`
  Updates quantity pricing on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for specific [`ProductVariant`](https
- **[quantityRulesAdd](../mutations/quantityRulesAdd.md)** → `QuantityRulesAddPayload` `(priceListId, quantityRules)`
  Creates or updates existing quantity rules on a price list.
- **[quantityRulesDelete](../mutations/quantityRulesDelete.md)** → `QuantityRulesDeletePayload` `(priceListId, variantIds)`
  Deletes specific quantity rules from a price list using a product variant ID.
- **[sellingPlanGroupAddProductVariants](../mutations/sellingPlanGroupAddProductVariants.md)** → `SellingPlanGroupAddProductVariantsPayload` `(id, productVariantIds)`
  Adds multiple product variants to a selling plan group.
- **[sellingPlanGroupAddProducts](../mutations/sellingPlanGroupAddProducts.md)** → `SellingPlanGroupAddProductsPayload` `(id, productIds)`
  Adds multiple products to a selling plan group.
- **[sellingPlanGroupCreate](../mutations/sellingPlanGroupCreate.md)** → `SellingPlanGroupCreatePayload` `(input, resources)`
  Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe 
- **[sellingPlanGroupDelete](../mutations/sellingPlanGroupDelete.md)** → `SellingPlanGroupDeletePayload` `(id)`
  Delete a Selling Plan Group. This does not affect subscription contracts.
- **[sellingPlanGroupRemoveProductVariants](../mutations/sellingPlanGroupRemoveProductVariants.md)** → `SellingPlanGroupRemoveProductVariantsPayload` `(id, productVariantIds)`
  Removes multiple product variants from a selling plan group.
- **[sellingPlanGroupRemoveProducts](../mutations/sellingPlanGroupRemoveProducts.md)** → `SellingPlanGroupRemoveProductsPayload` `(id, productIds)`
  Removes multiple products from a selling plan group.
- **[sellingPlanGroupUpdate](../mutations/sellingPlanGroupUpdate.md)** → `SellingPlanGroupUpdatePayload` `(id, input)`
  Update a Selling Plan Group.
