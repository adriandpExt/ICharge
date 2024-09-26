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
} from "./component";

type FormValues = z.infer<typeof formSchema>;
export default function BookDemoCard() {
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
        <TextField control={form.control} name="address" label="Address" />
        <SelectField
          control={form.control}
          name="issue"
          label="Issue"
          options={issueLabelValue}
        />

        <TextArea
          control={form.control}
          name="explainIssue"
          label="Please explain the issue"
        />
      </>
    );
  };

  const renderWantChargeStation = () => {
    return (
      <>
        <TextField
          control={form.control}
          label="Phone Number"
          name="phoneNumber"
        />

        <TextField
          control={form.control}
          label="Company Name"
          name="companyName"
        />

        <RadioField
          control={form.control}
          label="Sector"
          name="sector"
          options={sector}
        />
        <TextArea
          control={form.control}
          label="Why are you interested in ICharge?"
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
          label="Phone Number"
          name="phoneNumber"
        />

        <TextField
          control={form.control}
          label="Country/Region"
          name="country"
        />

        <TextArea
          control={form.control}
          label="Additional Information"
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
      <Card className="grid grid-cols-1 rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] lg:grid-cols-2">
        <div className="relative hidden h-full w-full rounded-bl-[36px] rounded-tl-[36px] bg-cover bg-no-repeat lg:grid lg:place-items-center lg:bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]">
          <div className="absolute inset-0 rounded-bl-[36px] rounded-tl-[36px] bg-[#067100] opacity-60" />
          <div className="relative z-10 rounded-bl-[36px] rounded-tl-[36px]">
            <SvgIcons name="ic_footer_logo" size={500} />
          </div>
        </div>

        <Form<FormValues> forms={form} onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>
              <Label variant={"title"}> BOOK A DEMO</Label>
            </CardTitle>
            <CardDescription>
              <Label variant={"default"}>What&apos;s bring you here?</Label>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <Select onValueChange={handleOptionChange}>
              <SelectTrigger className="w-full border-white bg-gray-200">
                <SelectValue
                  placeholder={
                    <Label variant={"default"} className="text-gray-500">
                      Please Select...
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
              label="First Name"
            />

            <TextField
              control={form.control}
              name="lastName"
              label="Last Name"
            />

            <TextField control={form.control} name="email" label="Email" />

            {renderDynamicFields()}

            <CardDescription>
              <Label variant={"default"}>
                ICHARGE needs the contact information you provide to us to
                contact you about our products and services. You may unsubscribe
                from these communications at any time. For information on how to
                unsubscribe, as well as our privacy practices and commitment to
                protecting your privacy, please review our Privacy Policy.
              </Label>
            </CardDescription>
          </CardContent>

          <CardFooter className="justify-end">
            <Button
              type="submit"
              variant={"default"}
              className="h-12 rounded-xl shadow-xl"
            >
              Continue <ArrowRight />
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </PageContainer>
  );
}
