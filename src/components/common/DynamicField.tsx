import {
  ComponentProps,
  type FC,
  type HTMLAttributes,
  type JSX,
  type ReactNode,
  useContext,
} from "react";
import type { ControllerRenderProps } from "react-hook-form";
import type { ZodType } from "zod";

import { Input, type InputProps } from "./Input";
import { SelectInput as Select, type SelectProps } from "./Select";
import {
  FormControl,
  FormControlContext,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form";
import { cn } from "../../lib/utils";
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup";

export enum FieldType {
  Select = "Select",
  Input = "Input",
  CheckboxGroup = "CheckboxGroup",
}

export type TransformedDynamicField = ComponentProps<typeof DynamicField>;

export type FieldPropsMap = {
  [FieldType.Input]: InputProps;
  [FieldType.Select]: SelectProps;
  [FieldType.CheckboxGroup]: CheckboxGroupProps;
};

const FieldTypeToFieldComponentMap: {
  [T in FieldType]: (
    props: FieldHelperType & FieldComponentProps<T>
  ) => JSX.Element | ReactNode;
} = {
  [FieldType.Input]: Input,
  [FieldType.Select]: Select,
  [FieldType.CheckboxGroup]: CheckboxGroup,
};

interface FieldConstraint {
  required: boolean;
  maxLength?: number;
  minLength?: number;
  regex?: { value: string; message: string };
}

export interface DynamicFieldProps {
  fieldKey: string;
  fieldType: FieldType;
  constraint: FieldConstraint;
  validation: ZodType;
  fieldProps?: unknown;
}

type FieldHelperType = ControllerRenderProps<any, string>;

type TypeOmittedKeys = "value" | "onChange" | "onBlur";

export type FieldComponentProps<T extends FieldType> = Omit<
  FieldPropsMap[T],
  TypeOmittedKeys
> &
  JSX.IntrinsicAttributes;

export type FormItemProps = {
  label?: string;
  constraint?: FieldConstraint;
};

export type DynamicSubFieldProps<T, P> = {
  type: T;
  fieldProps: P;
  name: string;
  formItemProps?: HTMLAttributes<HTMLDivElement>;
  className?: string;
};

export type TestType<
  T extends FieldType,
  P extends FieldComponentProps<T>
> = DynamicSubFieldProps<T, P> & FormItemProps;
export const DynamicField = <
  T extends FieldType,
  P extends FieldComponentProps<T>
>(
  props: DynamicSubFieldProps<T, P> & FormItemProps
) => {
  const {
    name,
    label,
    type,
    fieldProps,
    formItemProps,
    className,
    constraint,
  } = props;
  const value = useContext(FormControlContext);
  const Field: FC<P & FieldHelperType> = FieldTypeToFieldComponentMap[type];

  return (
    <FormField
      control={value.formControl}
      isSubmitted={value.isSubmitted}
      name={name}
      render={({ field }) => (
        <FormItem {...(formItemProps || {})} className={cn(className)}>
          <>
            <div className="flex items-center mb-2.5 gap-2">
              <FormLabel className="mb-0">{label}</FormLabel>

              {constraint && (
                <>
                  {!constraint.required && (
                    <span className="text-sm italic text-gray-500">
                      Optional
                    </span>
                  )}
                  {typeof constraint.maxLength === "number" && (
                    <span>Max {constraint.maxLength} letters</span>
                  )}
                </>
              )}
            </div>
          </>
          <FormControl>
            <Field {...field} {...(fieldProps || {})} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
