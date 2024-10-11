import { FloatingForm } from "./type";
import { ReactElement, useRef, useState } from "react";
import { Bot } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

import { Form, TextArea, TextField } from "../forms";

import {
  formDefaultValues,
  formSchema,
  publicKey,
  serviceId,
  templateId,
} from "./utils";

export const FloatingButton = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const forms = useForm<FloatingForm>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  const sendEmail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, {
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

  const handleSubmit: SubmitHandler<FloatingForm> = (data) => {
    console.log("Form data:", data);
    sendEmail();
    forms.reset();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="fixed bottom-10 right-2 flex h-20 w-20 items-center justify-center rounded-full border-white bg-gradient-to-t from-[#055c00] to-[#022700] text-white shadow-2xl drop-shadow-2xl">
        <Bot className="h-16 w-16" />
      </PopoverTrigger>
      <PopoverContent className="mr-2 h-full rounded-xl border-white bg-white shadow-2xl drop-shadow-2xl">
        <Button className="ml-52" onClick={handleClose}>
          X
        </Button>
        <Form ref={formRef} forms={forms} onSubmit={handleSubmit}>
          <TextField name="fullname" control={forms.control} label="Fullname" />
          <TextField name="email" control={forms.control} label="Email" />
          <TextArea
            name="message"
            control={forms.control}
            label="Message"
            className="h-36 w-full resize-none"
          />
          <Button className="mt-2 w-full">Send</Button>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingButton;
