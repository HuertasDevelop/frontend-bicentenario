"use client";

import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormReset,
} from "react-hook-form";

type FormProps<TFormValues extends Record<string, any>> = {
  onSubmit: SubmitHandler<TFormValues>;
  onReset?: UseFormReset<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const FormData = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

export default FormData;
