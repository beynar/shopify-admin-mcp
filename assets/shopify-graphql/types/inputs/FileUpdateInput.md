# Input Object: `FileUpdateInput`

The input fields that are required to update a file object.

## Input Fields

- `id`: `ID!` — The ID of the file to be updated.
- `alt`: `String` — The alt text description of the file for screen readers and accessibility.
- `originalSource`: `String` — The source from which to update a media image or generic file.
- `previewImageSource`: `String` — The source from which to update the media preview image.
- `filename`: `String` — The name of the file including its extension.
- `referencesToAdd`: `[ID!]` — The IDs of the references to add to the file. Currently only accepts product IDs.
- `referencesToRemove`: `[ID!]` — The IDs of the references to remove from the file. Currently only accepts product IDs.
