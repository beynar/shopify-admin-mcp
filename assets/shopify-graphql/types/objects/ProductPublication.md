# Object: `ProductPublication`

Represents the channels where a product is published.

## Fields

- `channel`: `Channel!` — The channel where the product was or is published.
- `isPublished`: `Boolean!` — Whether the publication is published or not.
- `product`: `Product!` — The product that was or is going to be published on the channel.
- `publishDate`: `DateTime` — The date that the product was or is going to be published on the channel.

## Related Types

- [Channel](../../types/objects/Channel.md)
- [Product](../../types/objects/Product.md)
