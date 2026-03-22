# Interface: `Navigable`

A default cursor that you can use in queries to paginate your results. Each edge in a connection can
return a cursor, which is a reference to the edge's position in the connection. You can use an edge's cursor as
the starting point to retrieve the nodes before or after it in a connection.

To learn more about using cursor-based pagination, refer to
[Paginating results with GraphQL](https://shopify.dev/api/usage/pagination-graphql).

## Fields

- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

## Possible Types

- [AbandonedCheckout](../../types/objects/AbandonedCheckout.md)
- [Article](../../types/objects/Article.md)
- [Company](../../types/objects/Company.md)
- [CompanyLocation](../../types/objects/CompanyLocation.md)
- [CustomerAccountAppExtensionPage](../../types/objects/CustomerAccountAppExtensionPage.md)
- [CustomerAccountNativePage](../../types/objects/CustomerAccountNativePage.md)
- [DraftOrder](../../types/objects/DraftOrder.md)
- [Page](../../types/objects/Page.md)
- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
