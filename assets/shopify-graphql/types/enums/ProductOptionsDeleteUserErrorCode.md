# Enum: `ProductOptionsDeleteUserErrorCode`

Possible error codes that can be returned by `ProductOptionsDeleteUserError`.

## Values

- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `OPTION_DOES_NOT_EXIST` — Option does not exist.
- `OPTIONS_DO_NOT_BELONG_TO_THE_SAME_PRODUCT` — Options do not belong to the same product.
- `CANNOT_DELETE_OPTION_WITH_MULTIPLE_VALUES` — Can't delete option with multiple values.
- `CANNOT_USE_NON_DESTRUCTIVE_STRATEGY` — Cannot delete options without deleting variants.
- `CANNOT_MAKE_CHANGES_IF_VARIANT_IS_MISSING_REQUIRED_SKU` — At least one of the product variants has invalid SKUs.
- `UNSUPPORTED_COMBINED_LISTING_PARENT_OPERATION` — Operation is not supported for a combined listing parent product.
- `CANNOT_DELETE_VARIANT_WITHOUT_PERMISSION` — Cannot perform option deletion because it would result in deleting variants, and you don't have the required permissions.
