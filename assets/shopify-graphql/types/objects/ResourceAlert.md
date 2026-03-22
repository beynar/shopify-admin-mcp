# Object: `ResourceAlert`

An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants.
They can optionally have a specific icon and be dismissed by merchants.

## Fields

- `actions`: `[ResourceAlertAction!]!` — Buttons in the alert that link to related information.
- `content`: `HTML!` — The secondary text in the alert that includes further information or instructions about how to solve a problem.
- `dismissibleHandle`: `String` — Unique identifier that appears when an alert is manually closed by the merchant.
- `icon`: `ResourceAlertIcon` — An icon that's optionally displayed with the alert.
- `severity`: `ResourceAlertSeverity!` — Indication of how important the alert is.
- `title`: `String!` — The primary text in the alert that includes information or describes the problem.

## Related Types

- [ResourceAlertAction](../../types/objects/ResourceAlertAction.md)
- [ResourceAlertIcon](../../types/enums/ResourceAlertIcon.md)
- [ResourceAlertSeverity](../../types/enums/ResourceAlertSeverity.md)
