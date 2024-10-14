import { z } from "zod";

export const inquiryDefaultValues = {
  fullname: "",
  company: "",
  email: "",
  phoneNumber: "",
  content: "",
};

export const inquiryFormSchema = z.object({
  fullname: z.string().min(1, "Fullname is requried"),
  company: z.string().min(1, "Company is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+63 9\d{2} \d{3} \d{4}$/, {
      message: "Must be in the format +63 9xx xxx xxxx",
    }),
  content: z.string().min(1, "Content is required"),
});
