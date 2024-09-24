import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea as ShadTextArea } from "@/components/ui/textarea";
import { FormFieldProps } from "../types";

export const TextArea = (props: FormFieldProps) => {
  const { control, name, label } = props;
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
              className="h-20 resize-none border-white bg-gray-200 placeholder:text-gray-500"
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
