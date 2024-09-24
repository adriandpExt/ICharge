import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormFieldProps, LabelValue } from "../types";

interface RadioField extends FormFieldProps {
  options: LabelValue[];
}

export const RadioField = (props: RadioField) => {
  const { control, name, label, options } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              {options.map((item) => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={item.value}
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel>{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="font-poppins" />
        </FormItem>
      )}
    />
  );
};

export default RadioField;