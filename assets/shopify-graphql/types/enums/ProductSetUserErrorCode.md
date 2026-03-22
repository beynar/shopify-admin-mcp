# Enum: `ProductSetUserErrorCode`

Possible error codes that can be returned by `ProductSetUserError`.

## Values

- `ID_NOT_ALLOWED` — The id field is not allowed if identifier is provided.
- `MISSING_FIELD_REQUIRED` — The input field corresponding to the identifier is required.
- `INPUT_MISMATCH` — The identifier value does not match the value of the corresponding field in the input.
- `NOT_FOUND` — Resource matching the identifier was not found.
- `METAFIELD_MISMATCH` — The input argument `metafields` (if present) must contain the `customId` value.
- `GENERIC_ERROR` — Something went wrong, please try again.
- `INVALID_METAFIELD` — Metafield is not valid.
- `INVALID_VARIANT` — Product variant is not valid.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `PRODUCT_VARIANT_DOES_NOT_EXIST` — Product variant does not exist.
- `OPTION_DOES_NOT_EXIST` — Option does not exist.
- `OPTION_VALUE_DOES_NOT_EXIST` — Option value does not exist.
- `OPTIONS_OVER_LIMIT` — Options over limit.
- `OPTION_VALUES_OVER_LIMIT` — Option values over limit.
- `OPTION_VALUES_MISSING` — Each option must have at least one option value specified.
- `DUPLICATED_OPTION_NAME` — Duplicated option name.
- `DUPLICATED_OPTION_VALUE` — Duplicated option value.
- `VARIANTS_OVER_LIMIT` — Number of product variants exceeds shop limit.
- `PRODUCT_OPTIONS_INPUT_MISSING` — Must specify product options when updating variants.
- `VARIANTS_INPUT_MISSING` — Must specify variants when updating options.
- `GIFT_CARDS_NOT_ACTIVATED` — Gift card products can only be created after they have been activated.
- `GIFT_CARD_ATTRIBUTE_CANNOT_BE_CHANGED` — The product gift_card attribute cannot be changed after creation.
- `INVALID_PRODUCT` — Product is not valid.
- `INVALID_INPUT` — Input is not valid.
- `JOB_ERROR` — Error processing request in the background job.
- `CAPABILITY_VIOLATION` — The metafield violates a capability restriction.
- `CANNOT_COMBINE_LINKED_AND_NONLINKED_OPTION_VALUES` — An option cannot have both metafield linked and nonlinked option values.
- `INVALID_METAFIELD_VALUE_FOR_LINKED_OPTION` — Invalid metafield value for linked option.
- `DUPLICATE_LINKED_OPTION` — Cannot link multiple options to the same metafield.
- `DUPLICATED_METAFIELD_VALUE` — Duplicated metafield value for linked option.
- `LINKED_OPTIONS_NOT_SUPPORTED_FOR_SHOP` — Linked options are currently not supported for this shop.
- `LINKED_METAFIELD_DEFINITION_NOT_FOUND` — No valid metafield definition found for linked option.
- `DUPLICATED_VALUE` — Duplicated value.
- `HANDLE_NOT_UNIQUE` — Handle already in use. Please provide a new handle.
- `INVENTORY_QUANTITIES_LIMIT_EXCEEDED` — Inventory quantity input exceeds the limit of 50000. Consider using separate `inventorySetQuantities` mutations.
