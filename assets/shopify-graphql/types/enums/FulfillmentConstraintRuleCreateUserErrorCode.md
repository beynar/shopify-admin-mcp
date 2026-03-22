# Enum: `FulfillmentConstraintRuleCreateUserErrorCode`

Possible error codes that can be returned by `FulfillmentConstraintRuleCreateUserError`.

## Values

- `INPUT_INVALID` — Failed to create fulfillment constraint rule due to invalid input.
- `FUNCTION_NOT_FOUND` — No Shopify Function found for provided function_id.
- `FUNCTION_ALREADY_REGISTERED` — A fulfillment constraint rule already exists for the provided function_id.
- `FUNCTION_DOES_NOT_IMPLEMENT` — Function does not implement the required interface for this fulfillment constraint rule.
- `CUSTOM_APP_FUNCTION_NOT_ELIGIBLE` — Shop must be on a Shopify Plus plan to activate functions from a custom app.
- `FUNCTION_PENDING_DELETION` — Function is pending deletion and cannot have new rules created against it.
- `MULTIPLE_FUNCTION_IDENTIFIERS` — Only one of function_id or function_handle can be provided, not both.
- `MISSING_FUNCTION_IDENTIFIER` — Either function_id or function_handle must be provided.
- `MAXIMUM_FULFILLMENT_CONSTRAINT_RULES_REACHED` — Maximum number of fulfillment constraint rules reached. Limit is 10.
