# Object: `ShopPolicy`

Policy that a merchant has configured for their store, such as their refund or privacy policy.

**Implements:** `HasPublishedTranslations`, `Node`

## Fields

- `body`: `HTML!` — The text of the policy. The maximum size is 512kb.
- `createdAt`: `Date!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was created.
- `id`: `ID!` — A globally-unique ID.
- `title`: `String!` — The translated title of the policy. For example, Refund Policy or Politique de remboursement.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `type`: `ShopPolicyType!` — The shop policy type.
- `updatedAt`: `Date!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was last modified.
- `url`: `URL!` — The public URL of the policy.

## Related Types

- [ShopPolicyType](../../types/enums/ShopPolicyType.md)
- [Translation](../../types/objects/Translation.md)
