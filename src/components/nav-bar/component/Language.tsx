import { ReactElement } from "react";
import { Globe } from "lucide-react";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Label } from "@/components/ui/label";
import { SvgIcons } from "../../svg-icons";
import { language } from "../utils";
import { IconName } from "../../svg-icons/utils";

export const Language = (): ReactElement => {
  const { selectedLanguage, handleValueChange } = useLanguageSwitcher();

  return (
    <Select onValueChange={handleValueChange} value={selectedLanguage}>
      <SelectTrigger className="hidden w-52 items-center justify-between space-x-5 whitespace-nowrap rounded-b-none rounded-t-xl border-0 text-white shadow-none data-[state=open]:bg-[#38D430] data-[state=open]:fade-in-35 lg:flex [&>svg]:text-white">
        <SelectValue
          placeholder={
            <div className="flex items-center gap-3">
              <Globe className="text-white" />

              <Label>Language</Label>
            </div>
          }
        />
      </SelectTrigger>

      <SelectContent className="-mt-1 flex flex-col items-center rounded-b-xl rounded-t-none border-0 bg-[#38D430] text-white transition-all data-[state=close]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <SelectGroup>
          {language.map((item) => (
            <SelectItem value={item.id} key={item.id}>
              <div className="flex items-center">
                <SvgIcons name={item.icons as IconName} size={30} />

                <span className="ml-2 font-poppins">{item.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Language;
