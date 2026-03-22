# Enum: `BulkProductResourceFeedbackCreateUserErrorCode`

Possible error codes that can be returned by `BulkProductResourceFeedbackCreateUserError`.

## Values

- `MAXIMUM_FEEDBACK_LIMIT_EXCEEDED` — The operation was attempted on too many feedback objects. The maximum number of feedback objects that you can operate on is 50.
- `OUTDATED_FEEDBACK` — The feedback for a later version of this resource was already accepted.
- `PRODUCT_NOT_FOUND` — The product wasn't found or isn't available to the channel.
- `INVALID` — The input value is invalid.
- `BLANK` — The input value is blank.
- `PRESENT` — The input value needs to be blank.
- `LESS_THAN_OR_EQUAL_TO` — The input value should be less than or equal to the maximum value allowed.
