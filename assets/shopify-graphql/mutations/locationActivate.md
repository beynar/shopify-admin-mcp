# Mutation: `locationActivate`

**Returns:** `LocationActivatePayload`

Activates a location so that you can stock inventory at the location. Refer to the
[`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and
[`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable)
fields on the `Location` object.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`locationId`**: `ID!` — The ID of a location to activate.

## Payload Fields

- `location`: `Location` — The location that was activated.
- `locationActivateUserErrors`: `[LocationActivateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Location](../types/objects/Location.md)
- [LocationActivatePayload](../types/objects/LocationActivatePayload.md)
- [LocationActivateUserError](../types/objects/LocationActivateUserError.md)

## Example Mutation

```graphql
mutation LocationActivate($locationId: ID!) {
  locationActivate(locationId: $locationId) {
    location {
      id
    }
    locationActivateUserErrors {
      id
    }
  }
}
```
