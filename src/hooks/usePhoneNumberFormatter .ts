import { useCallback } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

export const usePhoneNumberFormatter = (
  setValue: UseFormSetValue<FieldValues>,
) => {
  const formatPhoneNumber = useCallback((value: string): string => {
    value = value.replace(/\D/g, "");

    if (!value.startsWith("63")) {
      value = "63" + value;
    }

    if (value.length > 2) {
      value = `+${value.substring(0, 2)} ${value.substring(2, 5)} ${value.substring(5, 8)} ${value.substring(8, 12)}`;
    }

    return value.trim();
  }, []);

  const handlePhoneNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const formattedNumber = formatPhoneNumber(event.target.value);
      setValue("phoneNumber", formattedNumber, { shouldValidate: true });
    },
    [formatPhoneNumber, setValue],
  );

  return { handlePhoneNumberChange };
};
