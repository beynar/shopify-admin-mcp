# Mutation: `cartTransformCreate`

**Returns:** `CartTransformCreatePayload`

Creates a cart transform function that lets merchants customize how products are bundled and presented during checkout. This gives merchants powerful control over their merchandising strategy by allowing apps to modify cart line items programmatically, supporting advanced approaches like dynamic bundles or personalized product recommendations.

For example, a bundle app might create a cart transform that automatically groups related products (like a camera, lens, and case) into a single bundle line item when customers add them to their cart, complete with bundle pricing and unified presentation.

Use `CartTransformCreate` to:
- Deploy custom bundling logic to merchant stores
- Enable dynamic product grouping during checkout
- Implement personalized product recommendations
- Create conditional offers based on cart contents
- Support complex pricing strategies for product combinations

The mutation processes synchronously and returns the created cart transform along with any validation errors. Once created, the cart transform function becomes active for the shop and will process cart modifications according to your defined logic. Cart transforms integrate with [Shopify Functions](https://shopify.dev/docs/api/functions) to provide powerful customization capabilities while maintaining checkout performance.

Cart Transform functions can be configured to block checkout on failure or allow graceful degradation, giving you control over how errors are handled in the customer experience.

Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle).

## Arguments

- **`functionHandle`**: `String` — The handle of the Function providing the cart transform.
- **`blockOnFailure`**: `Boolean` = `false` — Whether a run failure should block cart and checkout operations.
- **`metafields`**: `[MetafieldInput!]` = `[]` — Additional metafields to associate to the cart transform.

## Payload Fields

- `cartTransform`: `CartTransform` — The newly created cart transform function.
- `userErrors`: `[CartTransformCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CartTransform](../types/objects/CartTransform.md)
- [CartTransformCreatePayload](../types/objects/CartTransformCreatePayload.md)
- [CartTransformCreateUserError](../types/objects/CartTransformCreateUserError.md)
- [MetafieldInput](../types/inputs/MetafieldInput.md)

## Example Mutation

```graphql
mutation CartTransformCreate($functionHandle: String, $blockOnFailure: Boolean, $metafields: [MetafieldInput!]) {
  cartTransformCreate(functionHandle: $functionHandle, blockOnFailure: $blockOnFailure, metafields: $metafields) {
    cartTransform {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
