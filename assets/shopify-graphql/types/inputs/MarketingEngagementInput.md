# Input Object: `MarketingEngagementInput`

The input fields for a marketing engagement.

## Input Fields

- `occurredOn`: `Date!` — The calendar date (in the time zone offset specified by the utcOffset field) for which the metrics are being reported. For example, a shop in UTC-5 would set utcOffset="-05:00" and aggregate all engagements from 05:00:00Z up to 29:00:00Z (5am UTC next day) for each call.
- `impressionsCount`: `Int` — The total number of times marketing content was displayed to users, whether or not an interaction occurred. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were delivered.
- `viewsCount`: `Int` — The total number of views on the marketing content. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were opened. For video-based content, this represents the number of times videos were played.
- `clicksCount`: `Int` — The total number of interactions, such as a button press or a screen touch, that occurred on the marketing content.
- `sharesCount`: `Int` — The total number of times marketing content was distributed or reposted to either one's own network of followers through a social media platform or other digital channels. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were forwarded.
- `favoritesCount`: `Int` — The total number of favorites, likes, saves, or bookmarks on the marketing content.
- `commentsCount`: `Int` — The total number of comments on the marketing content.
- `unsubscribesCount`: `Int` — The total number of unsubscribes on the marketing content. For social media platforms, this represents the number of unfollows.
- `complaintsCount`: `Int` — The total number of complaints on the marketing content. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were marked as spam. For social media platforms, this represents the number of dislikes or the number of times marketing content was reported.
- `failsCount`: `Int` — The total number of fails for the marketing content. For message-based platforms such as email or SMS, this represents the number of bounced marketing emails or messages.
- `sendsCount`: `Int` — The total number of marketing emails or messages that were sent.
- `uniqueViewsCount`: `Int` — The total number of all users who saw marketing content since it was published. For  message-based platforms such as email or SMS, this represents the number of unique users that opened a  marketing email or message. For video-based content, this represents the number of unique users that  played video content.
- `uniqueClicksCount`: `Int` — The total number of unique clicks on the marketing content.
- `adSpend`: `MoneyInput` — The total ad spend for the marketing content. Recurring weekly, monthly, or yearly spend needs to be divided into daily amounts.
- `isCumulative`: `Boolean!` — Specifies how the provided metrics have been aggregated. Cumulative metrics are aggregated from the first day of reporting up to and including `occuredOn`. Non-cumulative metrics are aggregated over the single day indicated in `occuredOn`. Cumulative metrics will monotonically increase in time as each record includes the previous day's values, and so on. Non-cumulative is strongly preferred, and support for cumulative metrics may be deprecated in the future.
- `utcOffset`: `UtcOffset!` — The UTC offset for the time zone in which the metrics are being reported, in the format `"+HH:MM"` or `"-HH:MM"`. Used in combination with occurredOn when aggregating daily metrics. Must match the account settings for the shop to minimize eventual discrepancies in reporting.
- `sales`: `MoneyInput` — The amount of sales generated from the marketing content.
- `sessionsCount`: `Int` — The number of online store sessions generated from the marketing content.
- `orders`: `Decimal` — The number of orders generated from the marketing content.
- `firstTimeCustomers`: `Decimal` — The number of customers that have placed their first order. Doesn't include adjustments such as edits, exchanges, or returns.
- `returningCustomers`: `Decimal` — The number of returning customers that have placed an order. Doesn't include adjustments such as edits, exchanges, or returns.
- `primaryConversions`: `Decimal` — The number of primary conversions from the marketing content. This field supports ad platforms that track conversions beyond traditional sales metrics. Primary conversions represent the main conversion goal defined by the ad platform, such as purchases, sign-ups, or add-to-carts.
- `allConversions`: `Decimal` — The number of all conversions from the marketing content. This field supports ad platforms that track conversions beyond traditional sales metrics. All conversions include both primary and secondary conversion goals as defined by the ad platform, such as purchases, add-to-carts, page views, and sign-ups.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
