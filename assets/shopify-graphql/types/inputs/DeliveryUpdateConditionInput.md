# Input Object: `DeliveryUpdateConditionInput`

The input fields for updating the condition of a delivery method definition.

## Input Fields

- `id`: `ID!` — A globally-unique ID of the condition.
- `criteria`: `Float` — The value that will be used in comparison.
- `criteriaUnit`: `String` — The unit associated with the value that will be used in comparison.
- `field`: `DeliveryConditionField` — The property of an order that will be used in comparison.
- `operator`: `DeliveryConditionOperator` — The operator to use for comparison.

## Related Types

- [DeliveryConditionField](../../types/enums/DeliveryConditionField.md)
- [DeliveryConditionOperator](../../types/enums/DeliveryConditionOperator.md)
