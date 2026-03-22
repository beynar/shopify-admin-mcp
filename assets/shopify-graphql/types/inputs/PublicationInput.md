# Input Object: `PublicationInput`

The input fields required to publish a resource.

## Input Fields

- `publicationId`: `ID` — ID of the publication.
- `publishDate`: `DateTime` — The date and time that the resource was published. Setting this to a date in the future will schedule the resource to be published. Only online store channels support future publishing. This field has no effect if you include it in the `publishableUnpublish` mutation.
