# Enum: `MediaErrorCode`

Error types for media.

## Values

- `UNKNOWN` — Media error has occured for unknown reason.
- `INVALID_SIGNED_URL` — Media could not be processed because the signed URL was invalid.
- `IMAGE_DOWNLOAD_FAILURE` — Media could not be processed because the image could not be downloaded.
- `IMAGE_PROCESSING_FAILURE` — Media could not be processed because the image could not be processed.
- `MEDIA_TIMEOUT_ERROR` — Media timed out because it is currently being modified by another operation.
- `EXTERNAL_VIDEO_NOT_FOUND` — Media could not be created because the external video could not be found.
- `EXTERNAL_VIDEO_UNLISTED` — Media could not be created because the external video is not listed or is private.
- `EXTERNAL_VIDEO_INVALID_ASPECT_RATIO` — Media could not be created because the external video has an invalid aspect ratio.
- `EXTERNAL_VIDEO_EMBED_DISABLED` — Media could not be created because embed permissions are disabled for this video.
- `EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING` — Media could not be created because video is either not found or still transcoding.
- `GENERIC_FILE_DOWNLOAD_FAILURE` — File could not be processed because the source could not be downloaded.
- `GENERIC_FILE_INVALID_SIZE` — File could not be created because the size is too large.
- `VIDEO_METADATA_READ_ERROR` — Media could not be created because the metadata could not be read.
- `VIDEO_INVALID_FILETYPE_ERROR` — Media could not be created because it has an invalid file type.
- `VIDEO_MIN_WIDTH_ERROR` — Media could not be created because it does not meet the minimum width requirement.
- `VIDEO_MAX_WIDTH_ERROR` — Media could not be created because it does not meet the maximum width requirement.
- `VIDEO_MIN_HEIGHT_ERROR` — Media could not be created because it does not meet the minimum height requirement.
- `VIDEO_MAX_HEIGHT_ERROR` — Media could not be created because it does not meet the maximum height requirement.
- `VIDEO_MIN_DURATION_ERROR` — Media could not be created because it does not meet the minimum duration requirement.
- `VIDEO_MAX_DURATION_ERROR` — Media could not be created because it does not meet the maximum duration requirement.
- `VIDEO_VALIDATION_ERROR` — Video failed validation.
- `MODEL3D_VALIDATION_ERROR` — Model failed validation.
- `MODEL3D_THUMBNAIL_GENERATION_ERROR` — Media could not be created because the model's thumbnail generation failed.
- `MODEL3D_THUMBNAIL_REGENERATION_ERROR` — There was an issue while trying to generate a new thumbnail.
- `MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR` — Media could not be created because the model can't be converted to USDZ format.
- `MODEL3D_GLB_OUTPUT_CREATION_ERROR` — Media could not be created because the model file failed processing.
- `MODEL3D_PROCESSING_FAILURE` — Media could not be created because the model file failed processing.
- `UNSUPPORTED_IMAGE_FILE_TYPE` — Media could not be created because the image is an unsupported file type.
- `INVALID_IMAGE_FILE_SIZE` — Media could not be created because the image size is too large.
- `INVALID_IMAGE_ASPECT_RATIO` — Media could not be created because the image has an invalid aspect ratio.
- `INVALID_IMAGE_RESOLUTION` — Media could not be created because the image's resolution exceeds the max limit.
- `FILE_STORAGE_LIMIT_EXCEEDED` — Media could not be created because the cumulative file storage limit would be exceeded.
- `DUPLICATE_FILENAME_ERROR` — Media could not be created because a file with the same name already exists.
