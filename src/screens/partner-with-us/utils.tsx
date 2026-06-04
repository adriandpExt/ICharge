import { DataCardProps, IMarketing, ICustomer } from "./type";

import { z } from "zod";

import LocalizationKey from "@/i18n/key";

import ichargeModel from "@/assets/ichargemodel.png";
import joinUs from "@/assets/pwu-join-us.svg";

import PitchDeckPage1 from '@/assets/pitch_deck/pitch-deck-1.png';
import PitchDeckPage2 from '@/assets/pitch_deck/pitch-deck-2.png';
import PitchDeckPage3 from '@/assets/pitch_deck/pitch-deck-3.png';
import PitchDeckPage4 from '@/assets/pitch_deck/pitch-deck-4.png';
import PitchDeckPage5 from '@/assets/pitch_deck/pitch-deck-5.png';
import PitchDeckPage6 from '@/assets/pitch_deck/pitch-deck-6.png';
import PitchDeckPage7 from '@/assets/pitch_deck/pitch-deck-7.png';
import PitchDeckPage8 from '@/assets/pitch_deck/pitch-deck-8.png';
import PitchDeckPage9 from '@/assets/pitch_deck/pitch-deck-9.png';
import PitchDeckPage10 from '@/assets/pitch_deck/pitch-deck-10.png';
import PitchDeckPage11 from '@/assets/pitch_deck/pitch-deck-11.png';
import PitchDeckPage12 from '@/assets/pitch_deck/pitch-deck-12.png';
import PitchDeckPage13 from '@/assets/pitch_deck/pitch-deck-13.png';
import PitchDeckPage14 from '@/assets/pitch_deck/pitch-deck-14.png';
import PitchDeckPage15 from '@/assets/pitch_deck/pitch-deck-15.png';
import PitchDeckPage16 from '@/assets/pitch_deck/pitch-deck-16.png';
import PitchDeckPage17 from '@/assets/pitch_deck/pitch-deck-17.png';
import PitchDeckPage18 from '@/assets/pitch_deck/pitch-deck-18.png';

export const data: DataCardProps[] = [
  {
    imgSrc: ichargeModel,
    title: LocalizationKey.partnerWithUs.whyPartnerWithUs,
    list: [
      LocalizationKey.partnerWithUs.whyPartnerWithUsDesc1,
      LocalizationKey.partnerWithUs.whyPartnerWithUsDesc2,
    ],
  },
  {
    imgSrc: joinUs,
    title: LocalizationKey.partnerWithUs.joinUs,
    list: [
      LocalizationKey.partnerWithUs.joinUsDesc1,
      LocalizationKey.partnerWithUs.joinUsDesc2,
    ],
  },
];

export const pitchDeck = [
  PitchDeckPage1,
  PitchDeckPage2,
  PitchDeckPage3,
  PitchDeckPage4,
  PitchDeckPage5,
  PitchDeckPage6,
  PitchDeckPage7,
  PitchDeckPage8,
  PitchDeckPage9,
  PitchDeckPage10,
  PitchDeckPage11,
  PitchDeckPage12,
  PitchDeckPage13,
  PitchDeckPage14,
  PitchDeckPage15,
  PitchDeckPage16,
  PitchDeckPage17,
  PitchDeckPage18,
]

export const inquiryDefaultValues: IMarketing = {
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
  phoneNumber: z.string().min(1, "Phone number is required"),
  content: z.string().min(1, "Content is required"),
}) as z.ZodType<IMarketing>;

export const customerDefaultValues: Partial<ICustomer> = {
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
  content: "",
  rentalLocation: "",
  rentalTime: "",
  returnLocation: "",
  returnTime: "",
};

export const customerFormSchema = z.object({
  firstname: z.string().min(1, "First name is requried"),
  lastname: z.string().min(1, "Last name is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z.string().min(1, "Phone number is required"),
  content: z.string().min(1, "Content is required"),
  rentalLocation: z.string().min(1, "Rental Location is required"),
  rentalTime: z.string().min(1, "Rental Time is required"),
  returnLocation: z.string().min(1, "Return Location is required"),
  returnTime: z.string().min(1, "Return Time is required"),
}) as z.ZodType<Partial<ICustomer>>;
