# Object: `DeliveryParticipant`

A participant defines carrier-calculated rates for shipping services
with a possible merchant-defined fixed fee or a percentage-of-rate fee.

**Implements:** `Node`

## Fields

- `adaptToNewServicesFlag`: `Boolean!` — Whether to display new shipping services automatically to the customer when the service becomes available.
- `carrierService`: `DeliveryCarrierService!` — The carrier used for this participant.
- `fixedFee`: `MoneyV2` — The merchant-defined fixed fee for this participant.
- `id`: `ID!` — A globally-unique ID.
- `participantServices`: `[DeliveryParticipantService!]!` — The carrier-specific services offered by the participant, and whether each service is active.
- `percentageOfRateFee`: `Float!` — The merchant-defined percentage-of-rate fee for this participant.

## Related Types

- [DeliveryCarrierService](../../types/objects/DeliveryCarrierService.md)
- [DeliveryParticipantService](../../types/objects/DeliveryParticipantService.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
