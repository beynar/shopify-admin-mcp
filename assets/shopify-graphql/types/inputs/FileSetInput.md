# Input Object: `FileSetInput`

The input fields required to create or update a file object.

## Input Fields

- `filename`: `String` — The name of the file. If provided, then the file is created with the specified filename.
- `contentType`: `FileContentType` — The file content type. If omitted, then Shopify will attempt to determine the content type during file processing.
- `alt`: `String` — The alt text description of the file for screen readers and accessibility.
- `duplicateResolutionMode`: `FileCreateInputDuplicateResolutionMode` = `APPEND_UUID` — How to handle if filename is already in use.
- `id`: `ID` — The ID of an existing file.
- `originalSource`: `String` — An external URL (for images only) or a

## Related Types

- [FileContentType](../../types/enums/FileContentType.md)
- [FileCreateInputDuplicateResolutionMode](../../types/enums/FileCreateInputDuplicateResolutionMode.md)
