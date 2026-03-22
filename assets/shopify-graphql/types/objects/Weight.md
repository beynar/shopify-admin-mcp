# Object: `Weight`

A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.

The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.

## Fields

- `unit`: `WeightUnit!` — The unit of measurement for `value`.
- `value`: `Float!` — The weight value using the unit system specified with `unit`.

## Related Types

- [WeightUnit](../../types/enums/WeightUnit.md)
