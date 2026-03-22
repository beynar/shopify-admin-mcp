# Enum: `DiscountErrorCode`

Possible error codes that can be returned by `DiscountUserError`.

## Values

- `BLANK` — The input value is blank.
- `PRESENT` — The input value needs to be blank.
- `EQUAL_TO` — The input value should be equal to the value allowed.
- `GREATER_THAN` — The input value should be greater than the minimum allowed value.
- `GREATER_THAN_OR_EQUAL_TO` — The input value should be greater than or equal to the minimum value allowed.
- `INVALID` — The input value is invalid.
- `LESS_THAN_OR_EQUAL_TO` — The input value should be less than or equal to the maximum value allowed.
- `LESS_THAN` — The input value should be less than the maximum value allowed.
- `TAKEN` — The input value is already taken.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `INTERNAL_ERROR` — Unexpected internal error happened.
- `TOO_MANY_ARGUMENTS` — Too many arguments provided.
- `MISSING_ARGUMENT` — Missing a required argument.
- `ACTIVE_PERIOD_OVERLAP` — The active period overlaps with other automatic discounts. At any given time, only 25 automatic discounts can be active.
- `END_DATE_BEFORE_START_DATE` — The end date should be after the start date.
- `EXCEEDED_MAX` — The value exceeded the maximum allowed value.
- `MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT` — Specify a minimum subtotal or a quantity, but not both.
- `VALUE_OUTSIDE_RANGE` — The value is outside of the allowed range.
- `CONFLICT` — The attribute selection contains conflicting settings.
- `IMPLICIT_DUPLICATE` — The value is already present through another selection.
- `DUPLICATE` — The input value is already present.
- `INCLUSION` — The input value isn't included in the list.
- `INVALID_COMBINES_WITH_FOR_DISCOUNT_CLASS` — The `combinesWith` settings are invalid for the discount class.
- `INVALID_DISCOUNT_CLASS_FOR_PRICE_RULE` — The discountClass is invalid for the price rule.
- `MAX_APP_DISCOUNTS` — The active period overlaps with too many other app-provided discounts. There's a limit on the number of app discounts that can be active at any given time.
- `APPLIES_ON_NOTHING` — A discount cannot have both appliesOnOneTimePurchase and appliesOnSubscription set to false.
- `RECURRING_CYCLE_LIMIT_NOT_A_VALID_INTEGER` — Recurring cycle limit must be a valid integer greater than or equal to 0.
- `MULTIPLE_RECURRING_CYCLE_LIMIT_FOR_NON_SUBSCRIPTION_ITEMS` — Recurring cycle limit must be 1 when discount does not apply to subscription items.
- `MISSING_FUNCTION_IDENTIFIER` — Either function ID or function handle must be provided.
- `MULTIPLE_FUNCTION_IDENTIFIERS` — Only one of function ID or function handle is allowed.
