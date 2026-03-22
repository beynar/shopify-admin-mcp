# Enum: `BulkMutationErrorCode`

Possible error codes that can be returned by `BulkMutationUserError`.

## Values

- `OPERATION_IN_PROGRESS` — The operation did not run because another bulk mutation is already running. [Wait for the operation to finish](https://shopify.dev/api/usage/bulk-operations/imports#wait-for-the-operation-to-finish) before retrying this operation.
- `INVALID_MUTATION` — The operation did not run because the mutation is invalid. Check your mutation syntax and try again.
- `INVALID_STAGED_UPLOAD_FILE` — The JSONL file submitted via the `stagedUploadsCreate` mutation is invalid. Update the file and try again.
- `NO_SUCH_FILE` — The JSONL file could not be found. Try [uploading the file](https://shopify.dev/api/usage/bulk-operations/imports#generate-the-uploaded-url-and-parameters) again, and check that you've entered the URL correctly for the `stagedUploadPath` mutation argument.
- `INTERNAL_FILE_SERVER_ERROR` — There was a problem reading the JSONL file. This error might be intermittent, so you can try performing the same query again.
- `LIMIT_REACHED` — Bulk operations limit reached. Please try again later.
