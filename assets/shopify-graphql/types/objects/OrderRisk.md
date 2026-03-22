# Object: `OrderRisk`

Represents a fraud check on an order. This object is deprecated in favor of [OrderRiskAssessment](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment) and its enhanced capabilities.

## Fields

- `display`: `Boolean!` *(deprecated)* — Whether the risk level is shown in the Shopify admin. If false, then this order risk is ignored when Shopify determines the overall risk level for the order.
- `level`: `OrderRiskLevel` *(deprecated)* — The likelihood that an order is fraudulent, based on this order risk. The level can be set by Shopify risk analysis or by an app.
- `message`: `String` *(deprecated)* — The risk message that's shown to the merchant in the Shopify admin.

## Related Types

- [OrderRiskLevel](../../types/enums/OrderRiskLevel.md)
