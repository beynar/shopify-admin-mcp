# Query: `shopifyqlQuery`

**Returns:** `ShopifyqlQueryResponse`

Executes a [ShopifyQL query](https://shopify.dev/docs/apps/build/shopifyql) to analyze store data and returns results in a tabular format.

The response includes column metadata with names, data types, and display names, along with the actual data rows. If the query contains syntax errors, then the response provides parse error messages instead of table data.

Read the [ShopifyQL reference documentation](https://shopify.dev/docs/api/shopifyql) for more information on how to write ShopifyQL queries.

## Arguments

- **`query`**: `String!` — A ShopifyQL query string following the [ShopifyQL syntax](https://shopify.dev/docs/api/shopifyql). Queries must include `FROM` to specify the data source (such as `sales`, `orders`, or `customers`) and `SHOW` to select metrics and dimensions. Example: `FROM sales SHOW total_sales TIMESERIES month SINCE -12m`.

## Return Type Fields

- `parseErrors`: `[String!]!` — A list of parse errors, if parsing fails.
- `tableData`: `ShopifyqlTableData` — The result in a tabular format with column and row data.

## Related Types

- [ShopifyqlQueryResponse](../types/objects/ShopifyqlQueryResponse.md)
- [ShopifyqlTableData](../types/objects/ShopifyqlTableData.md)

## ShopifyQL Language Reference

For the complete ShopifyQL query language — syntax, datasets, operators, functions,
and examples — load the dedicated skill:

**[ShopifyQL Skill](../../shopifyql/SKILL.md)**

Key references within that skill:
- [Datasets](../../shopifyql/references/datasets.md) — available tables, metrics, dimensions
- [MATCHES expressions](../../shopifyql/references/matches.md) — semi-join behavioral filters
- [Visualizations](../../shopifyql/references/visualizations.md) — chart types

## Example Query

```graphql
query ShopifyqlQuery($query: String!) {
  shopifyqlQuery(query: $query) {
    tableData {
      columns {
        name
        dataType
        displayName
      }
      rows
    }
    parseErrors
  }
}
```
