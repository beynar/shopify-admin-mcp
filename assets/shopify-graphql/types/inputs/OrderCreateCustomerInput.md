# Input Object: `OrderCreateCustomerInput`

The input fields for a customer to associate with an order. Allows creation of a new customer or specifying an existing one.

## Input Fields

- `toAssociate`: `OrderCreateAssociateCustomerAttributesInput` — An existing customer to associate with the order, specified by ID.
- `toUpsert`: `OrderCreateUpsertCustomerAttributesInput` — A new customer to create or update and associate with the order.

## Related Types

- [OrderCreateAssociateCustomerAttributesInput](../../types/inputs/OrderCreateAssociateCustomerAttributesInput.md)
- [OrderCreateUpsertCustomerAttributesInput](../../types/inputs/OrderCreateUpsertCustomerAttributesInput.md)
