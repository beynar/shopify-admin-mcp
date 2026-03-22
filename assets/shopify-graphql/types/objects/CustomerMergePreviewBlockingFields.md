# Object: `CustomerMergePreviewBlockingFields`

The blocking fields of a customer merge preview. These fields will block customer merge unless edited.

## Fields

- `note`: `String` — The merged note resulting from a customer merge. The merged note is over the 5000 character limit and will block customer merge.
- `tags`: `[String!]!` — The merged tags resulting from a customer merge. The merged tags are over the 250 limit and will block customer merge.
