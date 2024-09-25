import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/customUI/accordion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqData = [
  {
    category: "Renting and Returning",
    items: [
      {
        question: "How do I rent the power bank?",
        answer:
          "You have to first download the xxx app available in the App Store or Google Play. You'll need to create or log into a xxx account, providing a valid mobile number or email and entering the four-digit one-time-passcode SMS we send to that number or email. Tap on \"Scan to rent\" in the app's home screen, scan the QR code in front of a station. This will release a power bank for you to use on the go. If you're seeking a station, explore the map in the app.",
      },
      {
        question:
          "What do I do if I cannot release a power bank from the station?",
        answer:
          "Please reach out to in-app support team and we will happily take you through the installation process and try and remedy this for you.",
      },
      {
        question: "What do I do if the station is empty?",
        answer:
          "If the station is empty, locate the next nearer station via the app.",
      },
      {
        question: "How do I return the power bank?",
        answer:
          "To return, simply push the power bank into an empty slot in the same station. Push it in all the way until it clicks and wait for the app to show your rental recap — contact in-app support if it doesn't.",
      },
      {
        question:
          "What do I do if the station I want to return my power bank to is full?",
        answer:
          "Make sure that you only return the powerbank to the same station that you rented to there is always a slot for each powerbank.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      {
        question:
          "What do I do if power bank does not eject but the running order starts running?",
        answer:
          'First refresh the order page and check whether the order has ended. If it\'s still running, select "Customer service" button on the running order and follow the step by step instructions. (You will need to submit a clear photo with the front view of the station along with the QR code clearly indicated). The order will end and you can proceed to start renting again.',
      },
      {
        question:
          "What do I do if I already returned power bank but the order is still running?",
        answer:
          'First check and confirm the power bank is properly and fully inserted. Refresh the order page to check if order page have stopped (poor network might delay responses). If order is still running, press "Customer service" button on the home page and follow the step by step instructions. (You will need to submit a clear photo with the front view of the station along with the QR code clearly indicated). The order will end. We will investigate and reply to you in 3 working days.',
      },
      {
        question: "How do I report a faulty power bank?",
        answer:
          "Please report a faulty power bank via the app, or contact in-App support team.",
      },
      {
        question:
          "What happens if I rent the power bank and there is no cable?",
        answer:
          "If there is no cable present, first return the power bank and report within the app prompt. You will not be charged for this rental. Please then continue to rent another power bank.",
      },
      {
        question: "My power bank does not charge my phone, what do I do?",
        answer:
          "Make sure the cable is properly plugged into your device. We recommend you remove any thick phone case to allow the cable to go all the way in. If you still don't see a charge, return the power bank into the station and contact us via in-app support.",
      },
    ],
  },
  {
    category: "Charges and Payments",
    items: [
      {
        question: "What happens if I lose/don't return a power bank?",
        answer:
          "You will need to pay a penalty. The price will show in the app, If you decide not to return it you cannot withdraw your security deposit anymore.",
      },
      {
        question: "How much is a power bank to rent?",
        answer:
          "Please take note that price varies depends on the location of the station. Price plan also displays after scanning station QR code.",
      },
      {
        question: "How do I pay for the rental charges?",
        answer:
          "After logging in for the first time, you will be prompted to add a valid credit/debit card. Upon returning the power bank, rental charges will be automatically deducted from the defaulted card. Should the payment failed, an unpaid order will be shown on homepage when you login again and you will have to manually complete the payment for normal service to resume.",
      },
      {
        question:
          "How do I check how long I have the power bank for and how much it has cost me?",
        answer:
          "This information is shown within the app as soon as you start renting the power bank. The time is shown along with the exact cost it accumulates.",
      },
      {
        question: "What do I do if I am overcharged?",
        answer:
          "Please contact in-App support team and we will happily help you out.",
      },
      {
        question: "Why do I need to use my credit/debit card?",
        answer:
          "A credit/debit card is required as a form of security to encourage fair and safe usage of our services.",
      },
    ],
  },
  {
    category: "Refunds and Deposits",
    items: [
      {
        question: "How to refund my deposit?",
        answer:
          '1. Go to "Wallet page" , press "refund " button and submit. 2. Refund will be returned to the same bank account that you use to top up.',
      },
      {
        question: "If I am issued a refund how long will it take?",
        answer:
          "In the case of a reversal customer won't see a refund credit on their statement— you will just see the original authorisation drop off their statement entirely after a few days. There will be no payment , and no refund. It'll appear as if the whole transaction never happened. Your bank should be able to confirm this for them. Depending on your card issuer, the original charge will disappear from pending charges 7 working days later.",
      },
    ],
  },
  {
    category: "App and Technical Issues",
    items: [
      {
        question:
          "I have not received a verification code for the app. What should I do?",
        answer:
          "This relies on your phone having enough mobile signal to receive it. You may need to step into a better signal range. Otherwise please ensure that you have entered a correct mobile number. If you are using email, please remember to check junk mail. If nothing else works, then contact in-App support team and we will help get an account setup for you.",
      },
      {
        question: "The App is not working. What should I do?",
        answer:
          "You can first try to refresh your app. If this does not work please delete and re-install the app. If this doesn't help, contact the support team e-mail: ichargebgc@gmail.com and we will help you out!",
      },
    ],
  },
  {
    category: "Power Bank Usage",
    items: [
      {
        question: "How do you check the charge level of the power bank?",
        answer:
          "Simply press the button on the front of the power bank and the Led indicators will reflect the level of power",
      },
    ],
  },
];

export default function FullScreenResponsiveFAQAccordion() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  return (
    <div className="flex h-full flex-col md:p-8">
      <section className="grid h-[60vh] w-full">
        <div className="absolute inset-0 h-[60vh] w-full bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-center brightness-[30%]" />

        <div className="relative mx-auto flex max-w-3xl flex-col place-content-center text-center text-white">
          <h1 className="text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-6xl">
            CUSTOMER SERVICE
          </h1>
          <p className="mb-6 text-base sm:mb-8 sm:text-lg">
            Use the form below to send us an email and we will respond within 12
            hours. If you need an immediate answer, our Customer Service team is
            just a click away, chat with us!
          </p>
          <Button
            variant={"custombutton"}
            className="h-12 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:px-6 sm:py-3 sm:text-lg"
          >
            Chat with Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>
      <Label className="mb-6 text-center text-3xl font-bold md:text-4xl lg:mb-10 lg:text-5xl">
        FREQUENTLY ASKED QUESTIONS
      </Label>

      <div className="mb-6 flex flex-wrap justify-center gap-2 lg:mb-10">
        {faqData.map((category) => (
          <Label className="font-bold">
            <button
              key={category.category}
              className={`rounded-full px-3 py-2 text-sm transition-colors duration-200 md:px-4 md:py-2 md:text-base lg:text-lg ${
                activeCategory === category.category
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-gray-800 hover:bg-green-200"
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          </Label>
        ))}
      </div>

      <div className="mb-28 h-[40vh] flex-grow">
        {faqData.map(
          (category) =>
            activeCategory === category.category && (
              <Accordion
                key={category.category}
                type="single"
                collapsible
                className="container relative mx-auto space-y-2"
              >
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="rounded-lg bg-green-500 px-4 py-3 text-left text-base hover:bg-green-600 md:text-lg lg:text-xl">
                      <div className="flex w-full items-center justify-between">
                        <Label className="text-base font-semibold">
                          {item.question}
                        </Label>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mt-1 rounded-lg border-2 border-green-300 bg-white px-4 py-3 text-sm md:text-base lg:text-lg">
                      <Label className="text-base">{item.answer}</Label>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ),
        )}
      </div>
    </div>
  );
}
