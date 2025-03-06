import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, useFormContext } from "react-hook-form";

import PhoneInput, { PhoneInputProps } from "react-phone-input-2";

interface PhoneInputField extends PhoneInputProps, FieldValues {
  name: string;
  label: string;
}

const PhoneField = ({ name, label, control, ...rest }: PhoneInputField) => {
  const { formState } = useFormContext();

  const error = formState.errors[name];
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={error && "text-red-600"}>
            {label}
            <FormControl>
              <PhoneInput
                country={"ph"}
                inputStyle={{
                  backgroundColor: "#e5e7eb",
                  borderColor: error ? "#dc2626" : "white",
                  width: "100%",
                }}
                buttonStyle={{
                  borderColor: error ? "#dc2626" : "white",
                  backgroundColor: "#e5e7eb",
                }}
                enableAreaCodeStretch
                inputProps={{ required: true }}
                placeholder="12345678910"
                {...field}
                {...rest}
              />
            </FormControl>
            <FormMessage className={`font-poppins text-red-600`} />
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

export default PhoneField;
