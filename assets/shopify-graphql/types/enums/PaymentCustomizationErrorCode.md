# Enum: `PaymentCustomizationErrorCode`

Possible error codes that can be returned by `PaymentCustomizationError`.

## Values

- `CUSTOM_APP_FUNCTION_NOT_ELIGIBLE` — Shop plan not eligible to use Functions from a custom app.
- `FUNCTION_DOES_NOT_IMPLEMENT` — Function does not implement the required interface.
- `FUNCTION_NOT_FOUND` — Function not found.
- `FUNCTION_PENDING_DELETION` — Function is pending deletion.
- `INVALID` — The input value is invalid.
- `PAYMENT_CUSTOMIZATION_NOT_FOUND` — Payment customization not found.
- `PAYMENT_CUSTOMIZATION_FUNCTION_NOT_ELIGIBLE` — Shop must be on a Shopify Plus plan to activate payment customizations from a custom app.
- `MAXIMUM_ACTIVE_PAYMENT_CUSTOMIZATIONS` — Maximum payment customizations are already enabled.
- `REQUIRED_INPUT_FIELD` — Required input field must be present.
- `INVALID_METAFIELDS` — Could not create or update metafields.
- `FUNCTION_ID_CANNOT_BE_CHANGED` — Function ID cannot be changed.
- `MISSING_FUNCTION_IDENTIFIER` — Either function_id or function_handle must be provided.
- `MULTIPLE_FUNCTION_IDENTIFIERS` — Only one of function_id or function_handle can be provided, not both.
