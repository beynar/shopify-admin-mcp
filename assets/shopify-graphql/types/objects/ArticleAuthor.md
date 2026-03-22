# Object: `ArticleAuthor`

Represents the author of an article. This object provides the author's full name for attribution purposes.

The `ArticleAuthor` is a simple object that contains only the author's name field. When articles are created or updated, the author information is stored and can be displayed alongside the article content.

Use the `ArticleAuthor` object to:
- Retrieve the author's name for display in article bylines
- Show author attribution in article listings
- Display who wrote specific content

Note: This object only contains the author's full name. It does not include additional author details like bio, email, or social media links.

## Fields

- `name`: `String!` — The author's full name.
