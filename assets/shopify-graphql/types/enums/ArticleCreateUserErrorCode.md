# Enum: `ArticleCreateUserErrorCode`

Possible error codes that can be returned by `ArticleCreateUserError`.

## Values

- `AMBIGUOUS_AUTHOR` — Can't create an article author if both author name and user ID are supplied.
- `AMBIGUOUS_BLOG` — Can't create a blog from input if a blog ID is supplied.
- `AUTHOR_FIELD_REQUIRED` — Can't create an article if both author name and user ID are blank.
- `AUTHOR_MUST_EXIST` — User must exist if a user ID is supplied.
- `INVALID_PUBLISH_DATE` — Can’t set isPublished to true and also set a future publish date.
- `BLOG_REFERENCE_REQUIRED` — Must reference or create a blog when creating an article.
- `UPLOAD_FAILED` — Image upload failed.
- `BLANK` — The input value is blank.
- `NOT_FOUND` — The record with the ID used as the input value couldn't be found.
- `TOO_LONG` — The input value is too long.
- `TAKEN` — The input value is already taken.
- `INVALID` — The input value is invalid.
- `INVALID_VALUE` — The value is invalid for the metafield type or for the definition options.
- `INVALID_TYPE` — The metafield type is invalid.
