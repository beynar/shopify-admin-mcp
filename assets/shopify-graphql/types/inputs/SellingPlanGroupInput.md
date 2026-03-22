# Input Object: `SellingPlanGroupInput`

The input fields required to create or update a selling plan group.

## Input Fields

- `name`: `String` — Buyer facing label of the selling plan group.
- `appId`: `String` — ID for app, exposed in Liquid and product JSON.
- `merchantCode`: `String` — Merchant facing label of the selling plan group.
- `description`: `String` — Merchant facing description of the selling plan group.
- `sellingPlansToCreate`: `[SellingPlanInput!]` — List of selling plans to create.
- `sellingPlansToUpdate`: `[SellingPlanInput!]` — List of selling plans to update.
- `sellingPlansToDelete`: `[ID!]` — List of selling plans ids to delete.
- `options`: `[String!]` — The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
- `position`: `Int` — Relative value for display purposes of the selling plan group. A lower position will be displayed before a higher one.

## Related Types

- [SellingPlanInput](../../types/inputs/SellingPlanInput.md)
