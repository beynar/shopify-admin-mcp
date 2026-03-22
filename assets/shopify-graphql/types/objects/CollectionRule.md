# Object: `CollectionRule`

Represents at rule that's used to assign products to a collection.

## Fields

- `column`: `CollectionRuleColumn!` — The attribute that the rule focuses on. For example, `title` or `product_type`.
- `condition`: `String!` — The value that the operator is applied to. For example, `Hats`.
- `conditionObject`: `CollectionRuleConditionObject` — The value that the operator is applied to.
- `relation`: `CollectionRuleRelation!` — The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`.

## Related Types

- [CollectionRuleColumn](../../types/enums/CollectionRuleColumn.md)
- [CollectionRuleConditionObject](../../types/unions/CollectionRuleConditionObject.md)
- [CollectionRuleRelation](../../types/enums/CollectionRuleRelation.md)
