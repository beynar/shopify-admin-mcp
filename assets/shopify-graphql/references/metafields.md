# Metafields: Metafields, metaobjects, custom data

## Queries (10)

- **[metafieldDefinition](../queries/metafieldDefinition.md)** → `MetafieldDefinition` `(identifier)`
  Retrieves a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition) by its identifier. You can identif
- **[metafieldDefinitionTypes](../queries/metafieldDefinitionTypes.md)** → `[MetafieldDefinitionType!]!`
  The available metafield types that you can use when creating [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafi
- **[metafieldDefinitions](../queries/metafieldDefinitions.md)** → `MetafieldDefinitionConnection!` `(key, namespace, ownerType, pinnedStatus, constraintSubtype, constraintStatus, first, after, last, before, reverse, sortKey, query)`
  Returns a list of metafield definitions.
- **[metaobject](../queries/metaobject.md)** → `Metaobject` `(id)`
  Retrieves a single [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its global ID. [Metaobjects](https://shopif
- **[metaobjectByHandle](../queries/metaobjectByHandle.md)** → `Metaobject` `(handle)`
  Retrieves a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its handle and type. Handles are unique identifier
- **[metaobjectDefinition](../queries/metaobjectDefinition.md)** → `MetaobjectDefinition` `(id)`
  Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its global ID. Metaobject defi
- **[metaobjectDefinitionByType](../queries/metaobjectDefinitionByType.md)** → `MetaobjectDefinition` `(type)`
  Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its type. The type serves as a
- **[metaobjectDefinitions](../queries/metaobjectDefinitions.md)** → `MetaobjectDefinitionConnection!` `(first, after, last, before, reverse)`
  Returns a paginated list of all [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) objects confi
- **[metaobjects](../queries/metaobjects.md)** → `MetaobjectConnection!` `(type, sortKey, first, after, last, before, reverse, query)`
  Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries for a specific type. Metaobje
- **[standardMetafieldDefinitionTemplates](../queries/standardMetafieldDefinitionTemplates.md)** → `StandardMetafieldDefinitionTemplateConnection!` `(constraintSubtype, constraintStatus, excludeActivated, first, after, last, before, reverse)`
  Retrieves preset metafield definition templates for common use cases. Each template provides a reserved namespace and key combination for specific pur

## Mutations (16)

- **[metafieldDefinitionCreate](../mutations/metafieldDefinitionCreate.md)** → `MetafieldDefinitionCreatePayload` `(definition)`
  Creates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition) that establishes structure and valid
- **[metafieldDefinitionDelete](../mutations/metafieldDefinitionDelete.md)** → `MetafieldDefinitionDeletePayload` `(id, identifier, deleteAllAssociatedMetafields)`
  Deletes a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition). You can identify the definition by 
- **[metafieldDefinitionPin](../mutations/metafieldDefinitionPin.md)** → `MetafieldDefinitionPinPayload` `(definitionId, identifier)`
  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
- **[metafieldDefinitionUnpin](../mutations/metafieldDefinitionUnpin.md)** → `MetafieldDefinitionUnpinPayload` `(definitionId, identifier)`
  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
- **[metafieldDefinitionUpdate](../mutations/metafieldDefinitionUpdate.md)** → `MetafieldDefinitionUpdatePayload` `(definition)`
  Updates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition)'s configuration and settings. You ca
- **[metafieldsDelete](../mutations/metafieldsDelete.md)** → `MetafieldsDeletePayload` `(metafields)`
  Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects in bulk by specifying combinations of owner ID, na
- **[metafieldsSet](../mutations/metafieldsSet.md)** → `MetafieldsSetPayload` `(metafields)`
  Sets metafield values. Metafield values will be set regardless if they were previously created or not.
- **[metaobjectBulkDelete](../mutations/metaobjectBulkDelete.md)** → `MetaobjectBulkDeletePayload` `(where)`
  Asynchronously delete metaobjects and their associated metafields in bulk.
- **[metaobjectCreate](../mutations/metaobjectCreate.md)** → `MetaobjectCreatePayload` `(metaobject)`
  Creates a metaobject entry based on an existing [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitio
- **[metaobjectDefinitionCreate](../mutations/metaobjectDefinitionCreate.md)** → `MetaobjectDefinitionCreatePayload` `(definition)`
  Creates a metaobject definition that establishes the structure for custom data objects in your store. The definition specifies the fields, data types,
- **[metaobjectDefinitionDelete](../mutations/metaobjectDefinitionDelete.md)** → `MetaobjectDefinitionDeletePayload` `(id)`
  Deletes the specified metaobject definition.
- **[metaobjectDefinitionUpdate](../mutations/metaobjectDefinitionUpdate.md)** → `MetaobjectDefinitionUpdatePayload` `(id, definition)`
  Updates a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s configuration and field structure
- **[metaobjectDelete](../mutations/metaobjectDelete.md)** → `MetaobjectDeletePayload` `(id)`
  Deletes the specified metaobject and its associated metafields.
- **[metaobjectUpdate](../mutations/metaobjectUpdate.md)** → `MetaobjectUpdatePayload` `(id, metaobject)`
  Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaob
- **[metaobjectUpsert](../mutations/metaobjectUpsert.md)** → `MetaobjectUpsertPayload` `(handle, metaobject)`
  Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with th
- **[standardMetafieldDefinitionEnable](../mutations/standardMetafieldDefinitionEnable.md)** → `StandardMetafieldDefinitionEnablePayload` `(ownerType, id, namespace, key, pin, capabilities, access)`
  Activates the specified standard metafield definition from its template.
