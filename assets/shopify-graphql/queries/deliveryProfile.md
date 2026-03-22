# Query: `deliveryProfile`

**Returns:** `DeliveryProfile`

Retrieves a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) by ID. Delivery profiles group shipping settings for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects that ship from selected [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to [delivery zones](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone with defined rates.

Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

## Arguments

- **`id`**: `ID!` — The ID of the DeliveryProfile to return.

## Return Type Fields

- `activeMethodDefinitionsCount`: `Int!` — The number of active shipping rates for the profile.
- `default`: `Boolean!` — Whether this is the default profile.
- `id`: `ID!` — A globally-unique ID.
- `locationsWithoutRatesCount`: `Int!` — The number of locations without rates defined.
- `name`: `String!` — The name of the delivery profile.
- `originLocationCount`: `Int!` — The number of active origin locations for the profile.
- `productVariantsCount`: `Count` — How many product variants are in this profile.
- `profileItems`: `DeliveryProfileItemConnection!` — The products and variants associated with this profile.
- `profileLocationGroups`: `[DeliveryProfileLocationGroup!]!` — The location groups and associated zones using this profile.
- `sellingPlanGroups`: `SellingPlanGroupConnection!` — Selling plan groups associated with the specified delivery profile.
- `unassignedLocations`: `[Location!]!` — List of locations that haven't been assigned to a location group for this profile.
- `unassignedLocationsPaginated`: `LocationConnection!` — List of locations that have not been assigned to a location group for this profile.
- `version`: `Int!` — The version of the delivery profile.
- `zoneCountryCount`: `Int!` — The number of countries with active rates to deliver to.

## Related Types

- [Count](../types/objects/Count.md)
- [DeliveryProductVariantsCount](../types/objects/DeliveryProductVariantsCount.md)
- [DeliveryProfile](../types/objects/DeliveryProfile.md)
- [DeliveryProfileLocationGroup](../types/objects/DeliveryProfileLocationGroup.md)
- [Location](../types/objects/Location.md)

## Example Query

```graphql
query DeliveryProfile($id: ID!) {
  deliveryProfile(id: $id) {
    activeMethodDefinitionsCount
    default
    locationsWithoutRatesCount
    name
  }
}
```
