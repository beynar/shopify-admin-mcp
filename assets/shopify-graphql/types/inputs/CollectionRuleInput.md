# Input Object: `CollectionRuleInput`

The input fields for a rule to associate with a collection.

## Input Fields

- `column`: `CollectionRuleColumn!` — The attribute that the rule focuses on. For example, `title` or `product_type`.
- `relation`: `CollectionRuleRelation!` — The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`.
- `condition`: `String!` — The value that the operator is applied to. For example, `Hats`.
- `conditionObjectId`: `ID` — The object ID that points to additional attributes for the collection rule.

## Related Types

- [CollectionRuleColumn](../../types/enums/CollectionRuleColumn.md)
- [CollectionRuleRelation](../../types/enums/CollectionRuleRelation.md)
