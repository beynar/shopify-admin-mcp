# Input Object: `DeliveryParticipantInput`

The input fields for a participant.

## Input Fields

- `id`: `ID` — The ID of the participant.
- `carrierServiceId`: `ID` — The ID of the carrier service for this participant.
- `fixedFee`: `MoneyInput` — The fixed feed that's defined by the merchant for this participant.
- `percentageOfRateFee`: `Float` — The merchant-defined percentage-of-rate fee for this participant.
- `participantServices`: `[DeliveryParticipantServiceInput!]` — The list of shipping services offered by the participant.
- `adaptToNewServices`: `Boolean` — Whether to automatically display new shipping services to the customer when a service becomes available.

## Related Types

- [DeliveryParticipantServiceInput](../../types/inputs/DeliveryParticipantServiceInput.md)
- [MoneyInput](../../types/inputs/MoneyInput.md)
