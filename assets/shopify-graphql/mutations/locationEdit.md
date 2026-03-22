# Mutation: `locationEdit`

**Returns:** `LocationEditPayload`

Updates the properties of an existing [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location). You can modify the location's name, address, whether it fulfills online orders, and custom [`metafields`](https://shopify.dev/docs/apps/build/custom-data).

Apps that created a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can edit the associated location to ensure accurate representation of their fulfillment network.

> Note:
> You can't disable the [`fulfillsOnlineOrders`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit#arguments-input.fields.fulfillsOnlineOrders) setting for fulfillment service locations.

Learn more about [editing locations for fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

## Arguments

- **`id`**: `ID!` — The ID of a location to edit.
- **`input`**: `LocationEditInput!` — The updated properties for the location.

## Payload Fields

- `location`: `Location` — The location that was edited.
- `userErrors`: `[LocationEditUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Location](../types/objects/Location.md)
- [LocationEditInput](../types/inputs/LocationEditInput.md)
- [LocationEditPayload](../types/objects/LocationEditPayload.md)
- [LocationEditUserError](../types/objects/LocationEditUserError.md)

## Example Mutation

```graphql
mutation LocationEdit($id: ID!, $input: LocationEditInput!) {
  locationEdit(id: $id, input: $input) {
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
