# Input Object: `OrderCreateOptionsInput`

The input fields that define the strategies for updating inventory and
whether to send shipping and order confirmations to customers.

## Input Fields

- `inventoryBehaviour`: `OrderCreateInputsInventoryBehavior` = `BYPASS` — The strategy for handling updates to inventory: not claiming inventory, ignoring inventory policies,
- `sendReceipt`: `Boolean` = `false` — Whether to send an order confirmation to the customer.
- `sendFulfillmentReceipt`: `Boolean` = `false` — Whether to send a shipping confirmation to the customer.

## Related Types

- [OrderCreateInputsInventoryBehavior](../../types/enums/OrderCreateInputsInventoryBehavior.md)
