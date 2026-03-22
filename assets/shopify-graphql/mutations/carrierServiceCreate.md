# Mutation: `carrierServiceCreate`

**Returns:** `CarrierServiceCreatePayload`

Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. The carrier service connects to your external shipping rate calculation system through a callback URL.

When customers reach checkout, Shopify sends order details to your callback URL and displays the returned shipping rates. The service must be active to provide rates during checkout.

## Arguments

- **`input`**: `DeliveryCarrierServiceCreateInput!` — The input fields used to create a carrier service.

## Payload Fields

- `carrierService`: `DeliveryCarrierService` — The created carrier service.
- `userErrors`: `[CarrierServiceCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CarrierServiceCreatePayload](../types/objects/CarrierServiceCreatePayload.md)
- [CarrierServiceCreateUserError](../types/objects/CarrierServiceCreateUserError.md)
- [DeliveryCarrierService](../types/objects/DeliveryCarrierService.md)
- [DeliveryCarrierServiceCreateInput](../types/inputs/DeliveryCarrierServiceCreateInput.md)

## Example Mutation

```graphql
mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
  carrierServiceCreate(input: $input) {
    carrierService {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
