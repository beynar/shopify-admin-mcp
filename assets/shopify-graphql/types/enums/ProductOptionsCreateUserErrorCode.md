# Enum: `ProductOptionsCreateUserErrorCode`

Possible error codes that can be returned by `ProductOptionsCreateUserError`.

## Values

- `OPTION_ALREADY_EXISTS` — Option already exists.
- `OPTIONS_OVER_LIMIT` — Options count is over the allowed limit.
- `OPTION_VALUES_OVER_LIMIT` — Option values count is over the allowed limit.
- `INVALID_NAME` — The name provided is not valid.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `NEW_OPTION_WITHOUT_VALUE_FOR_EXISTING_VARIANTS` — Cannot create new options without values for all existing variants.
- `DUPLICATED_OPTION_NAME` — Duplicated option name.
- `DUPLICATED_OPTION_VALUE` — Duplicated option value.
- `OPTION_NAME_MISSING` — Each option must have a name specified.
- `OPTION_VALUES_MISSING` — Each option must have at least one option value specified.
- `OPTION_VALUE_NAME_TOO_LONG` — Option value name is too long.
- `OPTION_NAME_TOO_LONG` — Option name is too long.
- `POSITION_OUT_OF_BOUNDS` — Position must be between 1 and the maximum number of options per product.
- `OPTION_POSITION_MISSING` — If specified, position field must be present in all option inputs.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `LINKED_METAFIELD_DEFINITION_NOT_FOUND` — No valid metafield definition found for linked option.
- `INVALID_METAFIELD_VALUE_FOR_LINKED_OPTION` — Invalid metafield value for linked option.
- `MISSING_METAFIELD_VALUES_FOR_LINKED_OPTION` — Missing metafield values for linked option.
- `CANNOT_COMBINE_LINKED_METAFIELD_AND_OPTION_VALUES` — Cannot combine linked metafield and option values.
- `DUPLICATE_LINKED_OPTION` — Cannot link multiple options to the same metafield.
- `OPTION_LINKED_METAFIELD_ALREADY_TAKEN` — An option linked to the provided metafield already exists.
- `LINKED_OPTIONS_NOT_SUPPORTED_FOR_SHOP` — Linked options are currently not supported for this shop.
- `CANNOT_MAKE_CHANGES_IF_VARIANT_IS_MISSING_REQUIRED_SKU` — At least one of the product variants has invalid SKUs.
- `UNSUPPORTED_COMBINED_LISTING_PARENT_OPERATION` — Operation is not supported for a combined listing parent product.
- `LINKED_METAFIELD_VALUE_WITHOUT_LINKED_OPTION` — Cannot specify 'linkedMetafieldValue' for an option that is not linked to a metafield.
- `TOO_MANY_VARIANTS_CREATED` — The number of option values created with the CREATE strategy would exceed the variant limit.
