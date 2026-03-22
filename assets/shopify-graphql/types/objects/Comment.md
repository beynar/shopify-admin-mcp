# Object: `Comment`

A comment on an article.

**Implements:** `HasEvents`, `Node`

## Fields

- `article`: `Article` — The article associated with the comment.
- `author`: `CommentAuthor!` — The comment’s author.
- `body`: `String!` — The content of the comment.
- `bodyHtml`: `HTML!` — The content of the comment, complete with HTML formatting.
- `createdAt`: `DateTime!` — The date and time when the comment was created.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `ip`: `String` — The IP address of the commenter.
- `isPublished`: `Boolean!` — Whether or not the comment is published.
- `publishedAt`: `DateTime` — The date and time when the comment was published.
- `status`: `CommentStatus!` — The status of the comment.
- `updatedAt`: `DateTime` — The date and time when the comment was last updated.
- `userAgent`: `String` — The user agent of the commenter.

## Related Types

- [Article](../../types/objects/Article.md)
- [CommentAuthor](../../types/objects/CommentAuthor.md)
- [CommentStatus](../../types/enums/CommentStatus.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
