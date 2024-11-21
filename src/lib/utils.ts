import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Field } from "../types/form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getResourceKeysInFields(fields: Field[]) {
  return fields.reduce((acc, field) => {
    if (field.resource) {
      return [...acc, field.resource];
    }
    return acc;
  }, [] as string[]);
}
