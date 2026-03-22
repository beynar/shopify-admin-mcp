# Enum: `TranslatableResourceType`

Specifies the type of resources that are translatable.

## Values

- `ARTICLE` — A blog post. Translatable fields: `title`, `body_html`, `summary_html`, `handle`, `meta_title`, `meta_description`.
- `ARTICLE_IMAGE` — An article image. Translatable fields: `alt`.
- `BLOG` — A blog. Translatable fields: `title`, `handle`, `meta_title`, `meta_description`.
- `COLLECTION` — A product collection. Translatable fields: `title`, `body_html`, `handle`, `meta_title`, `meta_description`.
- `COLLECTION_IMAGE` — A collection image. Translatable fields: `alt`.
- `DELIVERY_METHOD_DEFINITION` — The delivery method definition. For example, "Standard", or "Expedited". Translatable fields: `name`, `description`.
- `EMAIL_TEMPLATE` — An email template. Translatable fields: `title`, `body_html`.
- `FILTER` — A filter. Translatable fields: `label`.
- `LINK` — A link to direct users. Translatable fields: `title`.
- `MEDIA_IMAGE` — An image. Translatable fields: `alt`.
- `MENU` — A category of links. Translatable fields: `title`.
- `METAFIELD` — A Metafield. Translatable fields: `value`.
- `METAOBJECT` — A Metaobject. Translatable fields are determined by the Metaobject type.
- `ONLINE_STORE_THEME` — An online store theme. Translatable fields: `dynamic keys based on theme data`.
- `ONLINE_STORE_THEME_APP_EMBED` — A theme app embed. Translatable fields: `dynamic keys based on theme data`.
- `ONLINE_STORE_THEME_JSON_TEMPLATE` — A theme json template. Translatable fields: `dynamic keys based on theme data`.
- `ONLINE_STORE_THEME_LOCALE_CONTENT` — Locale file content of an online store theme. Translatable fields: `dynamic keys based on theme data`.
- `ONLINE_STORE_THEME_SECTION_GROUP` — A theme json section group. Translatable fields: `dynamic keys based on theme data`.
- `ONLINE_STORE_THEME_SETTINGS_CATEGORY` — A theme setting category. Translatable fields: `dynamic keys based on theme data`.
- `ONLINE_STORE_THEME_SETTINGS_DATA_SECTIONS` — Shared static sections of an online store theme. Translatable fields: `dynamic keys based on theme data`.
- `PACKING_SLIP_TEMPLATE` — A packing slip template. Translatable fields: `body`.
- `PAGE` — A page. Translatable fields: `title`, `body_html`, `handle`, `meta_title`, `meta_description`.
- `PAYMENT_GATEWAY` — A payment gateway. Translatable fields: `name`, `message`, `before_payment_instructions`.
- `PRODUCT` — An online store product. Translatable fields: `title`, `body_html`, `handle`, `product_type`, `meta_title`, `meta_description`.
- `PRODUCT_OPTION` — An online store custom product property name. For example, "Size", "Color", or "Material".
- `PRODUCT_OPTION_VALUE` — The product option value names. For example, "Red", "Blue", and "Green" for a "Color" option. Translatable fields: `name`.
- `SELLING_PLAN` — A selling plan. Translatable fields:`name`, `option1`, `option2`, `option3`, `description`.
- `SELLING_PLAN_GROUP` — A selling plan group. Translatable fields: `name`, `option1`, `option2`, `option3`.
- `SHOP` — A shop. Translatable fields: `meta_title`, `meta_description`.
- `SHOP_POLICY` — A shop policy. Translatable fields: `body`.
