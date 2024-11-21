"use client";

import { cn } from "../../lib/utils";
import { Checkbox } from "./Checkbox";

interface CheckboxProps {
  value: string;
  label?: string;
  color?: string;
}

export interface CheckboxGroupProps {
  value: string[];
  options: CheckboxProps[];
  onChange: (value: string[]) => void;
  onBlur?: () => void;
  className?: string;
  color?: string;
  orientation?: "horizontal" | "vertical";
  "aria-invalid"?:
    | boolean
    | "false"
    | "true"
    | "grammar"
    | "spelling"
    | undefined;
}

export function CheckboxGroup({
  onChange,
  onBlur,
  options,
  value = [],
  className,
  orientation = "horizontal",
  color,
  "aria-invalid": ariaInvalid,
}: Readonly<CheckboxGroupProps>) {
  const handleValueChange = (checkboxValue: string, checked: boolean) => {
    if (checked) {
      onChange([...value, checkboxValue]);
      onBlur?.();
    } else {
      onChange(value.filter((v) => v !== checkboxValue));
      onBlur?.();
    }
  };
  let colorForAriaInvalid: string | undefined = undefined;
  if (ariaInvalid === "true") {
    colorForAriaInvalid = "red";
  } else if (ariaInvalid === "false") {
    colorForAriaInvalid = "green";
  }

  return (
    <div
      className={cn("flex gap-3", className, {
        "flex-col": orientation === "vertical",
      })}
    >
      {options?.map((checkbox) => (
        <div key={checkbox.value} className="flex items-center space-x-2">
          <Checkbox
            color={colorForAriaInvalid ?? checkbox.color ?? color ?? "primary"}
            checked={value.includes(checkbox.value)}
            onCheckedChange={(checked: boolean) => {
              handleValueChange(checkbox.value, checked);
            }}
          >
            {checkbox.label}
          </Checkbox>
        </div>
      ))}
    </div>
  );
}
