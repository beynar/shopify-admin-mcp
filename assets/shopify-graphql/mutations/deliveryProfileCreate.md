# Mutation: `deliveryProfileCreate`

**Returns:** `DeliveryProfileCreatePayload`

Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

## Arguments

- **`profile`**: `DeliveryProfileInput!` — Specifies the input fields for a delivery profile.

## Payload Fields

- `profile`: `DeliveryProfile` — The delivery profile that was created.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryProfile](../types/objects/DeliveryProfile.md)
- [DeliveryProfileCreatePayload](../types/objects/DeliveryProfileCreatePayload.md)
- [DeliveryProfileInput](../types/inputs/DeliveryProfileInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DeliveryProfileCreate($profile: DeliveryProfileInput!) {
  deliveryProfileCreate(profile: $profile) {
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
