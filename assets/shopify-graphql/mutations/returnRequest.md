# Mutation: `returnRequest`

**Returns:** `ReturnRequestPayload`

Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve or decline it.

Use this mutation when customers initiate returns that need review. After creating a requested return, use [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) to approve it or [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) to decline it.

For returns that should be immediately open for processing, use the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation instead.

Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

## Arguments

- **`input`**: `ReturnRequestInput!` — The input fields for requesting a return.

## Payload Fields

- `return`: `Return` — The requested return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnRequestInput](../types/inputs/ReturnRequestInput.md)
- [ReturnRequestPayload](../types/objects/ReturnRequestPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnRequest($input: ReturnRequestInput!) {
  returnRequest(input: $input) {
    return {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
