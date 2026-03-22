# Enum: `CartTransformCreateUserErrorCode`

Possible error codes that can be returned by `CartTransformCreateUserError`.

## Values

- `INPUT_INVALID` — Failed to create cart transform due to invalid input.
- `FUNCTION_NOT_FOUND` — No Shopify Function found for provided function_id.
- `FUNCTION_ALREADY_REGISTERED` — A cart transform function already exists for the provided function_id.
- `FUNCTION_DOES_NOT_IMPLEMENT` — Function does not implement the required interface for this cart_transform function.
- `INVALID_METAFIELDS` — Could not create or update metafields.
- `MULTIPLE_FUNCTION_IDENTIFIERS` — Only one of function_id or function_handle can be provided, not both.
- `MISSING_FUNCTION_IDENTIFIER` — Either function_id or function_handle must be provided.
