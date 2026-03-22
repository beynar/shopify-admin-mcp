# Mutation: `deliverySettingUpdate`

**Returns:** `DeliverySettingUpdatePayload`

Set the delivery settings for a shop.

## Arguments

- **`setting`**: `DeliverySettingInput!` — Specifies the input fields for the delivery shop level settings.

## Payload Fields

- `setting`: `DeliverySetting` — The updated delivery shop level settings.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliverySetting](../types/objects/DeliverySetting.md)
- [DeliverySettingInput](../types/inputs/DeliverySettingInput.md)
- [DeliverySettingUpdatePayload](../types/objects/DeliverySettingUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DeliverySettingUpdate($setting: DeliverySettingInput!) {
  deliverySettingUpdate(setting: $setting) {
    setting {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
