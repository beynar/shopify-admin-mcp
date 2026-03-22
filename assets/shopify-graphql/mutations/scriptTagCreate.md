# Mutation: `scriptTagCreate`

**Returns:** `ScriptTagCreatePayload`

<div class="note"><h4>Theme app extensions</h4>
  <p>If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>

<div class="note"><h4>Script tag deprecation</h4>
  <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>


Creates a new script tag.

## Arguments

- **`input`**: `ScriptTagInput!` — The input fields for a script tag.

## Payload Fields

- `scriptTag`: `ScriptTag` — The script tag that was created.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ScriptTag](../types/objects/ScriptTag.md)
- [ScriptTagCreatePayload](../types/objects/ScriptTagCreatePayload.md)
- [ScriptTagInput](../types/inputs/ScriptTagInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ScriptTagCreate($input: ScriptTagInput!) {
  scriptTagCreate(input: $input) {
    scriptTag {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
