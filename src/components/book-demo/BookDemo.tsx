import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { PageContainer, SvgIcons } from "@/components";

import { formSchema, issueLabelValue, issueType, sector } from "./utils";
import {
  Form,
  RadioField,
  SelectField,
  TextArea,
  TextField,
} from "@/components/forms";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

type FormValues = z.infer<typeof formSchema>;
export default function BookDemoCard() {
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      issue: "",
      phoneNumber: "",
      companyName: "",
      sector: "",
      country: "",
      explainIssue: "",
      interestedIcharge: "",
      additionalInformation: "",
    },
  });

  const getCleanedData = (data: FormValues, selectedOption: string | null) => {
    const commonFields = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    switch (selectedOption) {
      case "I have an issue with my power bank/ICharge station":
        return {
          ...commonFields,
          address: data.address,
          issue: data.issue,
          explainIssue: data.explainIssue,
        };
      case "I want a ICharge station":
        return {
          ...commonFields,
          phoneNumber: data.phoneNumber,
          companyName: data.companyName,
          sector: data.sector,
          interestedIcharge: data.interestedIcharge,
        };
      case "I want to bring ICharge to my country":
        return {
          ...commonFields,
          phoneNumber: data.phoneNumber,
          country: data.country,
          additionalInformation: data.additionalInformation,
        };
      default:
        return commonFields;
    }
  };
  const handleSubmit: SubmitHandler<FormValues> = (data) => {
    const cleanedData = getCleanedData(data, selectedOption);
    console.log("Form data:", cleanedData);
  };

  const renderIssue = () => {
    return (
      <>
        <TextField
          control={form.control}
          name="address"
          label={t(LocalizationKey.bookDemo.renderIssue.address)}
        />
        <SelectField
          control={form.control}
          name="issue"
          label={t(LocalizationKey.bookDemo.renderIssue.issue)}
          options={issueLabelValue}
        />

        <TextArea
          control={form.control}
          name="explainIssue"
          label={t(LocalizationKey.bookDemo.renderIssue.explainIssue)}
        />
      </>
    );
  };

  const renderWantChargeStation = () => {
    return (
      <>
        <TextField
          control={form.control}
          label={t(
            LocalizationKey.bookDemo.renderWantChargeStation.phoneNumber,
          )}
          name="phoneNumber"
        />

        <TextField
          control={form.control}
          label={t(
            LocalizationKey.bookDemo.renderWantChargeStation.companyName,
          )}
          name="companyName"
        />

        <RadioField
          control={form.control}
          label={t(LocalizationKey.bookDemo.renderWantChargeStation.sector)}
          name="sector"
          options={sector}
        />
        <TextArea
          control={form.control}
          label={t(
            LocalizationKey.bookDemo.renderWantChargeStation.interestedIcharge,
          )}
          name="interestedIcharge"
        />
      </>
    );
  };

  const renderBringICharge = () => {
    return (
      <>
        <TextField
          control={form.control}
          label={t(LocalizationKey.bookDemo.renderBringICharge.phoneNumber)}
          name="phoneNumber"
        />

        <TextField
          control={form.control}
          label={t(LocalizationKey.bookDemo.renderBringICharge.country)}
          name="country"
        />

        <TextArea
          control={form.control}
          label={t(
            LocalizationKey.bookDemo.renderBringICharge.additionalInformation,
          )}
          name="additionalInformation"
        />
      </>
    );
  };

  const renderDynamicFields = () => {
    switch (selectedOption) {
      case "I have an issue with my power bank/ICharge station":
        return renderIssue();
      case "I want a ICharge station":
        return renderWantChargeStation();
      case "I want to bring ICharge to my country":
        return renderBringICharge();
      default:
        return null;
    }
  };
  return (
    <PageContainer>
      <Card
        className="grid grid-cols-1 rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] lg:grid-cols-2"
        id="bookDemo"
      >
        <div className="relative hidden h-full w-full rounded-bl-[36px] rounded-tl-[36px] bg-cover bg-no-repeat lg:grid lg:place-items-center lg:bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]">
          <div className="absolute inset-0 rounded-bl-[36px] rounded-tl-[36px] bg-[#067100] opacity-60" />
          <div className="relative z-10 rounded-bl-[36px] rounded-tl-[36px]">
            <SvgIcons name="ic_footer_logo" size={500} />
          </div>
        </div>

        <Form<FormValues> forms={form} onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>
              <Label variant={"heading1"}>
                {t(LocalizationKey.bookDemo.heading)}
              </Label>
            </CardTitle>
            <CardDescription>
              <Label variant={"default"}>
                {t(LocalizationKey.bookDemo.whatBringYouHere)}
              </Label>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <Select onValueChange={handleOptionChange}>
              <SelectTrigger className="w-full border-white bg-gray-200">
                <SelectValue
                  placeholder={
                    <Label variant={"default"} className="text-gray-500">
                      {t(LocalizationKey.common.selectPlaceholder)}
                    </Label>
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-80 whitespace-pre-wrap border-white bg-gray-200 md:w-full lg:w-full">
                {issueType.map((item) => (
                  <SelectItem
                    value={item.value}
                    key={item.id}
                    className="cursor-pointer focus:bg-[#aecfab]"
                  >
                    <Label variant={"default"}>{item.label}</Label>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <TextField
              control={form.control}
              name="firstName"
              label={t(LocalizationKey.bookDemo.firstname)}
            />

            <TextField
              control={form.control}
              name="lastName"
              label={t(LocalizationKey.bookDemo.lastname)}
            />

            <TextField
              control={form.control}
              name="email"
              label={t(LocalizationKey.bookDemo.email)}
            />

            {renderDynamicFields()}

            <CardDescription>
              <Label variant={"default"}>
                {t(LocalizationKey.bookDemo.demoFooter)}
              </Label>
            </CardDescription>
          </CardContent>

          <CardFooter className="justify-end">
            <Button
              type="submit"
              variant={"default"}
              className="h-12 rounded-xl shadow-xl"
            >
              {t(LocalizationKey.bookDemo.bookDemoBtn)} <ArrowRight />
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </PageContainer>
  );
}
