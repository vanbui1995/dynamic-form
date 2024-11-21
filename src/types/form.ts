export interface RegexConstraint {
  readonly message: string;
  readonly value: string;
}

export type Constraint = {
  maxLength: number;
  minLength: number;
  required: boolean;
  initialValue?: string;
  regex?: RegexConstraint;
};

export type Field = {
  key: string;
  label: string;
  multiple?: boolean;
  placeholder?: string;
  resource?: string;
  type: "text" | "email" | "select" | "text" | "checkbox-group";
  constraints?: Partial<Constraint>;
  values?: ResourceOption[];
  initialValue?: string | string[];
};

export type ResourceOption = {
  id: string;
  label: string;
};
