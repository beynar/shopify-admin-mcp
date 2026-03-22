# Query: `returnCalculate`

**Returns:** `CalculatedReturn`

Calculates the financial outcome of a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) without creating it. Use this query to preview return costs before initiating the actual return process.

The calculation provides detailed breakdowns of refund amounts, taxes, [`RestockingFee`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee) charges, return shipping fees, and order-level discount adjustments based on the [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem) objects that customers select for return.

Learn more about building for [return management](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

## Arguments

- **`input`**: `CalculateReturnInput!` — The input fields for calculating a return.

## Return Type Fields

- `exchangeLineItems`: `[CalculatedExchangeLineItem!]!` — A list of calculated exchange line items.
- `id`: `ID!` — A globally-unique ID.
- `returnLineItems`: `[CalculatedReturnLineItem!]!` — A list of calculated return line items.
- `returnShippingFee`: `CalculatedReturnShippingFee` — The calculated return shipping fee.

## Related Types

- [CalculateReturnInput](../types/inputs/CalculateReturnInput.md)
- [CalculatedExchangeLineItem](../types/objects/CalculatedExchangeLineItem.md)
- [CalculatedReturn](../types/objects/CalculatedReturn.md)
- [CalculatedReturnLineItem](../types/objects/CalculatedReturnLineItem.md)
- [CalculatedReturnShippingFee](../types/objects/CalculatedReturnShippingFee.md)

## Example Query

```graphql
query ReturnCalculate($input: CalculateReturnInput!) {
  returnCalculate(input: $input) {
  }
}
```
