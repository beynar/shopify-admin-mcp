# Object: `Image`

Represents an image resource.

**Implements:** `HasMetafields`, `HasPublishedTranslations`

## Fields

- `altText`: `String` — A word or phrase to share the nature or contents of an image.
- `height`: `Int` — The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify.
- `id`: `ID` — A unique ID for the image.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `originalSrc`: `URL!` *(deprecated)* — The location of the original image as a URL.
- `src`: `URL!` *(deprecated)* — The location of the image as a URL.
- `thumbhash`: `String` — The ThumbHash of the image.
- `transformedSrc` `(maxWidth, maxHeight, crop, scale, preferredContentType)`: `URL!` *(deprecated)* — The location of the transformed image as a URL.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `url` `(transform)`: `URL!` — The location of the image as a URL.
- `width`: `Int` — The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

## Related Types

- [CropRegion](../../types/enums/CropRegion.md)
- [ImageContentType](../../types/enums/ImageContentType.md)
- [ImageTransformInput](../../types/inputs/ImageTransformInput.md)
- [Metafield](../../types/objects/Metafield.md)
- [Translation](../../types/objects/Translation.md)
