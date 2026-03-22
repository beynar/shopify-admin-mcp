# Enum: `QuantityRuleUserErrorCode`

Possible error codes that can be returned by `QuantityRuleUserError`.

## Values

- `BLANK` — The input value is blank.
- `PRODUCT_VARIANT_DOES_NOT_EXIST` — Product variant ID does not exist.
- `PRICE_LIST_DOES_NOT_EXIST` — Price list does not exist.
- `VARIANT_QUANTITY_RULE_DOES_NOT_EXIST` — Quantity rule for variant associated with the price list provided does not exist.
- `MINIMUM_IS_GREATER_THAN_MAXIMUM` — Minimum must be lower than or equal to the maximum.
- `MINIMUM_IS_HIGHER_THAN_QUANTITY_PRICE_BREAK_MINIMUM` — Minimum must be less than or equal to all quantity price break minimums associated with this variant in the specified price list.
- `MAXIMUM_IS_LOWER_THAN_QUANTITY_PRICE_BREAK_MINIMUM` — Maximum must be greater than or equal to all quantity price break minimums associated with this variant in the specified price list.
- `INCREMENT_NOT_A_MULTIPLE_OF_QUANTITY_PRICE_BREAK_MINIMUM` — Increment must be a multiple of all quantity price break minimums associated with this variant in the specified price list.
- `INCREMENT_IS_GREATER_THAN_MINIMUM` — Increment must be lower than or equal to the minimum.
- `GREATER_THAN_OR_EQUAL_TO` — Value must be greater than or equal to 1.
- `MAXIMUM_NOT_MULTIPLE_OF_INCREMENT` — The maximum must be a multiple of the increment.
- `MINIMUM_NOT_MULTIPLE_OF_INCREMENT` — The minimum must be a multiple of the increment.
- `CATALOG_CONTEXT_DOES_NOT_SUPPORT_QUANTITY_RULES` — Quantity rules can be associated only with company location catalogs or catalogs associated with compatible markets.
- `DUPLICATE_INPUT_FOR_VARIANT` — Quantity rule inputs must be unique by variant id.
- `GENERIC_ERROR` — Something went wrong when trying to save the quantity rule. Please try again later.
