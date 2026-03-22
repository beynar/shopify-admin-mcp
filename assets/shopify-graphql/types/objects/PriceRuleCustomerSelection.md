# Object: `PriceRuleCustomerSelection`

A selection of customers for whom the price rule applies.

## Fields

- `customers` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`: `CustomerConnection!` — List of customers to whom the price rule applies.
- `forAllCustomers`: `Boolean!` — Whether the price rule applies to all customers.
- `segments`: `[Segment!]!` — A list of customer segments that contain the customers who can use the price rule.

## Related Types

- [CustomerSortKeys](../../types/enums/CustomerSortKeys.md)
- [Segment](../../types/objects/Segment.md)
