# Input Object: `DeliveryMethodDefinitionInput`

The input fields for a method definition.

## Input Fields

- `id`: `ID` — A globally-unique ID of the method definition. Use only when updating a method definition.
- `name`: `String` — The name of the method definition.
- `description`: `String` — The description of the method definition.
- `active`: `Boolean` — Whether to use this method definition during rate calculation.
- `rateDefinition`: `DeliveryRateDefinitionInput` — A rate definition to apply to the method definition.
- `participant`: `DeliveryParticipantInput` — A participant to apply to the method definition.
- `weightConditionsToCreate`: `[DeliveryWeightConditionInput!]` — A list of weight conditions on the method definition.
- `priceConditionsToCreate`: `[DeliveryPriceConditionInput!]` — A list of price conditions on the method definition.
- `conditionsToUpdate`: `[DeliveryUpdateConditionInput!]` — A list of conditions to update on the method definition.

## Related Types

- [DeliveryParticipantInput](../../types/inputs/DeliveryParticipantInput.md)
- [DeliveryPriceConditionInput](../../types/inputs/DeliveryPriceConditionInput.md)
- [DeliveryRateDefinitionInput](../../types/inputs/DeliveryRateDefinitionInput.md)
- [DeliveryUpdateConditionInput](../../types/inputs/DeliveryUpdateConditionInput.md)
- [DeliveryWeightConditionInput](../../types/inputs/DeliveryWeightConditionInput.md)
