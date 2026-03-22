# Object: `CartTransformEligibleOperations`

Controls which cart transformation operations apps can perform in your store. This lets you define exactly what types of cart modifications are allowed based on your checkout setup and business needs.

The eligible operations determine what cart transform functions can accomplish, providing a clear boundary for app capabilities within the store's ecosystem.

Learn more about [cart transform operations](https://shopify.dev/docs/api/functions/latest/cart-transform#multiple-operations).

## Fields

- `expandOperation`: `Boolean!` — The shop is eligible for expand operations.
- `mergeOperation`: `Boolean!` — The shop is eligible for merge operations.
- `updateOperation`: `Boolean!` — The shop is eligible for update operations.
