# Object: `BlogFeed`

RSS feed provider details for blog syndication. This object contains the location and path information for external feed services that were previously integrated with the blog.

The `BlogFeed` object maintains the feed URL and path to ensure existing feed subscriptions continue working.

Use the `BlogFeed` object to:
- Access RSS feed provider configuration
- Retrieve feed location and path information
- Maintain existing feed syndication settings

> Note:
> This is a legacy feature. New integrations with external feed services are not supported.

## Fields

- `location`: `URL!` — Blog feed provider url.
- `path`: `String!` — Blog feed provider path.
