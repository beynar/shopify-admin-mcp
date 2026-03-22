# Object: `StagedMediaUploadTarget`

Information about a staged upload target, which should be used to send a request to upload
the file.

For more information on the upload process, refer to
[Upload media to Shopify](https://shopify.dev/apps/online-store/media/products#step-1-upload-media-to-shopify).

## Fields

- `parameters`: `[StagedUploadParameter!]!` — Parameters needed to authenticate a request to upload the file.
- `resourceUrl`: `URL` — The URL to be passed as `originalSource` in
- `url`: `URL` — The URL to use when sending an request to upload the file. Should be used in conjunction with

## Related Types

- [StagedUploadParameter](../../types/objects/StagedUploadParameter.md)
