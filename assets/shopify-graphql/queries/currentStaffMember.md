# Query: `currentStaffMember`

**Returns:** `StaffMember`

The staff member making the API request.

## Return Type Fields

- `accountType`: `AccountType` — The type of account the staff member has.
- `active`: `Boolean!` — Whether the staff member is active.
- `avatar`: `Image!` — The image used as the staff member's avatar in the Shopify admin.
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

- [AccountType](../types/enums/AccountType.md)
- [Image](../types/objects/Image.md)
- [StaffMember](../types/objects/StaffMember.md)
- [StaffMemberPrivateData](../types/objects/StaffMemberPrivateData.md)

## Example Query

```graphql
query {
  currentStaffMember {
    active
    email
    exists
    firstName
  }
}
```
