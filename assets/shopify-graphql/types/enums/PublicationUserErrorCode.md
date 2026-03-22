# Enum: `PublicationUserErrorCode`

Possible error codes that can be returned by `PublicationUserError`.

## Values

- `UNSUPPORTED_PUBLICATION_ACTION` — Can't perform this action on a publication.
- `PUBLICATION_NOT_FOUND` — Publication not found.
- `PUBLICATION_LOCKED` — The publication is currently being modified. Please try again later.
- `UNSUPPORTED_PUBLISHABLE_TYPE` — A catalog publication can only contain products.
- `INVALID_PUBLISHABLE_ID` — Publishable ID not found.
- `MARKET_NOT_FOUND` — Market does not exist.
- `CATALOG_NOT_FOUND` — Catalog does not exist.
- `CANNOT_MODIFY_APP_CATALOG_PUBLICATION` — Can't modify a publication that belongs to an app catalog.
- `CANNOT_MODIFY_MARKET_CATALOG_PUBLICATION` — Can't modify a publication that belongs to a market catalog.
- `CANNOT_MODIFY_APP_CATALOG` — Cannot modify a catalog for an app.
- `CANNOT_MODIFY_MARKET_CATALOG` — Cannot modify a catalog for a market.
- `INVALID` — The input value is invalid.
- `TAKEN` — The input value is already taken.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `BLANK` — The input value is blank.
- `PRODUCT_TYPE_INCOMPATIBLE_WITH_CATALOG_TYPE` — A product publication cannot be created because the catalog type associated with this publication does not permit publications of this product type.
- `PUBLICATION_UPDATE_LIMIT_EXCEEDED` — The limit for simultaneous publication updates has been exceeded.
