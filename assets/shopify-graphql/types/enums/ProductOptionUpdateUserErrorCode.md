# Enum: `ProductOptionUpdateUserErrorCode`

Possible error codes that can be returned by `ProductOptionUpdateUserError`.

## Values

- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `OPTION_DOES_NOT_EXIST` — Option does not exist.
- `OPTION_ALREADY_EXISTS` — Option already exists.
- `INVALID_POSITION` — The option position provided is not valid.
- `INVALID_NAME` — The name provided is not valid.
- `OPTION_VALUES_OVER_LIMIT` — Option values count is over the allowed limit.
- `OPTION_VALUE_DOES_NOT_EXIST` — Option value does not exist.
- `OPTION_VALUE_ALREADY_EXISTS` — Option value already exists.
- `OPTION_VALUE_HAS_VARIANTS` — Option value with variants linked cannot be deleted.
- `CANNOT_DELETE_ALL_OPTION_VALUES_IN_OPTION` — Deleting all option values of an option is not allowed.
- `CANNOT_LEAVE_OPTIONS_WITHOUT_VARIANTS` — An option cannot be left only with option values that are not linked to any variant.
- `NO_KEY_ON_CREATE` — On create, this key cannot be used.
- `KEY_MISSING_IN_INPUT` — A key is missing in the input.
- `DUPLICATED_OPTION_VALUE` — Duplicated option value.
- `OPTION_NAME_TOO_LONG` — Option name is too long.
- `OPTION_VALUE_NAME_TOO_LONG` — Option value name is too long.
- `OPTION_VALUE_CONFLICTING_OPERATION` — Performing conflicting actions on an option value.
- `CANNOT_CREATE_VARIANTS_ABOVE_LIMIT` — The number of variants will be above the limit after this operation.
- `CANNOT_COMBINE_LINKED_AND_NONLINKED_OPTION_VALUES` — An option cannot have both metafield linked and nonlinked option values.
- `INVALID_METAFIELD_VALUE_FOR_LINKED_OPTION` — Invalid metafield value for linked option.
- `DUPLICATE_LINKED_OPTION` — Cannot link multiple options to the same metafield.
- `OPTION_LINKED_METAFIELD_ALREADY_TAKEN` — An option linked to the provided metafield already exists.
- `LINKED_OPTION_UPDATE_MISSING_VALUES` — Updating the linked_metafield of an option requires a linked_metafield_value for each option value.
- `LINKED_OPTIONS_NOT_SUPPORTED_FOR_SHOP` — Linked options are currently not supported for this shop.
- `LINKED_METAFIELD_DEFINITION_NOT_FOUND` — No valid metafield definition found for linked option.
- `CANNOT_MAKE_CHANGES_IF_VARIANT_IS_MISSING_REQUIRED_SKU` — At least one of the product variants has invalid SKUs.
- `UNSUPPORTED_COMBINED_LISTING_PARENT_OPERATION` — Operation is not supported for a combined listing parent product.
- `CANNOT_DELETE_VARIANT_WITHOUT_PERMISSION` — Cannot update the option because it would result in deleting variants, and you don't have the required permissions.
- `TOO_MANY_VARIANTS_CREATED` — The number of option values created with the MANAGE strategy would exceed the variant limit.
