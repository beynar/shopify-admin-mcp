# Object: `UnitPriceMeasurement`

The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).

## Fields

- `measuredType`: `UnitPriceMeasurementMeasuredType` — The type of unit of measurement for the unit price measurement.
- `quantityUnit`: `UnitPriceMeasurementMeasuredUnit` — The quantity unit for the unit price measurement.
- `quantityValue`: `Float!` — The quantity value for the unit price measurement.
- `referenceUnit`: `UnitPriceMeasurementMeasuredUnit` — The reference unit for the unit price measurement.
- `referenceValue`: `Int!` — The reference value for the unit price measurement.

## Related Types

- [UnitPriceMeasurementMeasuredType](../../types/enums/UnitPriceMeasurementMeasuredType.md)
- [UnitPriceMeasurementMeasuredUnit](../../types/enums/UnitPriceMeasurementMeasuredUnit.md)
