# Mutation: `subscriptionContractCreate`

**Returns:** `SubscriptionContractCreatePayload`

Creates a subscription contract draft, which is an intention to create a new subscription. The draft lets you incrementally build and modify subscription details before committing them to create the actual [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

The mutation requires [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, billing details, and contract configuration including the [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy). You can specify the [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod), the [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and subscription intervals.

After you create the draft, you can either modify it with the [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate) mutation or finalize and create the active subscription contract with [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit).

Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract).

## Arguments

- **`input`**: `SubscriptionContractCreateInput!` — The properties of the new Subscription Contract.

## Payload Fields

- `draft`: `SubscriptionDraft` — The Subscription Contract object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContractCreateInput](../types/inputs/SubscriptionContractCreateInput.md)
- [SubscriptionContractCreatePayload](../types/objects/SubscriptionContractCreatePayload.md)
- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionContractCreate($input: SubscriptionContractCreateInput!) {
  subscriptionContractCreate(input: $input) {
    draft {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
