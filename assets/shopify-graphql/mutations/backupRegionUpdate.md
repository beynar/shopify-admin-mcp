# Mutation: `backupRegionUpdate`

**Returns:** `BackupRegionUpdatePayload`

Update the backup region that is used when we have no better signal of what region a buyer is in.

## Arguments

- **`region`**: `BackupRegionUpdateInput` — Optional input representing the region to be updated. If not provided, the existing regions remain unchanged.

## Payload Fields

- `backupRegion`: `MarketRegion` — Returns the updated backup region.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BackupRegionUpdateInput](../types/inputs/BackupRegionUpdateInput.md)
- [BackupRegionUpdatePayload](../types/objects/BackupRegionUpdatePayload.md)
- [MarketRegion](../types/interfaces/MarketRegion.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation BackupRegionUpdate($region: BackupRegionUpdateInput) {
  backupRegionUpdate(region: $region) {
    backupRegion {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
