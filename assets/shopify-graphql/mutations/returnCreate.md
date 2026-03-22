# Mutation: `returnCreate`

**Returns:** `ReturnCreatePayload`

Creates a return from an existing order that has at least one fulfilled
[line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)
that hasn't yet been refunded. If you create a return on an archived order, then the order is automatically
unarchived.

Use the `returnCreate` mutation when your workflow involves
[approving](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) or
[declining](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) requested returns
outside of the Shopify platform.

The `returnCreate` mutation performs the following actions:

- Creates a return in the `OPEN` state, and assumes that the return request from the customer has already been
approved
- Creates a [reverse fulfillment order](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders),
and enables you to create a [reverse delivery](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries)
for the reverse fulfillment order
- Creates a sales agreement with a `RETURN` reason, which links to all sales created for the return or exchange
- Generates sales records that reverse the sales records for the items being returned
- Generates sales records for any exchange line items

After you've created a return, use the
[`return`](https://shopify.dev/docs/api/admin-graphql/latest/queries/return) query to retrieve the
return by its ID. Learn more about providing a
[return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
for merchants.

## Arguments

- **`returnInput`**: `ReturnInput!` — Specifies the input fields for a return.

## Payload Fields

- `return`: `Return` — The created return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnCreatePayload](../types/objects/ReturnCreatePayload.md)
- [ReturnInput](../types/inputs/ReturnInput.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnCreate($returnInput: ReturnInput!) {
  returnCreate(returnInput: $returnInput) {
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
