import { Control, FieldValues } from "react-hook-form";

export interface FormFieldProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface IssueType {
  id: string;
  label: string;
  value: string;
}
