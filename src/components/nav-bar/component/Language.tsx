import { ReactElement } from "react";

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

import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";

export const Language = (): ReactElement => {
  const { selectedLanguage, handleValueChange } = useLanguageSwitcher();

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
