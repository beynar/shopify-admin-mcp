# Object: `CollectionRuleConditions`

Defines the available columns and relationships that can be used when creating rules for smart collections. This provides the schema for building automated collection logic based on product attributes.

For example, merchants can create rules like "product type equals 'Shirts'" or "vendor contains 'Nike'" using the conditions defined in this object to automatically populate collections.

Use `CollectionRuleConditions` to:
- Discovering valid field options for smart collection rule interfaces
- Understanding which conditions are available for automated collections
- Exploring available product attributes for collection automation
- Learning about proper field relationships for rule implementation

The conditions define which product fields can be used in smart collection rules and what types of comparisons are allowed for each field.

Learn more about [smart collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

## Fields

- `allowedRelations`: `[CollectionRuleRelation!]!` — Allowed relations of the rule.
- `defaultRelation`: `CollectionRuleRelation!` — Most commonly used relation for this rule.
- `ruleObject`: `CollectionRuleConditionsRuleObject` — Additional attributes defining the rule.
- `ruleType`: `CollectionRuleColumn!` — Type of the rule.

## Related Types

- [CollectionRuleColumn](../../types/enums/CollectionRuleColumn.md)
- [CollectionRuleConditionsRuleObject](../../types/unions/CollectionRuleConditionsRuleObject.md)
- [CollectionRuleRelation](../../types/enums/CollectionRuleRelation.md)
