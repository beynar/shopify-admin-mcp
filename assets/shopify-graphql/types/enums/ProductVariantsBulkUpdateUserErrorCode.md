# Enum: `ProductVariantsBulkUpdateUserErrorCode`

Possible error codes that can be returned by `ProductVariantsBulkUpdateUserError`.

## Values

- `INVALID_INPUT` — Input is invalid.
- `CANNOT_SPECIFY_BOTH` — Mutually exclusive input fields provided.
- `MUST_SPECIFY_ONE_OF_PAIR` — Mandatory field input field missing.
- `OPTION_VALUE_NAME_TOO_LONG` — Option value name is too long.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `PRODUCT_VARIANT_ID_MISSING` — Product variant is missing ID attribute.
- `PRODUCT_VARIANT_DOES_NOT_EXIST` — Product variant does not exist.
- `OPTION_DOES_NOT_EXIST` — Option does not exist.
- `OPTION_VALUE_DOES_NOT_EXIST` — Option value does not exist.
- `MUST_BE_FOR_THIS_PRODUCT` — Input must be for this product.
- `NOT_DEFINED_FOR_SHOP` — Input is not defined for this shop.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `NO_INVENTORY_QUANTITIES_ON_VARIANTS_UPDATE` — Inventory quantities can only be provided during create. To update inventory for existing variants, use inventoryAdjustQuantities.
- `VARIANT_ALREADY_EXISTS` — The variant already exists.
- `GREATER_THAN_OR_EQUAL_TO` — The price of the variant must be greater than or equal to zero.
- `NEED_TO_ADD_OPTION_VALUES` — Variant options are not enough.
- `OPTION_VALUES_FOR_NUMBER_OF_UNKNOWN_OPTIONS` — Variant options are more than the product options.
- `SUBSCRIPTION_VIOLATION` — You reached the limit of available SKUs in your current plan.
- `NO_INVENTORY_QUANTITES_DURING_UPDATE` — Inventory quantities cannot be provided during update.
- `NEGATIVE_PRICE_VALUE` — Price cannot take a negative value.
- `BLANK` — The input value is blank.
- `TOO_SHORT` — The input value is too short.
- `TOO_LONG` — The input value is too long.
- `INVALID_VALUE` — Metafield value is invalid.
- `CANNOT_SET_NAME_FOR_LINKED_OPTION_VALUE` — Cannot set name for an option value linked to a metafield.
- `UNSUPPORTED_COMBINED_LISTING_PARENT_OPERATION` — Operation is not supported for a combined listing parent product.
- `INVENTORY_QUANTITIES_LIMIT_EXCEEDED` — Inventory quantity input exceeds the limit of 50000. Consider using separate `inventorySetQuantities` mutations.
