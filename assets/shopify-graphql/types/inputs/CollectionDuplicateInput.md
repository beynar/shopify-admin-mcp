# Input Object: `CollectionDuplicateInput`

The input fields for duplicating a collection.

## Input Fields

- `collectionId`: `ID!` — The ID of the collection to be duplicated.
- `newTitle`: `String!` — The new title of the collection.
- `copyPublications`: `Boolean` = `true` — Whether to duplicate the collection's publications (channel availability). When `true` (default), the duplicated collection will be published to the same channels as the original. When `false`, the duplicated collection will be unpublished on all channels.
