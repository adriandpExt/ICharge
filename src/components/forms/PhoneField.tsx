import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChangeEvent } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

import PhoneInput, { CountryData, PhoneInputProps } from "react-phone-input-2";

interface PhoneInputField extends PhoneInputProps, FieldValues {
  name: string;
  label: string;
}

const PhoneField = ({ name, label, control, ...rest }: PhoneInputField) => {
  const { formState, setValue, clearErrors, setError } = useFormContext();
  const handlePhoneChange = (
    _value: string,
    _country: CountryData,
    _event: ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => {
    setValue(name, formattedValue);
    if (formattedValue === "" || formattedValue === "+") {
      setError(name, { type: "required", message: "Phone Number is required" });
    } else {
      clearErrors(name);
    }
  };

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
                value={field.value}
                onChange={handlePhoneChange}
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
