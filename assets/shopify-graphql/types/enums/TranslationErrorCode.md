# Enum: `TranslationErrorCode`

Possible error codes that can be returned by `TranslationUserError`.

## Values

- `BLANK` — The input value is blank.
- `INVALID` — The input value is invalid.
- `RESOURCE_NOT_FOUND` — Resource does not exist.
- `RESOURCE_NOT_TRANSLATABLE` — Resource is not translatable.
- `TOO_MANY_KEYS_FOR_RESOURCE` — Too many translation keys for the resource.
- `INVALID_KEY_FOR_MODEL` — Translation key is invalid.
- `FAILS_RESOURCE_VALIDATION` — Translation value is invalid.
- `INVALID_TRANSLATABLE_CONTENT` — Translatable content is invalid.
- `INVALID_MARKET_LOCALIZABLE_CONTENT` — Market localizable content is invalid.
- `INVALID_LOCALE_FOR_SHOP` — Locale is invalid for the shop.
- `INVALID_CODE` — Locale language code is invalid.
- `INVALID_FORMAT` — Locale code format is invalid.
- `MARKET_CUSTOM_CONTENT_NOT_ALLOWED` — The shop isn't allowed to operate on market custom content.
- `MARKET_DOES_NOT_EXIST` — The market corresponding to the `marketId` argument doesn't exist.
- `MARKET_LOCALE_CREATION_FAILED` — The market override locale creation failed.
- `RESOURCE_NOT_MARKET_CUSTOMIZABLE` — The specified resource can't be customized for a market.
- `INVALID_LOCALE_FOR_MARKET` *(deprecated)* — The locale is missing on the market corresponding to the `marketId` argument.
- `INVALID_VALUE_FOR_HANDLE_TRANSLATION` — The handle is already taken for this resource.
