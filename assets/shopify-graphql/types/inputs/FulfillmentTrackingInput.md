# Input Object: `FulfillmentTrackingInput`

The input fields that specify all possible fields for tracking information.

> Note:
> If you provide the `url` field, you should not provide the `urls` field.
>
> If you provide the `number` field, you should not provide the `numbers` field.
>
> If you provide the `url` field, you should provide the `number` field.
>
> If you provide the `urls` field, you should provide the `numbers` field.

## Input Fields

- `number`: `String` — The tracking number of the fulfillment.
- `url`: `URL` — The URL to track the fulfillment.
- `company`: `String` — The name of the tracking company.
- `numbers`: `[String!]` — The tracking numbers of the fulfillment, one or many.
- `urls`: `[URL!]` — The URLs to track the fulfillment, one or many.
