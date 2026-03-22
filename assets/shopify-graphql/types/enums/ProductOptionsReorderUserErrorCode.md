# Enum: `ProductOptionsReorderUserErrorCode`

Possible error codes that can be returned by `ProductOptionsReorderUserError`.

## Values

- `OPTION_NAME_DOES_NOT_EXIST` — Option name does not exist.
- `OPTION_VALUE_DOES_NOT_EXIST` — Option value does not exist.
- `OPTION_ID_DOES_NOT_EXIST` — Option id does not exist.
- `OPTION_VALUE_ID_DOES_NOT_EXIST` — Option value id does not exist.
- `DUPLICATED_OPTION_NAME` — Duplicated option name.
- `DUPLICATED_OPTION_VALUE` — Duplicated option value.
- `MISSING_OPTION_NAME` — Missing option name.
- `MISSING_OPTION_VALUE` — Missing option value.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `PRODUCT_SUSPENDED` — Product is suspended.
- `NO_KEY_ON_REORDER` — On reorder, this key cannot be used.
- `MIXING_ID_AND_NAME_KEYS_IS_NOT_ALLOWED` — Cannot specify different options or option values using mixed id and name reference key.
- `CANNOT_MAKE_CHANGES_IF_VARIANT_IS_MISSING_REQUIRED_SKU` — At least one of the product variants has invalid SKUs.
