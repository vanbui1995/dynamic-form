import { ComponentProps } from "react";
import Select from "react-select";
import { cn } from "../../lib/utils";

export type SelectProps = ComponentProps<Select>;

export const SelectInput = (props: ComponentProps<Select>) => {
  const { "aria-invalid": ariaInvalid } = props;
  return (
    <Select
      classNames={{
        control: () =>
          cn({
            "!border-red-500": ariaInvalid === "true",
            "!border-green-600": ariaInvalid === "false",
          }),
      }}
      {...props}
    />
  );
};
