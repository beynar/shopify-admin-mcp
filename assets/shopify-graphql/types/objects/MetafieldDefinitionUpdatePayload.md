# Object: `MetafieldDefinitionUpdatePayload`

Return type for `metafieldDefinitionUpdate` mutation.

## Fields

- `updatedDefinition`: `MetafieldDefinition` — The metafield definition that was updated.
- `userErrors`: `[MetafieldDefinitionUpdateUserError!]!` — The list of errors that occurred from executing the mutation.
- `validationJob`: `Job` — The asynchronous job updating the metafield definition's validation_status.

## Related Types

- [Job](../../types/objects/Job.md)
- [MetafieldDefinition](../../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionUpdateUserError](../../types/objects/MetafieldDefinitionUpdateUserError.md)
