# Input Object: `BlogUpdateInput`

The input fields to update a blog.

## Input Fields

- `handle`: `String` — A unique, human-friendly string for the blog. If no handle is specified, a handle will be generated automatically from the blog title.
- `templateSuffix`: `String` — The name of the template a blog is using if it's using an alternate template.
- `metafields`: `[MetafieldInput!]` — Attaches additional metadata to a store's resources.
- `commentPolicy`: `CommentPolicy` — Indicates whether readers can post comments to the blog and whether comments are moderated.
- `title`: `String` — The title of the blog.
- `redirectNewHandle`: `Boolean` = `false` — Whether a redirect is required after a new handle has been provided.
- `redirectArticles`: `Boolean` = `false` — Whether to redirect blog posts automatically.

## Related Types

- [CommentPolicy](../../types/enums/CommentPolicy.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
