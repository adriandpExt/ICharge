import { PropsWithChildren } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps extends PropsWithChildren {
  forms: UseFormReturn;
  onSubmit: () => void;
}

export const Form = ({ forms, onSubmit, children }: FormProps) => {
  return (
    <FormProvider {...forms}>
      <form onSubmit={forms.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
