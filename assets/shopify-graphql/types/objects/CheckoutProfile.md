# Object: `CheckoutProfile`

A checkout profile defines the branding settings and the UI extensions for a store's checkout. A checkout profile could be published or draft. A store might have at most one published checkout profile, which is used to render their live checkout. The store could also have multiple draft profiles that were created, previewed, and published using the admin checkout editor.

**Implements:** `Node`

## Fields

- `createdAt`: `DateTime!` — The date and time when the checkout profile was created.
- `editedAt`: `DateTime!` — The date and time when the checkout profile was last edited.
- `id`: `ID!` — A globally-unique ID.
- `isPublished`: `Boolean!` — Whether the checkout profile is published or not.
- `name`: `String!` — The profile name.
- `typOspPagesActive`: `Boolean!` — Whether the checkout profile Thank You Page and Order Status Page are actively using extensibility or not.
- `updatedAt`: `DateTime!` — The date and time when the checkout profile was last updated.
