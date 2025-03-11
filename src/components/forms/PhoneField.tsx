import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, useFormContext } from "react-hook-form";

import PhoneInput, { CountryData } from "react-phone-input-2";
import { FormFieldProps } from "./types";
import { ChangeEvent } from "react";

interface PhoneInputField<T extends FieldValues> extends FormFieldProps<T> {
  className?: string;
}

const PhoneField = <T extends FieldValues>({
  name,
  label,
  control,
}: PhoneInputField<T>) => {
  const { formState, setValue, setError, clearErrors } = useFormContext();

  const handlePhoneChange = (
    _value: string,
    _data: CountryData,
    _event: ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => {
    setValue("phoneNumber", formattedValue);
    if (formattedValue === _data.dialCode) {
      setError("phoneNumber", {
        type: "required",
        message: "Phone Number is Required",
      });
    } else {
      clearErrors("phoneNumber");
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
                {...field}
                country={"ph"}
                inputStyle={{
                  backgroundColor: "#e5e7eb",
                  borderColor: error ? "#dc2626" : "white",
                  width: "100%",
                }}
                inputProps={{
                  name: name,
                }}
                buttonStyle={{
                  borderColor: error ? "#dc2626" : "white",
                  backgroundColor: "#e5e7eb",
                }}
                enableAreaCodes={false}
                countryCodeEditable={false}
                placeholder="12345678910"
                onChange={handlePhoneChange}
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
