import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { useForm } from "react-hook-form";
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

import { issueLabelValue, issueType, sector } from "./utils";
import {
  Form,
  RadioField,
  SelectField,
  TextArea,
  TextField,
} from "./component";

export default function BookDemoCard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const formSchema = z.object({
    firstName: z.string({
      required_error: "first name is required",
      invalid_type_error: "first name must be a string",
    }),
    lastName: z.string({
      required_error: "last name is required",
      invalid_type_error: "last name must be a string",
    }),
    email: z
      .string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
      })
      .email("must be a valid email"),
    address: z.string({
      required_error: "address is required",
      invalid_type_error: "address must be a string",
    }),
    issue: z.string({ required_error: "issue is required" }),
    explainIssue: z.string().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = () => {
    console.log("hellow world");
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
      <Card className="grid grid-cols-2 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6]">
        <div className="grid h-full w-full place-items-center rounded-bl-xl rounded-tl-xl bg-[url('@/assets/modern-man-using-smartphone-city-2.png')] bg-cover bg-no-repeat">
          <SvgIcons name="ic_footer_logo" size={200} />
        </div>

        <Form forms={form} onSubmit={handleSubmit}>
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
              <SelectContent className="border-white bg-gray-200">
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
              className="border-2 border-green-600 shadow-xl"
            >
              Continue <ArrowRight />
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </PageContainer>
  );
}
