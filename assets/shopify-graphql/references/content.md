# Content: Blog posts, articles, pages, menus, themes, URL redirects, translations

## Queries (30)

- **[article](../queries/article.md)** → `Article` `(id)`
  Returns a `Article` resource by ID.
- **[articleAuthors](../queries/articleAuthors.md)** → `ArticleAuthorConnection!` `(first, after, last, before, reverse)`
  List of article authors for the shop.
- **[articleTags](../queries/articleTags.md)** → `[String!]!` `(sort, limit)`
  List of all article tags.
- **[articles](../queries/articles.md)** → `ArticleConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns a paginated list of articles from the shop's blogs. [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects are
- **[blog](../queries/blog.md)** → `Blog` `(id)`
  Returns a `Blog` resource by ID.
- **[blogs](../queries/blogs.md)** → `BlogConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns a paginated list of the shop's [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) objects. Blogs serve as containers for
- **[blogsCount](../queries/blogsCount.md)** → `Count` `(query, limit)`
  Count of blogs. Limited to a maximum of 10000 by default.
- **[checkoutBranding](../queries/checkoutBranding.md)** → `CheckoutBranding` `(checkoutProfileId)`
  Returns the visual customizations for checkout for a given [checkout profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfil
- **[checkoutProfile](../queries/checkoutProfile.md)** → `CheckoutProfile` `(id)`
  Returns a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile). Checkout profiles define the branding settin
- **[checkoutProfiles](../queries/checkoutProfiles.md)** → `CheckoutProfileConnection!` `(first, after, last, before, reverse, sortKey, query)`
  List of checkout profiles on a shop.
- **[comment](../queries/comment.md)** → `Comment` `(id)`
  Returns a `Comment` resource by ID.
- **[comments](../queries/comments.md)** → `CommentConnection!` `(first, after, last, before, reverse, sortKey, query)`
  List of the shop's comments.
- **[consentPolicy](../queries/consentPolicy.md)** → `[ConsentPolicy!]!` `(id, countryCode, regionCode, consentRequired, dataSaleOptOutRequired)`
  Returns the customer privacy consent policies of a shop.
- **[consentPolicyRegions](../queries/consentPolicyRegions.md)** → `[ConsentPolicyRegion!]!`
  List of countries and regions for which consent policies can be created or updated.
- **[menu](../queries/menu.md)** → `Menu` `(id)`
  Returns a `Menu` resource by ID.
- **[menus](../queries/menus.md)** → `MenuConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Retrieves navigation menus. Menus organize content into hierarchical navigation structures that merchants can display in the online store (for example
- **[onlineStore](../queries/onlineStore.md)** → `OnlineStore!`
  The shop's online store channel.
- **[page](../queries/page.md)** → `Page` `(id)`
  Returns a `Page` resource by ID.
- **[pages](../queries/pages.md)** → `PageConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  A paginated list of pages from the online store. [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) objects are content pages th
- **[pagesCount](../queries/pagesCount.md)** → `Count` `(limit)`
  Count of pages. Limited to a maximum of 10000 by default.
- **[theme](../queries/theme.md)** → `OnlineStoreTheme` `(id)`
  Returns an [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) by its ID. Use this query to retrieve them
- **[themes](../queries/themes.md)** → `OnlineStoreThemeConnection` `(roles, names, first, after, last, before, reverse)`
  Returns a paginated list of [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) objects for the online st
- **[translatableResource](../queries/translatableResource.md)** → `TranslatableResource` `(resourceId)`
  Retrieves a resource that has translatable fields. Returns the resource's [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Tr
- **[translatableResources](../queries/translatableResources.md)** → `TranslatableResourceConnection!` `(resourceType, first, after, last, before, reverse)`
  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for a spe
- **[translatableResourcesByIds](../queries/translatableResourcesByIds.md)** → `TranslatableResourceConnection!` `(resourceIds, first, after, last, before, reverse)`
  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for the s
- **[urlRedirect](../queries/urlRedirect.md)** → `UrlRedirect` `(id)`
  Returns a `UrlRedirect` resource by ID.
- **[urlRedirectImport](../queries/urlRedirectImport.md)** → `UrlRedirectImport` `(id)`
  Returns a `UrlRedirectImport` resource by ID.
- **[urlRedirectSavedSearches](../queries/urlRedirectSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  A list of the shop's URL redirect saved searches.
- **[urlRedirects](../queries/urlRedirects.md)** → `UrlRedirectConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  A list of redirects for a shop.
- **[urlRedirectsCount](../queries/urlRedirectsCount.md)** → `Count` `(query, savedSearchId, limit)`
  Count of redirects. Limited to a maximum of 10000 by default.

## Mutations (37)

- **[articleCreate](../mutations/articleCreate.md)** → `ArticleCreatePayload` `(article, blog)`
  Creates an [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). Articles are content pieces that include a title, body text
- **[articleDelete](../mutations/articleDelete.md)** → `ArticleDeletePayload` `(id)`
  Permanently deletes a blog article from a shop's blog. This mutation removes the article and all associated metadata.
- **[articleUpdate](../mutations/articleUpdate.md)** → `ArticleUpdatePayload` `(id, article, blog)`
  Updates an existing [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). You can modify the article's content, metadata, pu
- **[blogCreate](../mutations/blogCreate.md)** → `BlogCreatePayload` `(blog)`
  Creates a new blog within a shop, establishing a container for organizing articles.
- **[blogDelete](../mutations/blogDelete.md)** → `BlogDeletePayload` `(id)`
  Permanently deletes a blog from a shop. This mutation removes the blog container and its organizational structure.
- **[blogUpdate](../mutations/blogUpdate.md)** → `BlogUpdatePayload` `(id, blog)`
  Updates an existing blog's configuration and settings. This mutation allows merchants to modify blog properties to keep their content strategy current
- **[checkoutBrandingUpsert](../mutations/checkoutBrandingUpsert.md)** → `CheckoutBrandingUpsertPayload` `(checkoutProfileId, checkoutBrandingInput)`
  Updates the visual branding for a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile), customizing how chec
- **[commentApprove](../mutations/commentApprove.md)** → `CommentApprovePayload` `(id)`
  Approves a pending comment, making it visible to store visitors on the associated blog article.
- **[commentDelete](../mutations/commentDelete.md)** → `CommentDeletePayload` `(id)`
  Permanently removes a comment from a blog article.
- **[commentNotSpam](../mutations/commentNotSpam.md)** → `CommentNotSpamPayload` `(id)`
  Reverses a spam classification on a comment, restoring it to normal moderation status. This mutation allows merchants to change their decision when a 
- **[commentSpam](../mutations/commentSpam.md)** → `CommentSpamPayload` `(id)`
  Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links
- **[consentPolicyUpdate](../mutations/consentPolicyUpdate.md)** → `ConsentPolicyUpdatePayload` `(consentPolicies)`
  Update or create consent policies in bulk.
- **[menuCreate](../mutations/menuCreate.md)** → `MenuCreatePayload` `(title, handle, items)`
  Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help cus
- **[menuDelete](../mutations/menuDelete.md)** → `MenuDeletePayload` `(id)`
  Deletes a menu.
- **[menuUpdate](../mutations/menuUpdate.md)** → `MenuUpdatePayload` `(id, title, handle, items)`
  Updates a [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for display on the storefront. Modifies the menu's title and naviga
- **[pageCreate](../mutations/pageCreate.md)** → `PageCreatePayload` `(page)`
  Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.
- **[pageDelete](../mutations/pageDelete.md)** → `PageDeletePayload` `(id)`
  Permanently deletes a page from the online store.
- **[pageUpdate](../mutations/pageUpdate.md)** → `PageUpdatePayload` `(id, page)`
  Updates an existing page's content and settings.
- **[themeCreate](../mutations/themeCreate.md)** → `ThemeCreatePayload` `(source, name, role)`
  Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded u
- **[themeDelete](../mutations/themeDelete.md)** → `ThemeDeletePayload` `(id)`
  Deletes a theme.
- **[themeDuplicate](../mutations/themeDuplicate.md)** → `ThemeDuplicatePayload` `(id, name)`
  Duplicates a theme.
- **[themeFilesCopy](../mutations/themeFilesCopy.md)** → `ThemeFilesCopyPayload` `(themeId, files)`
  Copy theme files. Copying to existing theme files will overwrite them.
- **[themeFilesDelete](../mutations/themeFilesDelete.md)** → `ThemeFilesDeletePayload` `(themeId, files)`
  Deletes a theme's files.
- **[themeFilesUpsert](../mutations/themeFilesUpsert.md)** → `ThemeFilesUpsertPayload` `(themeId, files)`
  Creates or updates theme files in an online store theme. This mutation allows batch operations on multiple theme files, either creating new files or o
- **[themePublish](../mutations/themePublish.md)** → `ThemePublishPayload` `(id)`
  Publishes a theme.
- **[themeUpdate](../mutations/themeUpdate.md)** → `ThemeUpdatePayload` `(id, input)`
  Updates a theme.
- **[translationsRegister](../mutations/translationsRegister.md)** → `TranslationsRegisterPayload` `(resourceId, translations)`
  Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent)
- **[translationsRemove](../mutations/translationsRemove.md)** → `TranslationsRemovePayload` `(resourceId, translationKeys, locales, marketIds)`
  Deletes translations.
- **[urlRedirectBulkDeleteAll](../mutations/urlRedirectBulkDeleteAll.md)** → `UrlRedirectBulkDeleteAllPayload`
  Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.
- **[urlRedirectBulkDeleteByIds](../mutations/urlRedirectBulkDeleteByIds.md)** → `UrlRedirectBulkDeleteByIdsPayload` `(ids)`
  Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect)
- **[urlRedirectBulkDeleteBySavedSearch](../mutations/urlRedirectBulkDeleteBySavedSearch.md)** → `UrlRedirectBulkDeleteBySavedSearchPayload` `(savedSearchId)`
  Asynchronously delete redirects in bulk.
- **[urlRedirectBulkDeleteBySearch](../mutations/urlRedirectBulkDeleteBySearch.md)** → `UrlRedirectBulkDeleteBySearchPayload` `(search)`
  Asynchronously delete redirects in bulk.
- **[urlRedirectCreate](../mutations/urlRedirectCreate.md)** → `UrlRedirectCreatePayload` `(urlRedirect)`
  Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.
- **[urlRedirectDelete](../mutations/urlRedirectDelete.md)** → `UrlRedirectDeletePayload` `(id)`
  Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.
- **[urlRedirectImportCreate](../mutations/urlRedirectImportCreate.md)** → `UrlRedirectImportCreatePayload` `(url)`
  Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.
- **[urlRedirectImportSubmit](../mutations/urlRedirectImportSubmit.md)** → `UrlRedirectImportSubmitPayload` `(id)`
  Submits a `UrlRedirectImport` request to be processed.
- **[urlRedirectUpdate](../mutations/urlRedirectUpdate.md)** → `UrlRedirectUpdatePayload` `(id, urlRedirect)`
  Updates a URL redirect.
