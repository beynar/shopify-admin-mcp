# Mutation: `fileCreate`

**Returns:** `FileCreatePayload`

Creates file assets for a store from external URLs or files that were previously uploaded using the
[`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate)
mutation.

Use the `fileCreate` mutation to add various types of media and documents to your store. These files are added to the
[**Files** page](https://shopify.com/admin/settings/files) in the Shopify admin and can be referenced by other
resources in your store.

The `fileCreate` mutation supports multiple file types:

- **Images**: Product photos, variant images, and general store imagery
- **Videos**: Shopify-hosted videos for product demonstrations and marketing
- **External videos**: YouTube and Vimeo videos for enhanced product experiences
- **3D models**: Interactive 3D representations of products
- **Generic files**: PDFs, documents, and other file types for store resources

The mutation handles duplicate filenames using configurable resolution modes that automatically append UUIDs,
replace existing files, or raise errors when conflicts occur.

> Note:
> Files are processed asynchronously. Check the
> [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileStatus)
> field to monitor processing completion. The maximum number of files that can be created in a single batch is 250.

After creating files, you can make subsequent updates using the following mutations:

- [`fileUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate):
Update file properties such as alt text or replace file contents while preserving the same URL.
- [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete):
Remove files from your store when they are no longer needed.

To list all files in your store, use the
[`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/files) query.

Learn how to manage
[product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media)
in your app.

## Arguments

- **`files`**: `[FileCreateInput!]!` — List of new files to be created.

## Payload Fields

- `files`: `[File!]` — The newly created files.
- `userErrors`: `[FilesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [File](../types/interfaces/File.md)
- [FileCreateInput](../types/inputs/FileCreateInput.md)
- [FileCreatePayload](../types/objects/FileCreatePayload.md)
- [FilesUserError](../types/objects/FilesUserError.md)

## Example Mutation

```graphql
mutation FileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
