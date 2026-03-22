# Query: `codeDiscountNodeByCode`

**Returns:** `DiscountCodeNode`

Retrieves a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) by its discount code. The search is case-insensitive, enabling you to find discounts regardless of how customers enter the code.

Returns a [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode) that contains the underlying discount details, which could be a basic [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount), a ["Buy X Get Y" (BXGY) discount](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y), a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping), or an [app-provided discount](https://help.shopify.com/manual/discounts/discount-types/discounts-with-apps).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts).

## Arguments

- **`code`**: `String!` — The case-insensitive code of the `DiscountCodeNode` to return.

## Return Type Fields

- `codeDiscount`: `DiscountCode!` — The underlying code discount object.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [DiscountCode](../types/unions/DiscountCode.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [Metafield](../types/objects/Metafield.md)

## Example Query

```graphql
query CodeDiscountNodeByCode($code: String!) {
  codeDiscountNodeByCode(code: $code) {
  }
}
```
