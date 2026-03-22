# Object: `ShopFeatures`

Represents the feature set available to the shop.
Most fields specify whether a feature is enabled for a shop, and some fields return information
related to specific features.

## Fields

- `avalaraAvatax`: `Boolean!` — Whether a shop has access to Avalara AvaTax.
- `branding`: `ShopBranding!` — The branding of the shop, which influences its look and feel in the Shopify admin.
- `bundles`: `BundlesFeature!` — Represents the Bundles feature configuration for the shop.
- `captcha`: `Boolean!` — Whether a shop's online store can have CAPTCHA protection.
- `captchaExternalDomains`: `Boolean!` *(deprecated)* — Whether a shop's online store can have CAPTCHA protection for domains not managed by Shopify.
- `cartTransform`: `CartTransformFeature!` — Represents the cart transform feature configuration for the shop.
- `deliveryProfiles`: `Boolean!` *(deprecated)* — Whether the delivery profiles functionality is enabled for this shop.
- `dynamicRemarketing`: `Boolean!` — Whether a shop has access to the Google Analytics dynamic remarketing feature.
- `eligibleForSubscriptionMigration`: `Boolean!` — Whether a shop can be migrated to use Shopify subscriptions.
- `eligibleForSubscriptions`: `Boolean!` — Whether a shop is configured properly to sell subscriptions.
- `giftCards`: `Boolean!` — Whether a shop can create gift cards.
- `harmonizedSystemCode`: `Boolean!` — Whether a shop displays Harmonized System codes on products. This is used for customs when shipping
- `internationalDomains`: `Boolean!` *(deprecated)* — Whether a shop can enable international domains.
- `internationalPriceOverrides`: `Boolean!` *(deprecated)* — Whether a shop can enable international price overrides.
- `internationalPriceRules`: `Boolean!` *(deprecated)* — Whether a shop can enable international price rules.
- `legacySubscriptionGatewayEnabled`: `Boolean!` — Whether a shop has enabled a legacy subscription gateway to handle older subscriptions.
- `liveView`: `Boolean!` — Whether to show the Live View metrics in the Shopify admin. Live view is hidden from merchants that are on a trial
- `onboardingVisual`: `Boolean!` *(deprecated)* — Whether a shop has access to the onboarding visual.
- `paypalExpressSubscriptionGatewayStatus`: `PaypalExpressSubscriptionsGatewayStatus!` — Whether a shop is configured to sell subscriptions with PayPal Express.
- `reports`: `Boolean!` — Whether a shop has access to all reporting features.
- `sellsSubscriptions`: `Boolean!` — Whether a shop has ever had subscription products.
- `shopifyPlus`: `Boolean!` *(deprecated)* — Whether the shop has a Shopify Plus subscription.
- `showMetrics`: `Boolean!` — Whether to show metrics in the Shopify admin. Metrics are hidden for new merchants until they become meaningful.
- `storefront`: `Boolean!` — Whether a shop has an online store.
- `unifiedMarkets`: `Boolean!` — Whether a shop is eligible for Unified Markets.
- `usingShopifyBalance`: `Boolean!` — Whether a shop is using Shopify Balance.

## Related Types

- [BundlesFeature](../../types/objects/BundlesFeature.md)
- [CartTransformFeature](../../types/objects/CartTransformFeature.md)
- [PaypalExpressSubscriptionsGatewayStatus](../../types/enums/PaypalExpressSubscriptionsGatewayStatus.md)
- [ShopBranding](../../types/enums/ShopBranding.md)
