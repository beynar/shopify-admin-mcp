# Enum: `CatalogUserErrorCode`

Possible error codes that can be returned by `CatalogUserError`.

## Values

- `APP_CATALOG_PRICE_LIST_ASSIGNMENT` — An app catalog cannot be assigned to a price list.
- `CATALOG_FAILED_TO_SAVE` — Catalog failed to save.
- `CATALOG_NOT_FOUND` — The catalog wasn't found.
- `PRICE_LIST_NOT_ALLOWED_FOR_PRIMARY_MARKET` — A price list cannot be assigned to the primary market.
- `CATALOG_CONTEXT_DOES_NOT_SUPPORT_QUANTITY_RULES` — Quantity rules can be associated only with company location catalogs or catalogs associated with compatible markets.
- `CATALOG_CONTEXT_DOES_NOT_SUPPORT_QUANTITY_PRICE_BREAKS` — Quantity price breaks can be associated only with company location catalogs or catalogs associated with compatible markets.
- `CANNOT_ADD_MORE_THAN_ONE_MARKET` — The catalog can't be associated with more than one market.
- `COMPANY_LOCATION_CATALOG_STATUS_PLAN` — A company location catalog outside of a supported plan can only have an archived status.
- `CONTEXT_ALREADY_ASSIGNED_TO_CATALOG` — Context driver already assigned to this catalog.
- `CONTEXT_CATALOG_LIMIT_REACHED` — Cannot save the catalog because the catalog limit for the context was reached.
- `COMPANY_LOCATION_NOT_FOUND` — The company location could not be found.
- `CONTEXT_DRIVER_MISMATCH` — The arguments `contextsToAdd` and `contextsToRemove` must match existing catalog context type.
- `COUNTRY_CATALOG_PRICE_LIST_ASSIGNMENT` — A country catalog cannot be assigned to a price list.
- `COUNTRY_PRICE_LIST_ASSIGNMENT` — A country price list cannot be assigned to a catalog.
- `INVALID_CATALOG_CONTEXT_TYPE` — The catalog context type is invalid.
- `MARKET_CATALOG_STATUS` — A market catalog must have an active status.
- `MARKET_NOT_FOUND` — Market not found.
- `MARKET_AND_PRICE_LIST_CURRENCY_MISMATCH` — The catalog's market and price list currencies do not match.
- `MARKET_TAKEN` — Market already belongs to another catalog.
- `MANAGED_COUNTRY_BELONGS_TO_ANOTHER_CATALOG` — The managed country belongs to another catalog.
- `MUST_PROVIDE_EXACTLY_ONE_CONTEXT_TYPE` — Must provide exactly one context type.
- `PRICE_LIST_FAILED_TO_SAVE` — Price list failed to save.
- `PRICE_LIST_NOT_FOUND` — Price list not found.
- `PRICE_LIST_LOCKED` — The price list is currently being modified. Please try again later.
- `CATALOG_CONTEXT_LOCKED` — The catalog context is currently being modified. Please try again later.
- `PUBLICATION_NOT_FOUND` — Publication not found.
- `REQUIRES_CONTEXTS_TO_ADD_OR_REMOVE` — Must have `contexts_to_add` or `contexts_to_remove` argument.
- `UNSUPPORTED_CATALOG_ACTION` — Can't perform this action on a catalog of this type.
- `CANNOT_CREATE_APP_CATALOG` — Cannot create a catalog for an app.
- `CANNOT_MODIFY_APP_CATALOG` — Cannot modify a catalog for an app.
- `CANNOT_DELETE_APP_CATALOG` — Cannot delete a catalog for an app.
- `CANNOT_CREATE_MARKET_CATALOG` — Cannot create a catalog for a market.
- `CANNOT_MODIFY_MARKET_CATALOG` — Cannot modify a catalog for a market.
- `CANNOT_DELETE_MARKET_CATALOG` — Cannot delete a catalog for a market.
- `UNPERMITTED_ENTITLEMENTS_MARKET_CATALOGS` — Managing this catalog is not supported by your plan.
- `INVALID` — The input value is invalid.
- `TAKEN` — The input value is already taken.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `BLANK` — The input value is blank.
- `INVALID_CONTEXT_CHANGE` — Cannot change context to specified type.
