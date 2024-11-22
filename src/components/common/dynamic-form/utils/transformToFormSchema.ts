import { z, ZodArray, ZodString, ZodType } from "zod";
import { Field } from "../../../../types/form";

export function transformToFormSchema(fields: Field[]) {
  return z.object(
    fields.reduce((acc, field) => {
      let fieldSchema: ZodType | undefined;

      // 1. Specify main type for field
      switch (field.type) {
        case "checkbox-group":
          fieldSchema = z.array(z.string());
          break;

        case "select": {
          if (field.multiple) {
            fieldSchema = z.array(
              z.object({
                value: z.string(),
                label: z.string(),
              })
            );
          } else {
            fieldSchema = z.object({
              value: z.string(),
              label: z.string(),
            });
          }
          break;
        }

        default: {
          fieldSchema = z.string({
            invalid_type_error: "Invalid field",
            required_error: "Required field",
          });
        }
      }

      // 2. Dynamic validations

      // Min & max length
      if (field?.constraints?.minLength) {
        fieldSchema = (fieldSchema as ZodString).min(
          field.constraints.minLength,
          `Min ${field.constraints.minLength} characters`
        );
      }
      if (field?.constraints?.maxLength) {
        fieldSchema = (fieldSchema as ZodString).max(
          field.constraints.maxLength,
          `Max ${field.constraints.maxLength} characters`
        );
      }

      if (field?.constraints?.required === true) {
        if (
          fieldSchema instanceof ZodArray ||
          fieldSchema instanceof ZodString
        ) {
          fieldSchema = (fieldSchema as ZodArray<ZodString> | ZodString).min(
            1,
            "Required"
          );
        }
      }

      if (field.type === "email") {
        fieldSchema = (fieldSchema as ZodString).email("Invalid Email Address");
      }

      if (field?.constraints?.regex) {
        fieldSchema = (fieldSchema as ZodString).regex(
          new RegExp(field.constraints.regex.value),
          field.constraints.regex.message
        );
      }
      // 3. Set optional for non-required fields
      if (!field?.constraints?.required) {
        fieldSchema = fieldSchema.optional().or(z.literal(""));
      }

      acc[field.key] = fieldSchema;
      return acc;
    }, {} as Record<string, ZodType>)
  );
}
