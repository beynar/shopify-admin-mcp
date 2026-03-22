# Object: `MediaImage`

The `MediaImage` object represents an image hosted on Shopify's
[content delivery network (CDN)](https://shopify.dev/docs/storefronts/themes/best-practices/performance/platform#shopify-cdn).
Shopify CDN is a content system that serves as the primary way to store,
manage, and deliver visual content for products, variants, and other resources across the Shopify platform.

The `MediaImage` object provides information to:

- Store and display product and variant images across online stores, admin interfaces, and mobile apps.
- Retrieve visual branding elements, including logos, banners, favicons, and background images in checkout flows.
- Retrieve signed URLs for secure, time-limited access to original image files.

Each `MediaImage` object provides both the processed image data (with automatic optimization and CDN delivery)
and access to the original source file. The image processing is handled asynchronously, so images
might not be immediately available after upload. The
[`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage#field-MediaImage.fields.status)
field indicates when processing is complete and the image is ready for use.

The `MediaImage` object implements the [`Media`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)
interface alongside other media types, like videos and 3D models.

Learn about
managing media for [products](https://shopify.dev/docs/apps/build/online-store/product-media),
[product variants](https://shopify.dev/docs/apps/build/online-store/product-variant-media), and
[asynchronous media management](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management).

**Implements:** `File`, `HasMetafields`, `HasPublishedTranslations`, `Media`, `Node`

## Fields

- `alt`: `String` — A word or phrase to share the nature or contents of a media.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
- `fileErrors`: `[FileError!]!` — Any errors that have occurred on the file.
- `fileStatus`: `FileStatus!` — The status of the file.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image for the media. Returns `null` until `status` is `READY`.
- `mediaContentType`: `MediaContentType!` — The media content type.
- `mediaErrors`: `[MediaError!]!` — Any errors which have occurred on the media.
- `mediaWarnings`: `[MediaWarning!]!` — The warnings attached to the media.
- `metafield` `(namespace, key)`: `Metafield` *(deprecated)* — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` *(deprecated)* — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `mimeType`: `String` — The MIME type of the image.
- `originalSource`: `MediaImageOriginalSource` — The original source of the image.
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `status`: `MediaStatus!` — Current status of the media.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

## Related Types

- [FileError](../../types/objects/FileError.md)
- [FileStatus](../../types/enums/FileStatus.md)
- [Image](../../types/objects/Image.md)
- [MediaContentType](../../types/enums/MediaContentType.md)
- [MediaError](../../types/objects/MediaError.md)
- [MediaImageOriginalSource](../../types/objects/MediaImageOriginalSource.md)
- [MediaPreviewImage](../../types/objects/MediaPreviewImage.md)
- [MediaStatus](../../types/enums/MediaStatus.md)
- [MediaWarning](../../types/objects/MediaWarning.md)
- [Metafield](../../types/objects/Metafield.md)
- [Translation](../../types/objects/Translation.md)
