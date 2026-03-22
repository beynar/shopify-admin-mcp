# Enum: `ProductVariantsBulkCreateUserErrorCode`

Possible error codes that can be returned by `ProductVariantsBulkCreateUserError`.

## Values

- `INVALID_INPUT` — Input is invalid.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `NO_KEY_ON_CREATE` — On create, this key cannot be used.
- `VARIANT_ALREADY_EXISTS` — Variant already exists.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `GREATER_THAN_OR_EQUAL_TO` — Variant price must be greater than or equal to zero.
- `NEED_TO_ADD_OPTION_VALUES` — Variant options are not enough.
- `OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS` — Variant options are more than the product options.
- `TOO_MANY_INVENTORY_LOCATIONS` — Inventory locations cannot exceed the allowed resource limit or 10.
- `SUBSCRIPTION_VIOLATION` — You reached the limit of available SKUs in your current plan.
- `VARIANT_ALREADY_EXISTS_CHANGE_OPTION_VALUE` — Variant options already exist. Please change the variant option(s).
- `TRACKED_VARIANT_LOCATION_NOT_FOUND` — Quantity could not be set. The location was not found.
- `MUST_BE_FOR_THIS_PRODUCT` — Input must be for this product.
- `NOT_DEFINED_FOR_SHOP` — Input is not defined for this shop.
- `INVALID` — Invalid input detected.
- `NEGATIVE_PRICE_VALUE` — Price cannot take a negative value.
- `UNSUPPORTED_COMBINED_LISTING_PARENT_OPERATION` — Operation is not supported for a combined listing parent product.
- `CANNOT_SET_NAME_FOR_LINKED_OPTION_VALUE` — Cannot set name for an option value linked to a metafield.
- `INVENTORY_QUANTITIES_LIMIT_EXCEEDED` — Inventory quantity input exceeds the limit of 50000. Consider using separate `inventorySetQuantities` mutations.
