import { ReactElement, useState } from "react";
import i18n from "@/i18n";
import { Globe } from "lucide-react";

import useScroll from "@/hooks/useScroll";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

import { SvgIcons } from "../../svg-icons";
import { language } from "../utils";
import { IconName } from "../../svg-icons/utils";

export const Language = (): ReactElement => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleValueChange = (value: string) => {
    setSelectedLanguage(value);
    handleChangeLanguage(value);
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isScroll = useScroll(window.innerHeight);

  return (
    <Select onValueChange={handleValueChange} value={selectedLanguage}>
      <SelectTrigger
        className={`hidden w-auto items-center justify-start space-x-2 whitespace-nowrap lg:flex ${
          isScroll ? "text-black" : "text-white"
        }`}
      >
        <SelectValue
          placeholder={
            <div className="flex items-center gap-1">
              <Globe />
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent className={`${isScroll ? "text-black" : "text-white"}`}>
        <SelectGroup>
          {language.map((item) => (
            <SelectItem value={item.id} key={item.id}>
              <div className="flex items-center">
                <SvgIcons name={item.icons as IconName} size={30} />
                <span className="ml-2">{item.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Language;