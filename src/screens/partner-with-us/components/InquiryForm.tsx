import { TInquiryForm } from "./type";

import { ReactElement, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import iChargeLogo from "@/assets/icharge-big.svg";
import { Mail, MapPin, Phone } from "lucide-react";

import emailjs from "@emailjs/browser";
import LocalizationKey from "@/i18n/key";

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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { inquiryDefaultValues, inquiryFormSchema } from "./utils";

export const InquiryForm = (): ReactElement => {
  const inquiryFormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const { t } = useTranslation();

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
          <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
            <TextField
              control={inquiryForm.control}
              name="firstname"
              label={t(LocalizationKey.partnerWithUs.inquiryForm.firstname)}
            />
            <TextField
              control={inquiryForm.control}
              name="lastname"
              label={t(LocalizationKey.partnerWithUs.inquiryForm.lastname)}
            />
          </div>

          <TextField
            control={inquiryForm.control}
            name="company"
            label={t(LocalizationKey.partnerWithUs.inquiryForm.company)}
          />
          <TextField
            control={inquiryForm.control}
            type="email"
            name="email"
            label={t(LocalizationKey.partnerWithUs.inquiryForm.email)}
          />
          <TextField
            control={inquiryForm.control}
            name="phoneNumber"
            label={t(LocalizationKey.partnerWithUs.inquiryForm.phoneNumber)}
          />
          <TextArea
            className="h-52"
            control={inquiryForm.control}
            name="content"
            label={t(LocalizationKey.partnerWithUs.inquiryForm.content)}
          />

          <div className="text-end">
            <Button className="w-full shadow-2xl drop-shadow-2xl lg:w-80">
              {t(LocalizationKey.partnerWithUs.inquiryForm.formBtn)}
            </Button>
          </div>
        </div>
      </Form>
    );
  };

  const renderContact = (): ReactElement => {
    return (
      <div className="flex flex-col items-start justify-center gap-8 rounded-t-xl border-0 bg-white bg-gradient-to-b from-[#044F00] to-[#078E00] p-10 text-white shadow-2xl drop-shadow-2xl lg:rounded-l-xl lg:rounded-tr-none">
        <div className="flex w-full justify-center">
          <img src={iChargeLogo} alt="iCharge Logo" className="mx-auto" />
        </div>
        <Separator className="bg-white" />
        <Label variant={"body"} className="flex items-center gap-5">
          <Phone size={32} strokeWidth={3} /> +63 918 738 8888
        </Label>
        <Label variant={"body"} className="flex items-center gap-5">
          <Mail size={32} strokeWidth={3} /> QDiCharge@gmail.com
        </Label>

        <Label
          variant={"body"}
          className="hidden items-center gap-5 whitespace-pre-line lg:flex"
        >
          <MapPin size={32} strokeWidth={3} />
          Unit 2402 City Trade and Financial Tower, 7th Avenue, BGC, Taguig
        </Label>

        <div className="flex items-center gap-5 lg:hidden">
          <MapPin size={32} strokeWidth={3} />
          <div className="flex flex-col">
            <Label variant={"body"}>Unit 2402 City</Label>
            <Label variant={"body"}>Trade and Financial Tower,</Label>
            <Label variant={"body"}>7th Avenue, BGC, Taguig</Label>
          </div>
        </div>
      </div>
    );
  };
  return (
    <PageContainer
      id="inquiryForm"
      className="flex w-full items-center justify-center py-0"
    >
      <Card className="grid h-full w-full grid-cols-1 rounded-xl border-0 bg-white shadow-2xl drop-shadow-2xl lg:grid-cols-2">
        {renderContact()}

        <div>
          <CardHeader className="rounded-t-xl bg-white py-20">
            <CardTitle className="text-center">
              <Label variant={"title"}>
                {t(LocalizationKey.partnerWithUs.inquiryForm.title)}
              </Label>
            </CardTitle>
            <CardDescription />
          </CardHeader>
          <CardContent>{renderForm()}</CardContent>
        </div>
      </Card>
    </PageContainer>
  );
};

export default InquiryForm;
