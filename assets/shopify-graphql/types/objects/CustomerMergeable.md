# Object: `CustomerMergeable`

An object that represents whether a customer can be merged with another customer.

## Fields

- `errorFields`: `[CustomerMergeErrorFieldType!]!` — The list of fields preventing the customer from being merged.
- `isMergeable`: `Boolean!` — Whether the customer can be merged with another customer.
- `mergeInProgress`: `CustomerMergeRequest` — The merge request if one is currently in progress.
- `reason`: `String` — The reason why the customer can't be merged with another customer.

## Related Types

- [CustomerMergeErrorFieldType](../../types/enums/CustomerMergeErrorFieldType.md)
- [CustomerMergeRequest](../../types/objects/CustomerMergeRequest.md)
