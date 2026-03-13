import { IconName } from "@/components/svg-icons/utils";

type IButtonType = "Viber" | "Email";

export interface IButtonContent {
  buttonType?: IButtonType;
  label?: string;
  icon?: IconName;
  link: string;
}

export interface ICardInfo {
  id: string;
  img: string;
  name?: string;
  role?: string;
  qrLink: string;
  buttonContent: IButtonContent[];
}
