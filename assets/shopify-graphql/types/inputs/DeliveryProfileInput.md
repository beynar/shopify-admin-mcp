# Input Object: `DeliveryProfileInput`

The input fields for a delivery profile.

## Input Fields

- `name`: `String` — The name of the delivery profile.
- `profileLocationGroups`: `[DeliveryProfileLocationGroupInput!]` — The list of location groups associated with the delivery profile.
- `locationGroupsToCreate`: `[DeliveryProfileLocationGroupInput!]` — The list of location groups to be created in the delivery profile.
- `locationGroupsToUpdate`: `[DeliveryProfileLocationGroupInput!]` — The list of location groups to be updated in the delivery profile.
- `locationGroupsToDelete`: `[ID!]` — The list of location groups to be deleted from the delivery profile.
- `variantsToAssociate`: `[ID!]` — The list of product variant IDs to be associated with the delivery profile.
- `variantsToDissociate`: `[ID!]` — The list of product variant IDs to be dissociated from the delivery profile.
- `zonesToDelete`: `[ID!]` — The list of zone IDs to delete.
- `methodDefinitionsToDelete`: `[ID!]` — The list of method definition IDs to delete.
- `conditionsToDelete`: `[ID!]` — The list of condition IDs to delete.
- `sellingPlanGroupsToAssociate`: `[ID!]` — The list of selling plan groups to be associated with the delivery profile.
- `sellingPlanGroupsToDissociate`: `[ID!]` — The list of selling plan groups to be dissociated with the delivery profile.

## Related Types

- [DeliveryProfileLocationGroupInput](../../types/inputs/DeliveryProfileLocationGroupInput.md)
