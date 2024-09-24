import { IssueType, LabelValue } from "./types";

export const issueType: IssueType[] = [
  {
    id: "issue",
    value: "I have an issue with my power bank/ICharge station",
    label: "I have an issue with my power bank/ICharge station",
  },
  {
    id: "wantICharge",
    value: "I want a ICharge station",
    label: "I want a ICharge station",
  },
  {
    id: "bringICharge",
    value: "I want to bring ICharge to my country",
    label: "I want to bring ICharge to my country",
  },
];

export const issueLabelValue: LabelValue[] = [
  {
    label: "App/Software",
    value: "appSoftware",
  },
  {
    label: "Power bank",
    value: "powerBank",
  },
  {
    label: "ICharge Station",
    value: "iChargeStation",
  },
  {
    label: "Billing",
    value: "billing",
  },
  {
    label: "General",
    value: "general",
  },
];

export const sector: LabelValue[] = [
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Healtcare",
    value: "healtcare",
  },
  {
    label: "Hospitality",
    value: "hospitality",
  },
  {
    label: "Leisure",
    value: "leisure",
  },
  {
    label: "Retial",
    value: "retail",
  },
  {
    label: "Transport",
    value: "transport",
  },
];