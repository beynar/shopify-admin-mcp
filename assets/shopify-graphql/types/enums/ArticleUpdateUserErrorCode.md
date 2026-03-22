# Enum: `ArticleUpdateUserErrorCode`

Possible error codes that can be returned by `ArticleUpdateUserError`.

## Values

- `AMBIGUOUS_AUTHOR` — Can't update an article author if both author name and user ID are supplied.
- `AMBIGUOUS_BLOG` — Can't create a blog from input if a blog ID is supplied.
- `AUTHOR_MUST_EXIST` — User must exist if a user ID is supplied.
- `INVALID_PUBLISH_DATE` — Can’t set isPublished to true and also set a future publish date.
- `UPLOAD_FAILED` — Image upload failed.
- `BLANK` — The input value is blank.
- `NOT_FOUND` — The record with the ID used as the input value couldn't be found.
- `TOO_LONG` — The input value is too long.
- `TAKEN` — The input value is already taken.
- `INVALID` — The input value is invalid.
- `INVALID_VALUE` — The value is invalid for the metafield type or for the definition options.
- `INVALID_TYPE` — The metafield type is invalid.
