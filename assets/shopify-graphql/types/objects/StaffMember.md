# Object: `StaffMember`

A user account that can access the Shopify admin to manage store operations. Includes personal information and account status.

You can assign staff members to [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for [B2B operations](https://shopify.dev/docs/apps/build/b2b), limiting their actions to those locations.

**Implements:** `Node`

## Fields

- `accountType`: `AccountType` — The type of account the staff member has.
- `active`: `Boolean!` — Whether the staff member is active.
- `avatar` `(fallback)`: `Image!` — The image used as the staff member's avatar in the Shopify admin.
- `email`: `String!` — The staff member's email address.
- `exists`: `Boolean!` — Whether the staff member's account exists.
- `firstName`: `String` — The staff member's first name.
- `id`: `ID!` — A globally-unique ID.
- `initials`: `[String!]` — The staff member's initials, if available.
- `isShopOwner`: `Boolean!` — Whether the staff member is the shop owner.
- `lastName`: `String` — The staff member's last name.
- `locale`: `String!` — The staff member's preferred locale. Locale values use the format `language` or `language-COUNTRY`, where `language` is a two-letter language code, and `COUNTRY` is a two-letter country code. For example: `en` or `en-US`
- `name`: `String!` — The staff member's full name.
- `phone`: `String` — The staff member's phone number.
- `privateData`: `StaffMemberPrivateData!` — The data used to customize the Shopify admin experience for the staff member.

## Related Types

- [AccountType](../../types/enums/AccountType.md)
- [Image](../../types/objects/Image.md)
- [StaffMemberDefaultImage](../../types/enums/StaffMemberDefaultImage.md)
- [StaffMemberPrivateData](../../types/objects/StaffMemberPrivateData.md)
