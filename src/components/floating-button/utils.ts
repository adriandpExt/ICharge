import { z } from "zod";

export const formSchema = z.object({
  fullname: z.string().min(1, "fullname is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, "message is required"),
});

export const formDefaultValues = {
  fullname: "",
  email: "",
  message: "",
};

export const serviceId = import.meta.env.VITE_SERVICE_ID;
export const templateId = import.meta.env.VITE_TEMPLATE_ID;
export const publicKey = import.meta.env.VITE_PUBLIC_ID;
