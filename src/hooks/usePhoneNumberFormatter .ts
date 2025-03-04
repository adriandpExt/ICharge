import { useCallback } from "react";
import { UseFormSetValue } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePhoneNumberFormatter = (setValue: UseFormSetValue<any>) => {
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
