import { TInquiryForm } from "./type";

import { ReactElement, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import { inquiryId, publicKey, serviceId } from "@/lib/viteKey";

import { Form, PageContainer, TextArea, TextField } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { inquiryDefaultValues, inquiryFormSchema } from "./utils";

export const InquiryForm = (): ReactElement => {
  const inquiryFormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const inquiryForm = useForm<TInquiryForm>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: inquiryDefaultValues,
  });

  const sendEmail = () => {
    if (inquiryFormRef.current) {
      emailjs
        .sendForm(serviceId, inquiryId, inquiryFormRef.current, {
          publicKey: publicKey,
        })
        .then(toastSuccess, toastError);
    }
  };

  const toastSuccess = () => {
    return toast({
      variant: "success",
      title: "Successfully sent",
      description: "You've sent an email to the ICharge Team.",
    });
  };

  const toastError = () => {
    return toast({
      variant: "destructive",
      title: "Error",
      description: "There is an error.",
    });
  };

  const handleInquiryFormSubmit: SubmitHandler<TInquiryForm> = (data) => {
    console.log("Form data:", data);
    sendEmail();
    inquiryForm.reset();
  };

  const renderForm = () => {
    return (
      <Form
        forms={inquiryForm}
        ref={inquiryFormRef}
        onSubmit={handleInquiryFormSubmit}
      >
        <div className="flex flex-col gap-5">
          <TextField
            control={inquiryForm.control}
            name="fullname"
            label="Fullname*"
          />
          <TextField
            control={inquiryForm.control}
            name="company"
            label="Company*"
          />
          <TextField
            control={inquiryForm.control}
            type="email"
            name="email"
            label="Email*"
          />
          <TextField
            control={inquiryForm.control}
            name="phoneNumber"
            label="Phone Number*"
          />
          <TextArea
            className="h-52"
            control={inquiryForm.control}
            name="content"
            label="Content*"
          />

          <div className="text-center">
            <Button className="w-full lg:w-96">Contact Us</Button>
          </div>
        </div>
      </Form>
    );
  };

  return (
    <PageContainer className="flex w-full items-center justify-center">
      <Card className="h-full w-full rounded-xl border-0 bg-slate-300 shadow-2xl drop-shadow-2xl lg:w-1/2">
        <CardHeader className="rounded-t-xl bg-white py-20">
          <CardTitle className="text-center text-3xl">
            Franchise Inquiry Form
          </CardTitle>
          <CardDescription>
            This form is only for inquiries regarding franchising and all other
            inquiries will not be passed on. Please inquire at the appropriate
            location if your inquiry pertains to a different subject.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-10">{renderForm()}</CardContent>
      </Card>
    </PageContainer>
  );
};

export default InquiryForm;
