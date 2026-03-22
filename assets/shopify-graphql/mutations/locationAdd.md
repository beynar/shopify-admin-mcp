# Mutation: `locationAdd`

**Returns:** `LocationAddPayload`

Adds a new [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where you can stock inventory and fulfill orders. Locations represent physical places like warehouses, retail stores, or fulfillment centers.

The location requires a name and address with at least a country code. You can specify whether the location fulfills online orders, which determines if its inventory is available for online sales. You can also attach custom [metafields](https://shopify.dev/docs/apps/build/custom-data) to store additional information about the location.

## Arguments

- **`input`**: `LocationAddInput!` — The properties of the location to add.

## Payload Fields

- `location`: `Location` — The location that was added.
- `userErrors`: `[LocationAddUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Location](../types/objects/Location.md)
- [LocationAddInput](../types/inputs/LocationAddInput.md)
- [LocationAddPayload](../types/objects/LocationAddPayload.md)
- [LocationAddUserError](../types/objects/LocationAddUserError.md)

## Example Mutation

```graphql
mutation LocationAdd($input: LocationAddInput!) {
  locationAdd(input: $input) {
    location {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
