import { FormFieldProps } from "./types";

import { FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea as ShadTextArea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextAreaProps<T extends FieldValues> extends FormFieldProps<T> {
  className?: string;
}

export const TextArea = <T extends FieldValues>(props: TextAreaProps<T>) => {
  const { control, name, label, className } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <ShadTextArea
              {...field}
              className={
                (cn(
                  "h-20 resize-none border-white bg-gray-200 placeholder:text-gray-500",
                ),
                className)
              }
              placeholder="Please Input..."
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextArea;
