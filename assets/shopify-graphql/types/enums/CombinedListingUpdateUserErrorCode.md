# Enum: `CombinedListingUpdateUserErrorCode`

Possible error codes that can be returned by `CombinedListingUpdateUserError`.

## Values

- `CANNOT_HAVE_DUPLICATED_PRODUCTS` — Unable to add duplicated products.
- `CANNOT_HAVE_PARENT_AS_CHILD` — Unable to add a product that is a parent.
- `CANNOT_HAVE_REPEATED_OPTION_VALUES` — Option values cannot be repeated.
- `CANNOT_HAVE_REPEATED_OPTIONS` — Unable to add products with repeated options.
- `CANT_ADD_OPTIONS_VALUES_IF_ALREADY_EXISTS` — Unable to add options values that are already in use.
- `COMBINED_LISTINGS_NOT_ENABLED` — Combined listings feature is not enabled.
- `EDIT_AND_REMOVE_ON_SAME_PRODUCTS` — Cannot perform edit and remove on same products.
- `FAILED_TO_ADD_PRODUCTS` — Unable to add products.
- `FAILED_TO_REMOVE_PRODUCTS` — Unable to remove products.
- `FAILED_TO_UPDATE_PRODUCTS` — Unable to update products.
- `LINKED_METAFIELD_CANNOT_BE_CHANGED` — An option linked to a metafield cannot be linked to a different metafield.
- `LINKED_METAFIELD_VALUE_MISSING` — Linked metafield value missing from `optionsAndValues` field.
- `LINKED_METAFIELDS_CANNOT_BE_REPEATED` — The same metafield cannot be linked to multiple options.
- `LINKED_OPTIONS_NOT_SUPPORTED_FOR_SHOP` — Linked options are currently not supported for this shop.
- `MISSING_OPTION_VALUES` — The optionsAndValues field is required for this operation.
- `MUST_HAVE_SELECTED_OPTION_VALUES` — Selected option values cannot be empty.
- `OPTION_NAME_CANNOT_BE_BLANK` — Unable to add products with blank option names.
- `OPTION_NAME_CONTAINS_INVALID_CHARACTERS` — Option name contains invalid characters.
- `OPTION_NOT_FOUND` — Option does not exist.
- `OPTIONS_MUST_BE_EQUAL_TO_THE_OTHER_COMPONENTS` — All child products must include the same options.
- `OPTION_VALUES_CANNOT_BE_BLANK` — Unable to update options with blank option values.
- `OPTION_VALUES_CANNOT_BE_EMPTY` — Unable to update options with no option values.
- `OPTION_VALUES_MUST_BE_COMPLETE` — The options_and_values field must contain all option values used in the combined listing.
- `PARENT_PRODUCT_CANNOT_BE_COMBINED_LISTING_CHILD` — Parent product cannot be a combined listing child.
- `PARENT_PRODUCT_MUST_BE_A_COMBINED_LISTING` — Unable to update components for a product that isn't a combined listing.
- `PARENT_PRODUCT_MUST_HAVE_CATEGORY` — The combined listing parent product must have a product category to use linked metafield options.
- `PARENT_PRODUCT_NOT_FOUND` — Parent product not found.
- `PRODUCT_IS_ALREADY_A_CHILD` — Unable to add a product that is already a child.
- `PRODUCT_MEMBERSHIP_NOT_FOUND` — Failed to remove mebmership due to invalid input.
- `PRODUCT_NOT_FOUND` — Unable to add products that do not exist.
- `TITLE_TOO_LONG` — The title cannot be longer than 255 characters.
- `TOO_MANY_VARIANTS` — You have reached the maximum number of variants across all products for an individual combined listing.
- `TOO_MANY_PRODUCTS` — You have reached the maximum number of products that can be added to an individual combined listing.
- `UNEXPECTED_ERROR` — An unexpected error occurred.
