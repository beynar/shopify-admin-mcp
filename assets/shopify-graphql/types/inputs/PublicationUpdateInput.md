# Input Object: `PublicationUpdateInput`

The input fields for updating a publication.

## Input Fields

- `publishablesToAdd`: `[ID!]` = `[]` — A list of publishable IDs to add. The maximum number of publishables to update simultaneously is 50.
- `publishablesToRemove`: `[ID!]` = `[]` — A list of publishable IDs to remove. The maximum number of publishables to update simultaneously is 50.
- `autoPublish`: `Boolean` — Whether new products should be automatically published to the publication.
