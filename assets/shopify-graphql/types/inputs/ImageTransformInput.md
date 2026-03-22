# Input Object: `ImageTransformInput`

The available options for transforming an image.

All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

## Input Fields

- `crop`: `CropRegion` — The region of the image to remain after cropping.
- `maxWidth`: `Int` — Image width in pixels between 1 and 5760.
- `maxHeight`: `Int` — Image height in pixels between 1 and 5760.
- `scale`: `Int` = `1` — Image size multiplier for high-resolution retina displays. Must be within 1..3.
- `preferredContentType`: `ImageContentType` — Convert the source image into the preferred content type.

## Related Types

- [CropRegion](../../types/enums/CropRegion.md)
- [ImageContentType](../../types/enums/ImageContentType.md)
