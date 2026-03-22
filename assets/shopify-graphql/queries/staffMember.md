# Query: `staffMember`

**Returns:** `StaffMember`

Retrieves a [staff member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) by ID. If no ID is provided, the query returns the staff member that's making the request. A staff member is a user who can access the Shopify admin to manage store operations.

Provides staff member details such as email, name, and shop owner status. When querying the current user (with or without an ID), additional [private data](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMember#returns-StaffMember.fields.privateData) becomes available.

## Arguments

- **`id`**: `ID` — The ID of the staff member to return. If no ID is provided, then the staff member making the query (if any) is returned.

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
query StaffMember($id: ID) {
  staffMember(id: $id) {
    active
    email
    exists
    firstName
  }
}
```
