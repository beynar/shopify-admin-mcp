# Input Object: `PublicationCreateInput`

The input fields for creating a publication.

## Input Fields

- `catalogId`: `ID` — The ID of the catalog.
- `defaultState`: `PublicationCreateInputPublicationDefaultState` = `EMPTY` — Whether to create an empty publication or prepopulate it with all products.
- `autoPublish`: `Boolean` = `false` — Whether to automatically add newly created products to this publication.

## Related Types

- [PublicationCreateInputPublicationDefaultState](../../types/enums/PublicationCreateInputPublicationDefaultState.md)
