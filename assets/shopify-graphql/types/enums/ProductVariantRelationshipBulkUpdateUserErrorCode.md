# Enum: `ProductVariantRelationshipBulkUpdateUserErrorCode`

Possible error codes that can be returned by `ProductVariantRelationshipBulkUpdateUserError`.

## Values

- `PARENT_REQUIRED` — A parent product variant ID or product ID must be provided.
- `FAILED_TO_CREATE` — Unable to create parent product variant.
- `PRODUCT_VARIANTS_NOT_FOUND` — The product variants were not found.
- `CIRCULAR_REFERENCE` — A parent product variant cannot contain itself as a component.
- `NESTED_PARENT_PRODUCT_VARIANT` — Nested parent product variants aren't supported.
- `INVALID_QUANTITY` — Product variant relationships must have a quantity greater than 0.
- `DUPLICATE_PRODUCT_VARIANT_RELATIONSHIP` — A parent product variant must not contain duplicate product variant relationships.
- `EXCEEDED_PRODUCT_VARIANT_RELATIONSHIP_LIMIT` — Exceeded the maximum allowable product variant relationships in a parent product variant.
- `PRODUCT_VARIANT_RELATIONSHIP_TYPE_CONFLICT` — A Core type relationship cannot be added to a composite product variant with SFN type relationships.
- `UNEXPECTED_ERROR` — Unexpected error.
- `FAILED_TO_REMOVE` — Unable to remove product variant relationships.
- `MUST_SPECIFY_COMPONENTS` — The product variant relationships to remove must be specified if all the parent product variant's components aren't being removed.
- `FAILED_TO_UPDATE` — Unable to update product variant relationships.
- `FAILED_TO_UPDATE_PARENT_PRODUCT_VARIANT_PRICE` — Unable to update parent product variant price.
- `UPDATE_PARENT_VARIANT_PRICE_REQUIRED` — A price must be provided for a parent product variant if the price calculation is set to fixed.
- `PRODUCT_VARIANTS_NOT_COMPONENTS` — Some of the provided product variants are not components of the specified parent product variant.
- `PRODUCT_EXPANDER_APP_OWNERSHIP_ALREADY_EXISTS` — The products for these product variants are already owned by another App.
- `UNSUPPORTED_MULTIPACK_RELATIONSHIP` — Multipack bundles are not supported.
- `PARENT_PRODUCT_VARIANT_CANNOT_BE_GIFT_CARD` — Gift cards cannot be parent product variants.
- `PARENT_PRODUCT_VARIANT_CANNOT_REQUIRE_SELLING_PLAN` — Parent product variants cannot require a selling plan.
- `PARENT_PRODUCT_VARIANT_CANNOT_BE_COMBINED_LISTING` — Combined listing cannot be parent product variants.
- `CHILD_PRODUCT_VARIANT_CANNOT_BE_COMBINED_LISTING` — Combined listing cannot be child product variants.
