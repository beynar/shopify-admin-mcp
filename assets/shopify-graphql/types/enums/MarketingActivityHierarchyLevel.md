# Enum: `MarketingActivityHierarchyLevel`

Hierarchy levels for external marketing activities.

## Values

- `AD` — An advertisement activity. Must be parented by an ad group or a campaign activity, and must be assigned tracking parameters (URL or UTM).
- `AD_GROUP` — A group of advertisement activities. Must be parented by a campaign activity.
- `CAMPAIGN` — A campaign activity. May contain either ad groups or ads as child activities. If childless, then the campaign activity should have tracking parameters assigned (URL or UTM) otherwise it won't appear in marketing reports.
