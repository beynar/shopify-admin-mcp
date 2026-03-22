# Object: `DeliveryProfile`

A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

**Implements:** `Node`

## Fields

- `activeMethodDefinitionsCount`: `Int!` — The number of active shipping rates for the profile.
- `default`: `Boolean!` — Whether this is the default profile.
- `id`: `ID!` — A globally-unique ID.
- `legacyMode`: `Boolean!` *(deprecated)* — Whether this shop has enabled legacy compatibility mode for delivery profiles.
- `locationsWithoutRatesCount`: `Int!` — The number of locations without rates defined.
- `name`: `String!` — The name of the delivery profile.
- `originLocationCount`: `Int!` — The number of active origin locations for the profile.
- `productVariantsCount`: `Count` — How many product variants are in this profile.
- `productVariantsCountV2`: `DeliveryProductVariantsCount!` *(deprecated)* — How many product variants are in this profile.
- `profileItems` `(first, after, last, before, reverse)`: `DeliveryProfileItemConnection!` — The products and variants associated with this profile.
- `profileLocationGroups` `(locationGroupId)`: `[DeliveryProfileLocationGroup!]!` — The location groups and associated zones using this profile.
- `sellingPlanGroups` `(first, after, last, before, reverse)`: `SellingPlanGroupConnection!` — Selling plan groups associated with the specified delivery profile.
- `unassignedLocations`: `[Location!]!` — List of locations that haven't been assigned to a location group for this profile.
- `unassignedLocationsPaginated` `(first, after, last, before, reverse)`: `LocationConnection!` — List of locations that have not been assigned to a location group for this profile.
- `version`: `Int!` — The version of the delivery profile.
- `zoneCountryCount`: `Int!` — The number of countries with active rates to deliver to.

## Related Types

- [Count](../../types/objects/Count.md)
- [DeliveryProductVariantsCount](../../types/objects/DeliveryProductVariantsCount.md)
- [DeliveryProfileLocationGroup](../../types/objects/DeliveryProfileLocationGroup.md)
- [Location](../../types/objects/Location.md)
