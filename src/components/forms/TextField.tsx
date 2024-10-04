import { FormFieldProps } from "./types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import { FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface TextFieldProps<T extends FieldValues> extends FormFieldProps<T> {
  className?: string;
}

export const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const { t } = useTranslation();

  const {
    control,
    name,
    label,
    className,
    placeholder = t(LocalizationKey.common.textfieldPlaceholder),
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className={
                (cn("border-white bg-gray-200 placeholder:text-gray-500"),
                className)
              }
            />
          </FormControl>
          <FormMessage className="font-poppins text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default TextField;
