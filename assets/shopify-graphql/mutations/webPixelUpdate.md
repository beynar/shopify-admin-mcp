# Mutation: `webPixelUpdate`

**Returns:** `WebPixelUpdatePayload`

Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
by updating a web pixel record on the store where you installed your app.

When you run the `webPixelUpdate` mutation, Shopify validates it
against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match
the schema that you defined, then the mutation fails. Learn how to
define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

## Arguments

- **`id`**: `ID!` — The ID of the web pixel to update.
- **`webPixel`**: `WebPixelInput!` — The web pixel settings in JSON format.

## Payload Fields

- `userErrors`: `[ErrorsWebPixelUserError!]!` — The list of errors that occurred from executing the mutation.
- `webPixel`: `WebPixel` — The updated web pixel settings.

## Related Types

- [ErrorsWebPixelUserError](../types/objects/ErrorsWebPixelUserError.md)
- [WebPixel](../types/objects/WebPixel.md)
- [WebPixelInput](../types/inputs/WebPixelInput.md)
- [WebPixelUpdatePayload](../types/objects/WebPixelUpdatePayload.md)

## Example Mutation

```graphql
mutation WebPixelUpdate($id: ID!, $webPixel: WebPixelInput!) {
  webPixelUpdate(id: $id, webPixel: $webPixel) {
    userErrors {
      field
      message
    }
    webPixel {
      id
    }
  }
}
```
