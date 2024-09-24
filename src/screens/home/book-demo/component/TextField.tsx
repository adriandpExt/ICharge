import { FormFieldProps } from "../types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const TextField = (props: FormFieldProps) => {
  const { control, name, label } = props;

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
              placeholder="Please Input..."
              className="border-white bg-gray-200 placeholder:text-gray-500"
            />
          </FormControl>
          <FormMessage className="font-poppins text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default TextField;
