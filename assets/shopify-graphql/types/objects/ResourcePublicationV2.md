# Object: `ResourcePublicationV2`

A resource publication represents information about the publication of a resource.
Unlike `ResourcePublication`, an instance of `ResourcePublicationV2` can't be unpublished. It must either be published or scheduled to be published.

See [ResourcePublication](/api/admin-graphql/latest/objects/ResourcePublication) for more context.

## Fields

- `isPublished`: `Boolean!` — Whether the resource publication is published. If true, then the resource publication is published to the publication.
- `publication`: `Publication!` — The publication the resource publication is published to.
- `publishDate`: `DateTime` — The date that the resource publication was or is going to be published to the publication.
- `publishable`: `Publishable!` — The resource published to the publication.

## Related Types

- [Publication](../../types/objects/Publication.md)
- [Publishable](../../types/interfaces/Publishable.md)
