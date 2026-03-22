# Mutation: `deliveryPromiseProviderUpsert`

**Returns:** `DeliveryPromiseProviderUpsertPayload`

Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.

## Arguments

- **`active`**: `Boolean` — Whether the delivery promise provider is active. Defaults to `true` when creating a provider.
- **`fulfillmentDelay`**: `Int` — The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.
- **`timeZone`**: `String` — The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises. Defaults to `UTC` when creating a provider.
- **`locationId`**: `ID!` — The ID of the location that will be associated with the delivery promise provider.

## Payload Fields

- `deliveryPromiseProvider`: `DeliveryPromiseProvider` — The created or updated delivery promise provider.
- `userErrors`: `[DeliveryPromiseProviderUpsertUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryPromiseProvider](../types/objects/DeliveryPromiseProvider.md)
- [DeliveryPromiseProviderUpsertPayload](../types/objects/DeliveryPromiseProviderUpsertPayload.md)
- [DeliveryPromiseProviderUpsertUserError](../types/objects/DeliveryPromiseProviderUpsertUserError.md)

## Example Mutation

```graphql
mutation DeliveryPromiseProviderUpsert($active: Boolean, $fulfillmentDelay: Int, $timeZone: String, $locationId: ID!) {
  deliveryPromiseProviderUpsert(active: $active, fulfillmentDelay: $fulfillmentDelay, timeZone: $timeZone, locationId: $locationId) {
    deliveryPromiseProvider {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
