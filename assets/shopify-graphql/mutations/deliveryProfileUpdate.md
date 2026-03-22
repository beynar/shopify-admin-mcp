# Mutation: `deliveryProfileUpdate`

**Returns:** `DeliveryProfileUpdatePayload`

Updates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)'s configuration, including its shipping zones, rates, and associated products.

Modify location groups to control which fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects serve specific geographic areas. Add or remove shipping zones with custom countries and provinces. Create or update shipping methods with rate definitions and delivery conditions. Associate or dissociate [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to determine which products use this profile's shipping rules.

The mutation supports partial updates through dedicated input fields for creating, updating, and deleting specific components without affecting the entire profile structure.

Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

## Arguments

- **`id`**: `ID!` — The ID of the delivery profile to update.
- **`profile`**: `DeliveryProfileInput!` — Specifies the input fields for a delivery profile.

## Payload Fields

- `profile`: `DeliveryProfile` — The delivery profile that was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryProfile](../types/objects/DeliveryProfile.md)
- [DeliveryProfileInput](../types/inputs/DeliveryProfileInput.md)
- [DeliveryProfileUpdatePayload](../types/objects/DeliveryProfileUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DeliveryProfileUpdate($id: ID!, $profile: DeliveryProfileInput!) {
  deliveryProfileUpdate(id: $id, profile: $profile) {
    profile {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
