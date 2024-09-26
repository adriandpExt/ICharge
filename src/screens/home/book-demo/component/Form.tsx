import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues> extends PropsWithChildren {
  forms: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({
  forms,
  onSubmit,
  children,
}: FormProps<T>) => {
  return (
    <FormProvider {...forms}>
      <form onSubmit={forms.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
