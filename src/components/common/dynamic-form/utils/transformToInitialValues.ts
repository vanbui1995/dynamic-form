import { Field } from "../../../../types/form";

export function transformToInitialValues(fields: Field[]) {
  return fields.reduce((acc, field) => {
    // 1. Prioritize initialValue from field definition
    if (field.initialValue !== undefined) {
      acc[field.key] = field.initialValue;
      return acc;
    }
    // 2. Set initialValue base on input type
    switch (field.type) {
      case "select": {
        if (field.multiple) {
          acc[field.key] = [];
        } else {
          acc[field.key] = undefined;
        }
        break;
      }

      case "checkbox-group": {
        acc[field.key] = [];
        break;
      }
      // default case for text, email
      default: {
        acc[field.key] = "";
      }
    }

    return acc;
  }, {} as Record<string, unknown>);
}
