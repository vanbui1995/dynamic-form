import { zodResolver } from "@hookform/resolvers/zod";
import { Field, ResourceOption } from "../../../types/form";
import { transformToDynamicFields } from "./utils/transformToDynamicFields";
import { transformToFormSchema } from "./utils/transformToFormSchema";
import { transformToInitialValues } from "./utils/transformToInitialValues";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { DynamicField } from "../DynamicField";
import { useEffect, useMemo } from "react";
import { Button } from "../Button";

type DynamicFormProps = {
  fields: Field[];
  resourceOptionMap: Record<string, ResourceOption[]>;
  handleSubmit: (values: FormValuesType) => void;
};

type FormValuesType = {
  [key: string]: unknown;
};

export function DynamicForm(props: DynamicFormProps) {
  const { fields, resourceOptionMap, handleSubmit } = props;

  const initialValues = useMemo(
    () => transformToInitialValues(fields),
    [fields]
  );
  const dynamicSchema = useMemo(() => transformToFormSchema(fields), [fields]);
  const dynamicFields = useMemo(
    () => transformToDynamicFields(fields, resourceOptionMap),
    [fields, resourceOptionMap]
  );

  const form = useForm<FormValuesType>({
    mode: "onBlur",
    resolver: zodResolver(dynamicSchema),
    defaultValues: initialValues,
  });

  // Re-initialize form when initialValues change
  useEffect(() => {
    form.reset(initialValues);
  }, [form, initialValues]);

  const onSubmit = (values: FormValuesType) => {
    handleSubmit(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {dynamicFields.map((field) => (
            <DynamicField key={field.name} {...field} />
          ))}
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
