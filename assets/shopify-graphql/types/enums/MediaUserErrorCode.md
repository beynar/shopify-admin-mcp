# Enum: `MediaUserErrorCode`

Possible error codes that can be returned by `MediaUserError`.

## Values

- `INVALID` — The input value is invalid.
- `BLANK` — The input value is blank.
- `VIDEO_VALIDATION_ERROR` — Video validation failed.
- `MODEL3D_VALIDATION_ERROR` — Model validation failed.
- `VIDEO_THROTTLE_EXCEEDED` — Video creation throttle was exceeded.
- `MODEL3D_THROTTLE_EXCEEDED` — Model3d creation throttle was exceeded.
- `PRODUCT_MEDIA_LIMIT_EXCEEDED` — Exceeded the limit of media per product.
- `SHOP_MEDIA_LIMIT_EXCEEDED` — Exceeded the limit of media per shop.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `MEDIA_DOES_NOT_EXIST` — Media does not exist.
- `MEDIA_DOES_NOT_EXIST_ON_PRODUCT` — Media does not exist on the given product.
- `TOO_MANY_MEDIA_PER_INPUT_PAIR` — Only one mediaId is allowed per variant-media input pair.
- `MAXIMUM_VARIANT_MEDIA_PAIRS_EXCEEDED` — Exceeded the maximum number of 100 variant-media pairs per mutation call.
- `INVALID_MEDIA_TYPE` — Invalid media type.
- `PRODUCT_VARIANT_SPECIFIED_MULTIPLE_TIMES` — Variant specified in more than one pair.
- `PRODUCT_VARIANT_DOES_NOT_EXIST_ON_PRODUCT` — Variant does not exist on the given product.
- `NON_READY_MEDIA` — Non-ready media are not supported.
- `PRODUCT_VARIANT_ALREADY_HAS_MEDIA` — Product variant already has attached media.
- `MEDIA_IS_NOT_ATTACHED_TO_VARIANT` — The specified media is not attached to the specified variant.
- `MEDIA_CANNOT_BE_MODIFIED` — Media cannot be modified. It is currently being modified by another operation.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `MISSING_ARGUMENTS` — Missing arguments.
