# Object: `ResourcePublication`

A resource publication represents information about the publication of a resource.
An instance of `ResourcePublication`, unlike `ResourcePublicationV2`, can be neither published or scheduled to be published.

See [ResourcePublicationV2](/api/admin-graphql/latest/objects/ResourcePublicationV2) for more context.

## Fields

- `channel`: `Channel!` *(deprecated)* — The channel the resource publication is published to.
- `isPublished`: `Boolean!` — Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
- `publication`: `Publication!` — The publication the resource publication is published to.
- `publishDate`: `DateTime!` — The date that the resource publication was or is going to be published to the publication.
- `publishable`: `Publishable!` — The resource published to the publication.

## Related Types

- [Channel](../../types/objects/Channel.md)
- [Publication](../../types/objects/Publication.md)
- [Publishable](../../types/interfaces/Publishable.md)
