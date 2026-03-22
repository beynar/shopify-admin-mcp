# Query: `collectionRulesConditions`

**Returns:** `[CollectionRuleConditions!]!`

Lists all rules that can be used to create smart collections.

## Return Type Fields

- `allowedRelations`: `[CollectionRuleRelation!]!` — Allowed relations of the rule.
- `defaultRelation`: `CollectionRuleRelation!` — Most commonly used relation for this rule.
- `ruleObject`: `CollectionRuleConditionsRuleObject` — Additional attributes defining the rule.
- `ruleType`: `CollectionRuleColumn!` — Type of the rule.

## Related Types

- [CollectionRuleColumn](../types/enums/CollectionRuleColumn.md)
- [CollectionRuleConditions](../types/objects/CollectionRuleConditions.md)
- [CollectionRuleConditionsRuleObject](../types/unions/CollectionRuleConditionsRuleObject.md)
- [CollectionRuleRelation](../types/enums/CollectionRuleRelation.md)

## Example Query

```graphql
query {
  collectionRulesConditions {
  }
}
```
