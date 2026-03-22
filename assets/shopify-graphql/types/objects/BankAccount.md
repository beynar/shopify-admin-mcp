# Object: `BankAccount`

Represents a bank account payment instrument.

## Fields

- `accountHolderType`: `BankAccountHolderType!` — The type of account holder.
- `accountType`: `BankAccountType!` — The type of bank account.
- `bankName`: `String!` — The name of the bank.
- `billingAddress`: `CustomerPaymentInstrumentBillingAddress` — The billing address associated with the bank account.
- `lastDigits`: `String!` — The last four digits of the account number.

## Related Types

- [BankAccountHolderType](../../types/enums/BankAccountHolderType.md)
- [BankAccountType](../../types/enums/BankAccountType.md)
- [CustomerPaymentInstrumentBillingAddress](../../types/objects/CustomerPaymentInstrumentBillingAddress.md)
