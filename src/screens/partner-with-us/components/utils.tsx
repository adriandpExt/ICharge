import { TInquiryForm } from "./type";

import { z } from "zod";

export const inquiryDefaultValues: TInquiryForm = {
  firstname: "",
  lastname: "",
  company: "",
  email: "",
  phoneNumber: "",
  content: "",
};

export const inquiryFormSchema = z.object({
  firstname: z.string().min(1, "First name is requried"),
  lastname: z.string().min(1, "Last name is requried"),
  company: z.string().min(1, "Company is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+63 9\d{2} \d{3} \d{4}$/, {
      message: "Must be in the format +63 9xx xxx xxxx",
    }),
  content: z.string().min(1, "Content is required"),
}) as z.ZodType<TInquiryForm>;
