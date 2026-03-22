# Enum: `FilesErrorCode`

Possible error codes that can be returned by `FilesUserError`.

## Values

- `INVALID` — The input value is invalid.
- `FILE_DOES_NOT_EXIST` — File does not exist.
- `FILE_LOCKED` — File has a pending operation.
- `UNSUPPORTED_MEDIA_TYPE_FOR_FILENAME_UPDATE` — Filename update is only supported on Image and GenericFile.
- `TOO_MANY_ARGUMENTS` — Specify one argument: search, IDs, or deleteAll.
- `BLANK_SEARCH` — The search term must not be blank.
- `MISSING_ARGUMENTS` — At least one argument is required.
- `INVALID_QUERY` — Search query isn't supported.
- `PRODUCT_SUSPENDED` — One or more associated products are suspended.
- `INVALID_FILENAME_EXTENSION` — Invalid filename extension.
- `INVALID_FILENAME` — The provided filename is invalid.
- `FILENAME_ALREADY_EXISTS` — The provided filename already exists.
- `UNACCEPTABLE_UNVERIFIED_TRIAL_ASSET` — The file is not supported on trial accounts that have not validated their email. Either select a plan or verify the shop owner email to upload this file.
- `UNACCEPTABLE_ASSET` — The file type is not supported.
- `UNACCEPTABLE_TRIAL_ASSET` — The file is not supported on trial accounts. Select a plan to upload this file.
- `ALT_VALUE_LIMIT_EXCEEDED` — The alt value exceeds the maximum limit of 512 characters.
- `NON_READY_STATE` — The file is not in the READY state.
- `INVALID_FAILED_MEDIA_STATE` — File cannot be updated in a failed state.
- `NON_IMAGE_MEDIA_PER_SHOP_LIMIT_EXCEEDED` — Exceeded the limit of non-image media per shop.
- `MISMATCHED_FILENAME_AND_ORIGINAL_SOURCE` — Cannot create file with custom filename which does not match original source extension.
- `INVALID_DUPLICATE_MODE_FOR_TYPE` — Duplicate resolution mode is not supported for this file type.
- `INVALID_IMAGE_SOURCE_URL` — Invalid image source url value provided.
- `MISSING_FILENAME_FOR_DUPLICATE_MODE_REPLACE` — Duplicate resolution mode REPLACE cannot be used without specifying filename.
- `PRODUCT_MEDIA_LIMIT_EXCEEDED` — Exceeded the limit of media per product.
- `UNSUPPORTED_FILE_REFERENCE` — The file type is not supported for referencing.
- `REFERENCE_TARGET_DOES_NOT_EXIST` — The target resource does not exist.
- `TOO_MANY_FILE_REFERENCE` — Cannot add more than 10000 references to a file.
- `INVALID_DUPLICATE_RESOLUTION_MODE` — Invalid duplicate resolution mode provided.
