import { Control, FieldValues, Path } from "react-hook-form";

export interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
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

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  issue: string;
  phoneNumber: string;
  companyName: string;
  sector: string;
  country: string;
  explainIssue?: string;
  interestedIcharge?: string;
  additionalInformation?: string;
}

