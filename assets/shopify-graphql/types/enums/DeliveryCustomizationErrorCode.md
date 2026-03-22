# Enum: `DeliveryCustomizationErrorCode`

Possible error codes that can be returned by `DeliveryCustomizationError`.

## Values

- `INVALID` — The input value is invalid.
- `FUNCTION_NOT_FOUND` — Function not found.
- `DELIVERY_CUSTOMIZATION_NOT_FOUND` — Delivery customization not found.
- `DELIVERY_CUSTOMIZATION_FUNCTION_NOT_ELIGIBLE` — Shop must be on a Shopify Plus plan to activate delivery customizations from a custom app.
- `UNAUTHORIZED_APP_SCOPE` — Unauthorized app scope.
- `MAXIMUM_ACTIVE_DELIVERY_CUSTOMIZATIONS` — Maximum delivery customizations are already enabled.
- `CUSTOM_APP_FUNCTION_NOT_ELIGIBLE` — Shop must be on a Shopify Plus plan to activate functions from a custom app.
- `FUNCTION_DOES_NOT_IMPLEMENT` — Function does not implement the required interface for this delivery customization.
- `FUNCTION_PENDING_DELETION` — Function is pending deletion.
- `FUNCTION_ID_CANNOT_BE_CHANGED` — Function ID cannot be changed.
- `REQUIRED_INPUT_FIELD` — Required input field must be present.
- `INVALID_METAFIELDS` — Could not create or update metafields.
- `MISSING_FUNCTION_IDENTIFIER` — Either function_id or function_handle must be provided.
- `MULTIPLE_FUNCTION_IDENTIFIERS` — Only one of function_id or function_handle can be provided, not both.
