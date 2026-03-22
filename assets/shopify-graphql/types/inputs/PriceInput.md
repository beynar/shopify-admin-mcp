# Input Object: `PriceInput`

The input fields for updating the price of a parent product variant.

## Input Fields

- `calculation`: `PriceCalculationType` — The specific type of calculation done to determine the price of the parent variant.
- `price`: `Money` — The price of the parent product variant. This will be be used if calcualtion is set to 'FIXED'.

## Related Types

- [PriceCalculationType](../../types/enums/PriceCalculationType.md)
