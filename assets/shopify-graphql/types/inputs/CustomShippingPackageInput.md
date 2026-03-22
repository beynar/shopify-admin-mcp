# Input Object: `CustomShippingPackageInput`

The input fields for a custom shipping package used to pack shipment.

## Input Fields

- `weight`: `WeightInput` — Weight of the empty shipping package.
- `dimensions`: `ObjectDimensionsInput` — Outside dimensions of the empty shipping package.
- `default`: `Boolean` = `false` — The default package is the one used to calculate shipping costs on checkout.
- `name`: `String` — Descriptive name for the package.
- `type`: `ShippingPackageType` — Type of package.

## Related Types

- [ObjectDimensionsInput](../../types/inputs/ObjectDimensionsInput.md)
- [ShippingPackageType](../../types/enums/ShippingPackageType.md)
- [WeightInput](../../types/inputs/WeightInput.md)
