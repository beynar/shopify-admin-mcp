# Mutation: `fileDelete`

**Returns:** `FileDeletePayload`

Deletes file assets that were previously uploaded to your store.

Use the `fileDelete` mutation to permanently remove media and file assets from your store when they are no longer needed.
This mutation handles the complete removal of files from both your store's file library and any associated references
to products or other resources.

The `fileDelete` mutation supports removal of multiple file types:

- **Images**: Product photos, variant images, and general store imagery
- **Videos**: Shopify-hosted videos for product demonstrations and marketing content
- **External Videos**: YouTube and Vimeo videos linked to your products
- **3D models**: Interactive 3D representations of products
- **Generic files**: PDFs, documents, and other file types stored in your
[**Files** page](https://shopify.com/admin/settings/files)

When you delete files that are referenced by products, the mutation automatically removes those references and
reorders any remaining media to maintain proper positioning. Product file references are database relationships
managed through a media reference system, not just links in product descriptions. The Shopify admin provides a UI
to manage these relationships, and when files are deleted, the system automatically cleans up all references.
Files that are currently being processed by other operations are rejected to prevent conflicts.

> Caution:
> File deletion is permanent and can't be undone. When you delete a file that's being used in your store,
> it will immediately stop appearing wherever it was displayed. For example, if you delete a product image,
> that product will show a broken image or placeholder on your storefront and in the admin. The same applies
> to any other files linked from themes, blog posts, or pages. Before deleting files, you can use the
> [`files` query](https://shopify.dev/api/admin-graphql/latest/queries/files) to list and review
> your store's file assets.

Learn how to manage
[product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media)
in your app.

## Arguments

- **`fileIds`**: `[ID!]!` — The IDs of the files to be deleted.

## Payload Fields

- `deletedFileIds`: `[ID!]` — The IDs of the deleted files.
- `userErrors`: `[FilesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FileDeletePayload](../types/objects/FileDeletePayload.md)
- [FilesUserError](../types/objects/FilesUserError.md)

## Example Mutation

```graphql
mutation FileDelete($fileIds: [ID!]!) {
  fileDelete(fileIds: $fileIds) {
    deletedFileIds
    userErrors {
      field
      message
    }
  }
}
```
