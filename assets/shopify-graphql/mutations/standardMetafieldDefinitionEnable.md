# Mutation: `standardMetafieldDefinitionEnable`

**Returns:** `StandardMetafieldDefinitionEnablePayload`

Activates the specified standard metafield definition from its template.

Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

## Arguments

- **`ownerType`**: `MetafieldOwnerType!` — The resource type that the metafield definition is scoped to.
- **`id`**: `ID` — The ID of the standard metafield definition template to enable.
- **`namespace`**: `String` — The namespace of the standard metafield to enable. Used in combination with `key`.
- **`key`**: `String` — The key of the standard metafield to enable. Used in combination with `namespace`.
- **`pin`**: `Boolean` = `null` — Whether to pin the metafield definition.
- **`capabilities`**: `MetafieldCapabilityCreateInput` — The capabilities of the metafield definition.
- **`access`**: `StandardMetafieldDefinitionAccessInput` — The access settings that apply to each of the metafields that belong to the metafield definition.

## Payload Fields

- `createdDefinition`: `MetafieldDefinition` — The metafield definition that was created.
- `userErrors`: `[StandardMetafieldDefinitionEnableUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldCapabilityCreateInput](../types/inputs/MetafieldCapabilityCreateInput.md)
- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldOwnerType](../types/enums/MetafieldOwnerType.md)
- [StandardMetafieldDefinitionAccessInput](../types/inputs/StandardMetafieldDefinitionAccessInput.md)
- [StandardMetafieldDefinitionEnablePayload](../types/objects/StandardMetafieldDefinitionEnablePayload.md)
- [StandardMetafieldDefinitionEnableUserError](../types/objects/StandardMetafieldDefinitionEnableUserError.md)

## Example Mutation

```graphql
mutation StandardMetafieldDefinitionEnable($ownerType: MetafieldOwnerType!, $id: ID, $namespace: String, $key: String, $pin: Boolean, $capabilities: MetafieldCapabilityCreateInput, $access: StandardMetafieldDefinitionAccessInput) {
  standardMetafieldDefinitionEnable(ownerType: $ownerType, id: $id, namespace: $namespace, key: $key, pin: $pin, capabilities: $capabilities, access: $access) {
    createdDefinition {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
