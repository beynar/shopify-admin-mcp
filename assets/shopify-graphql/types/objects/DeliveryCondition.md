# Object: `DeliveryCondition`

A condition that must pass for a delivery method definition to be applied to an order.

**Implements:** `Node`

## Fields

- `conditionCriteria`: `DeliveryConditionCriteria!` — The value (weight or price) that the condition field is compared to.
- `field`: `DeliveryConditionField!` — The field to compare the criterion value against, using the operator.
- `id`: `ID!` — A globally-unique ID.
- `operator`: `DeliveryConditionOperator!` — The operator to compare the field and criterion value.

## Related Types

- [DeliveryConditionCriteria](../../types/unions/DeliveryConditionCriteria.md)
- [DeliveryConditionField](../../types/enums/DeliveryConditionField.md)
- [DeliveryConditionOperator](../../types/enums/DeliveryConditionOperator.md)
