# Products: Products, collections, catalogs, publications, and taxonomy

## Queries (33)

- **[catalog](../queries/catalog.md)** → `Catalog` `(id)`
  Retrieves a [catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) by its ID.
- **[catalogOperations](../queries/catalogOperations.md)** → `[ResourceOperation!]!`
  Returns the most recent catalog operations for the shop.
- **[catalogs](../queries/catalogs.md)** → `CatalogConnection!` `(type, first, after, last, before, reverse, sortKey, query)`
  Returns a paginated list of catalogs for the shop. Catalogs control which products are published and how they're priced in different contexts, such as
- **[catalogsCount](../queries/catalogsCount.md)** → `Count` `(type, query, limit)`
  The count of catalogs belonging to the shop. Limited to a maximum of 10000 by default.
- **[collection](../queries/collection.md)** → `Collection` `(id)`
  Retrieves a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) by its ID.
- **[collectionByHandle](../queries/collectionByHandle.md)** → `Collection` `(handle)`
  Retrieves a collection by its unique handle identifier. Handles provide a URL-friendly way to reference collections and are commonly used in storefron
- **[collectionByIdentifier](../queries/collectionByIdentifier.md)** → `Collection` `(identifier)`
  Return a collection by an identifier.
- **[collectionRulesConditions](../queries/collectionRulesConditions.md)** → `[CollectionRuleConditions!]!`
  Lists all rules that can be used to create smart collections.
- **[collectionSavedSearches](../queries/collectionSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  Returns a list of the shop's collection saved searches.
- **[collections](../queries/collections.md)** → `CollectionConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Retrieves a list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
- **[collectionsCount](../queries/collectionsCount.md)** → `Count` `(query, savedSearchId, limit)`
  Count of collections. Limited to a maximum of 10000 by default.
- **[product](../queries/product.md)** → `Product` `(id)`
  Retrieves a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) by its ID.
- **[productByHandle](../queries/productByHandle.md)** → `Product` `(handle)`
  Retrieves a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) using its handle. A handle is a unique, URL-friendly string
- **[productByIdentifier](../queries/productByIdentifier.md)** → `Product` `(identifier)`
  Return a product by an identifier.
- **[productDuplicateJob](../queries/productDuplicateJob.md)** → `ProductDuplicateJob!` `(id)`
  Returns the product duplicate job.
- **[productFeed](../queries/productFeed.md)** → `ProductFeed` `(id)`
  Returns a ProductFeed resource by ID.
- **[productFeeds](../queries/productFeeds.md)** → `ProductFeedConnection!` `(first, after, last, before, reverse)`
  The product feeds for the shop.
- **[productOperation](../queries/productOperation.md)** → `ProductOperation` `(id)`
  Returns a ProductOperation resource by ID.
- **[productResourceFeedback](../queries/productResourceFeedback.md)** → `ProductResourceFeedback` `(id)`
  Retrieves product resource feedback for the currently authenticated app, providing insights into product data quality, completeness, and optimization 
- **[productSavedSearches](../queries/productSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  Returns a list of the shop's product saved searches.
- **[productTags](../queries/productTags.md)** → `StringConnection` `(first, after, last, before, reverse)`
  Returns tags added to [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects in the shop. Provides a paginated list of
- **[productTypes](../queries/productTypes.md)** → `StringConnection` `(first, after, last, before, reverse)`
  Returns a paginated list of product types assigned to [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in the store. The 
- **[productVariant](../queries/productVariant.md)** → `ProductVariant` `(id)`
  Retrieves a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) by its ID.
- **[productVariantByIdentifier](../queries/productVariantByIdentifier.md)** → `ProductVariant` `(identifier)`
  Return a product variant by an identifier.
- **[productVariants](../queries/productVariants.md)** → `ProductVariantConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Retrieves a list of [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
- **[productVariantsCount](../queries/productVariantsCount.md)** → `Count` `(query, limit)`
  Count of product variants. Limited to a maximum of 10000 by default.
- **[productVendors](../queries/productVendors.md)** → `StringConnection` `(first, after, last, before, reverse)`
  The list of vendors added to products.
- **[products](../queries/products.md)** → `ProductConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
- **[productsCount](../queries/productsCount.md)** → `Count` `(query, savedSearchId, limit)`
  Count of products. Limited to a maximum of 10000 by default.
- **[publication](../queries/publication.md)** → `Publication` `(id)`
  Retrieves a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) by [`ID`](https://shopify.dev/docs/api/usage/gids).
- **[publications](../queries/publications.md)** → `PublicationConnection!` `(catalogType, first, after, last, before, reverse)`
  Returns a paginated list of [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
- **[publicationsCount](../queries/publicationsCount.md)** → `Count` `(catalogType, limit)`
  Count of publications. Limited to a maximum of 10000 by default.
- **[taxonomy](../queries/taxonomy.md)** → `Taxonomy`
  Access to Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) for categor

## Mutations (57)

- **[catalogContextUpdate](../mutations/catalogContextUpdate.md)** → `CatalogContextUpdatePayload` `(catalogId, contextsToAdd, contextsToRemove)`
  Modifies which contexts, like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.d
- **[catalogCreate](../mutations/catalogCreate.md)** → `CatalogCreatePayload` `(input)`
  Creates a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) that controls product availability and pricing for specifi
- **[catalogDelete](../mutations/catalogDelete.md)** → `CatalogDeletePayload` `(id, deleteDependentResources)`
  Delete a catalog.
- **[catalogUpdate](../mutations/catalogUpdate.md)** → `CatalogUpdatePayload` `(id, input)`
  Updates an existing [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) configuration. Catalogs control product publishi
- **[collectionAddProducts](../mutations/collectionAddProducts.md)** → `CollectionAddProductsPayload` `(id, productIds)`
  Adds multiple products to an existing collection in a single operation. This mutation provides an efficient way to bulk-manage collection membership w
- **[collectionAddProductsV2](../mutations/collectionAddProductsV2.md)** → `CollectionAddProductsV2Payload` `(id, productIds)`
  Adds products to a [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) asynchronously and returns a [`Job`](https://s
- **[collectionCreate](../mutations/collectionCreate.md)** → `CollectionCreatePayload` `(input)`
  Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
- **[collectionDelete](../mutations/collectionDelete.md)** → `CollectionDeletePayload` `(input)`
  Deletes a collection and removes it permanently from the store. This operation cannot be undone and will remove the collection from all sales channels
- **[collectionDuplicate](../mutations/collectionDuplicate.md)** → `CollectionDuplicatePayload` `(input)`
  Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).
- **[collectionPublish](../mutations/collectionPublish.md)** → `CollectionPublishPayload` `(input)`
  Publishes a collection to a channel.
- **[collectionRemoveProducts](../mutations/collectionRemoveProducts.md)** → `CollectionRemoveProductsPayload` `(id, productIds)`
  Removes multiple products from a collection in a single operation. This mutation can process large product sets (up to 250 products) and may take sign
- **[collectionReorderProducts](../mutations/collectionReorderProducts.md)** → `CollectionReorderProductsPayload` `(id, moves)`
  Asynchronously reorders products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should 
- **[collectionUnpublish](../mutations/collectionUnpublish.md)** → `CollectionUnpublishPayload` `(input)`
  Unpublishes a collection.
- **[collectionUpdate](../mutations/collectionUpdate.md)** → `CollectionUpdatePayload` `(input)`
  Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection),
- **[combinedListingUpdate](../mutations/combinedListingUpdate.md)** → `CombinedListingUpdatePayload` `(parentProductId, title, productsAdded, productsEdited, productsRemovedIds, optionsAndValues)`
  Add, remove and update `CombinedListing`s of a given Product.
- **[productBundleCreate](../mutations/productBundleCreate.md)** → `ProductBundleCreatePayload` `(input)`
  Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as compo
- **[productBundleUpdate](../mutations/productBundleUpdate.md)** → `ProductBundleUpdatePayload` `(input)`
  Updates a product bundle or componentized product.
- **[productChangeStatus](../mutations/productChangeStatus.md)** → `ProductChangeStatusPayload` `(productId, status)`
  Changes the status of a product. This allows you to set the availability of the product across all channels.
- **[productCreate](../mutations/productCreate.md)** → `ProductCreatePayload` `(product, media)`
  Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
- **[productCreateMedia](../mutations/productCreateMedia.md)** → `ProductCreateMediaPayload` `(productId, media)`
  Adds media files to a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as images, videos, or 3D models. Media file
- **[productDelete](../mutations/productDelete.md)** → `ProductDeletePayload` `(input, synchronous)`
  Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.
- **[productDeleteMedia](../mutations/productDeleteMedia.md)** → `ProductDeleteMediaPayload` `(productId, mediaIds)`
  Deletes media from a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as images, videos, and 3D models.
- **[productDuplicate](../mutations/productDuplicate.md)** → `ProductDuplicatePayload` `(productId, newTitle, newStatus, includeImages, includeTranslations, synchronous)`
  Duplicates a product.
- **[productFeedCreate](../mutations/productFeedCreate.md)** → `ProductFeedCreatePayload` `(input)`
  Creates a product feed for a specific publication.
- **[productFeedDelete](../mutations/productFeedDelete.md)** → `ProductFeedDeletePayload` `(id)`
  Deletes a product feed for a specific publication.
- **[productFullSync](../mutations/productFullSync.md)** → `ProductFullSyncPayload` `(beforeUpdatedAt, id, updatedAtSince)`
  Runs the full product sync for a given shop.
- **[productJoinSellingPlanGroups](../mutations/productJoinSellingPlanGroups.md)** → `ProductJoinSellingPlanGroupsPayload` `(id, sellingPlanGroupIds)`
  Adds multiple selling plan groups to a product.
- **[productLeaveSellingPlanGroups](../mutations/productLeaveSellingPlanGroups.md)** → `ProductLeaveSellingPlanGroupsPayload` `(id, sellingPlanGroupIds)`
  Removes multiple groups from a product.
- **[productOptionUpdate](../mutations/productOptionUpdate.md)** → `ProductOptionUpdatePayload` `(option, productId, optionValuesToAdd, optionValuesToUpdate, optionValuesToDelete, variantStrategy)`
  Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)
- **[productOptionsCreate](../mutations/productOptionsCreate.md)** → `ProductOptionsCreatePayload` `(productId, options, variantStrategy)`
  Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)
- **[productOptionsDelete](../mutations/productOptionsDelete.md)** → `ProductOptionsDeletePayload` `(productId, options, strategy)`
  Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)
- **[productOptionsReorder](../mutations/productOptionsReorder.md)** → `ProductOptionsReorderPayload` `(productId, options)`
  Reorders the [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and
- **[productPublish](../mutations/productPublish.md)** → `ProductPublishPayload` `(input)`
  Publishes a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) to specified [`Publication`](https://shopify.dev/docs/api/a
- **[productReorderMedia](../mutations/productReorderMedia.md)** → `ProductReorderMediaPayload` `(id, moves)`
  Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product display
- **[productSet](../mutations/productSet.md)** → `ProductSetPayload` `(input, synchronous, identifier)`
  Performs multiple operations to create or update products in a single request.
- **[productUnpublish](../mutations/productUnpublish.md)** → `ProductUnpublishPayload` `(input)`
  Unpublishes a product.
- **[productUpdate](../mutations/productUpdate.md)** → `ProductUpdatePayload` `(product, media)`
  Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
- **[productUpdateMedia](../mutations/productUpdateMedia.md)** → `ProductUpdateMediaPayload` `(productId, media)`
  Updates properties of media attached to a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). You can modify alt text for 
- **[productVariantAppendMedia](../mutations/productVariantAppendMedia.md)** → `ProductVariantAppendMediaPayload` `(productId, variantMedia)`
  Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. 
- **[productVariantDetachMedia](../mutations/productVariantDetachMedia.md)** → `ProductVariantDetachMediaPayload` `(productId, variantMedia)`
  Detaches media from product variants.
- **[productVariantJoinSellingPlanGroups](../mutations/productVariantJoinSellingPlanGroups.md)** → `ProductVariantJoinSellingPlanGroupsPayload` `(id, sellingPlanGroupIds)`
  Adds multiple selling plan groups to a product variant.
- **[productVariantLeaveSellingPlanGroups](../mutations/productVariantLeaveSellingPlanGroups.md)** → `ProductVariantLeaveSellingPlanGroupsPayload` `(id, sellingPlanGroupIds)`
  Remove multiple groups from a product variant.
- **[productVariantRelationshipBulkUpdate](../mutations/productVariantRelationshipBulkUpdate.md)** → `ProductVariantRelationshipBulkUpdatePayload` `(input)`
  Creates new bundles, updates component quantities in existing bundles, and removes bundle components for one or multiple [`ProductVariant`](https://sh
- **[productVariantsBulkCreate](../mutations/productVariantsBulkCreate.md)** → `ProductVariantsBulkCreatePayload` `(variants, productId, media, strategy)`
  Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
- **[productVariantsBulkDelete](../mutations/productVariantsBulkDelete.md)** → `ProductVariantsBulkDeletePayload` `(variantsIds, productId)`
  Deletes multiple variants in a single [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Specify the product ID and an ar
- **[productVariantsBulkReorder](../mutations/productVariantsBulkReorder.md)** → `ProductVariantsBulkReorderPayload` `(productId, positions)`
  Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.
- **[productVariantsBulkUpdate](../mutations/productVariantsBulkUpdate.md)** → `ProductVariantsBulkUpdatePayload` `(variants, productId, media, allowPartialUpdates)`
  Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
- **[pubSubServerPixelUpdate](../mutations/pubSubServerPixelUpdate.md)** → `PubSubServerPixelUpdatePayload` `(pubSubProject, pubSubTopic)`
  Updates the server pixel to connect to a Google PubSub endpoint.
- **[pubSubWebhookSubscriptionCreate](../mutations/pubSubWebhookSubscriptionCreate.md)** → `PubSubWebhookSubscriptionCreatePayload` `(topic, webhookSubscription)`
  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in
- **[pubSubWebhookSubscriptionUpdate](../mutations/pubSubWebhookSubscriptionUpdate.md)** → `PubSubWebhookSubscriptionUpdatePayload` `(id, webhookSubscription)`
  Updates a Google Cloud Pub/Sub webhook subscription.
- **[publicationCreate](../mutations/publicationCreate.md)** → `PublicationCreatePayload` `(input)`
  Creates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which [`Product`](https://shopify.dev/d
- **[publicationDelete](../mutations/publicationDelete.md)** → `PublicationDeletePayload` `(id)`
  Deletes a publication.
- **[publicationUpdate](../mutations/publicationUpdate.md)** → `PublicationUpdatePayload` `(id, input)`
  Updates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
- **[publishablePublish](../mutations/publishablePublish.md)** → `PublishablePublishPayload` `(id, input)`
  Publishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/d
- **[publishablePublishToCurrentChannel](../mutations/publishablePublishToCurrentChannel.md)** → `PublishablePublishToCurrentChannelPayload` `(id)`
  Publishes a resource to the current [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) associated with the requesting app.
- **[publishableUnpublish](../mutations/publishableUnpublish.md)** → `PublishableUnpublishPayload` `(id, input)`
  Unpublishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev
- **[publishableUnpublishToCurrentChannel](../mutations/publishableUnpublishToCurrentChannel.md)** → `PublishableUnpublishToCurrentChannelPayload` `(id)`
  Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`
