import { Field, ResourceOption } from "../../../../types/form";
import {
  FieldComponentProps,
  FieldType,
  TransformedDynamicField,
} from "../../DynamicField";

function getOptionsForDynamicFields(
  field: Field,
  resourceOptionMap: Record<string, ResourceOption[]>
) {
  const values =
    field.values ||
    (field?.resource && resourceOptionMap[field?.resource]) ||
    [];
  return values.map((item) => ({
    label: item.label,
    value: item.id,
  }));
}

export function transformToDynamicFields(
  fields: Field[],
  resourceOptionMap: Record<string, ResourceOption[]>
): TransformedDynamicField[] {
  return (
    fields
      // Transform fields
      .map((field): TransformedDynamicField => {
        // Transform common fields for dyanmic fields
        const commonFields = {
          name: field.key,
          label: field.label,
          constraint: {
            required: field?.constraints?.required === true,
          },
        };
        // Transform values for select, check, radio fields
        const options = getOptionsForDynamicFields(field, resourceOptionMap);

        switch (field.type) {
          case "select": {
            return {
              ...commonFields,
              type: FieldType.Select,
              fieldProps: {
                placeholder: field.placeholder,
                isMulti: !!field.multiple,
                options,
              } as FieldComponentProps<FieldType.Select>,
            };
          }

          case "checkbox-group": {
            return {
              ...commonFields,
              type: FieldType.CheckboxGroup,
              fieldProps: {
                placeholder: field.placeholder,
                options,
              } as FieldComponentProps<FieldType.CheckboxGroup>,
            };
          }

          default: {
            // case email & text
            return {
              ...commonFields,
              type: FieldType.Input,
              fieldProps: {
                placeholder: field.placeholder,
              } as FieldComponentProps<FieldType.Input>,
            };
          }
        }
      })
  );
}
