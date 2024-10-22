import { ReactElement } from "react";

import { ChevronRight } from "lucide-react";

import img1 from "@/assets/stayPoweredLogo.png";
import bgImg from "@/assets/modern-man-using-smartphone-city-2.png";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Banner, PageContainer } from "@/components";

import { InquiryForm } from "./components";

const PartnerWithUs = (): ReactElement => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner title="EMPOWER YOUR BUSINESS">
        <Label className="text-base text-white">
          Boost your business and keep your customers connected effortlessly.
        </Label>
        <Label className="text-base text-white">
          Partner with iCharge for seamless, reliable charging solutions.
        </Label>

        <Button
          onClick={() => scrollToSection("inquiryForm")}
          variant={"custombutton"}
          className="group h-10 w-32 items-center bg-white text-green-600 hover:text-white"
        >
          Contact Us
          <ChevronRight className="text-green-600 group-hover:text-white" />
        </Button>
      </Banner>

      <PageContainer className="flex flex-col gap-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div>
            <img
              src={img1}
              alt="Convenience"
              className="h-96 w-full text-green-600"
            />
          </div>

          <div>
            <Label variant={"banner"} className="text-green-600">
              WHY PARTNER WITH US?
            </Label>

            <div className="flex flex-col gap-5">
              <Label className="text-base">
                Quanta Dance Inc. provides more than just charging stations-we
                offer a comprehensive service that enhances the customer
                experience while reducing operational burdens.
              </Label>

              <Label className="text-base">
                Our focus on convenience, advanced global payment systems, and
                sustainability ensures that your business will benefit will
                benefit from an innovative, customer-centric solution.
              </Label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
          <div>
            <img
              src={img1}
              alt="Convenience"
              className="h-96 w-full text-green-600"
            />
          </div>

          <div>
            <Label variant={"banner"} className="text-green-600">
              JOIN US
            </Label>

            <div className="flex flex-col gap-5">
              <Label className="text-base">
                At Quanta Dance Inc., we are powering the future by providing
                innovative and sustainable charging solutions.
              </Label>

              <Label className="text-base">
                Together, we can ensure that everyone stays connected, charged,
                and ready for any adventure-locally and globally.
              </Label>
            </div>
          </div>
        </div>
      </PageContainer>

      <section className="relative h-full w-full pb-16">
        <img
          src={bgImg}
          alt="Background"
          className="absolute inset-0 h-[90vh] w-full bg-cover brightness-50"
        />

        <div className="absolute inset-0 h-[90vh] bg-gradient-to-tr from-[#33E72A] to-transparent" />

        <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-32">
          <Label variant={"banner"} className="text-white">
            Want to Partner With Us?
          </Label>
          <Label variant={"banner"} className="text-white">
            Get in Touch!
          </Label>
        </div>

        <InquiryForm />
      </section>
    </>
  );
};

export default PartnerWithUs;
