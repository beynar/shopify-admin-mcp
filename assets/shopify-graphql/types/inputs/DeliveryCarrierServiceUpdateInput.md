# Input Object: `DeliveryCarrierServiceUpdateInput`

The input fields used to update a carrier service.

## Input Fields

- `id`: `ID!` — The global ID of the carrier service to update.
- `name`: `String` — The name of the shipping service as seen by merchants and their customers.
- `callbackUrl`: `URL` — The URL endpoint that Shopify needs to retrieve shipping rates. This must be a public URL.
- `supportsServiceDiscovery`: `Boolean` — Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.
- `active`: `Boolean` — Whether this carrier service is active. If `true`, then the service will be available to serve rates in checkout.
