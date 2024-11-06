import LocalizationKey from "@/i18n/key";
import { CertImage, SumStep } from "./types";
import Image1 from "@/assets/about/certifications/1.1.png";
import Image2 from "@/assets/about/certifications/2.1.png";
import Image3 from "@/assets/about/certifications/3.1.png";
import Image4 from "@/assets/about/certifications/4.1.png";
import Image5 from "@/assets/about/certifications/5.1.png";
import Image6 from "@/assets/about/certifications/6.1.png";
import Image7 from "@/assets/about/certifications/7.1.png";

export const SumVal: SumStep[] = [
    {
        header: LocalizationKey.about.summaryHead1,
        desc: LocalizationKey.about.summaryDesc1,
        list: [
            LocalizationKey.about.keyFeaturesList11,
            LocalizationKey.about.keyFeaturesList12,
            LocalizationKey.about.keyFeaturesList13
        ]
    },
    {
        header: LocalizationKey.about.summaryHead2,
        desc: LocalizationKey.about.summaryDesc2,
        list: [
            LocalizationKey.about.keyFeaturesList21,
            LocalizationKey.about.keyFeaturesList22,
            LocalizationKey.about.keyFeaturesList23
        ]
    },
    {
        header: LocalizationKey.about.summaryHead3,
        desc: LocalizationKey.about.summaryDesc3,
        list: [
            LocalizationKey.about.keyFeaturesList31,
            LocalizationKey.about.keyFeaturesList32,
            LocalizationKey.about.keyFeaturesList33
        ]
    },

]

export const Certs: CertImage[] = [ 
    {
        imageName: Image1,
        imageHeight: "70px",
        imageWidth: "70px"
    }, 
    {
        imageName: Image2,
        imageHeight: "114px",
        imageWidth: "114px"
    }, 
    {
        imageName: Image3,
        imageHeight: "95px",
        imageWidth: "94.5px"
    },
    {
        imageName: Image4,
        imageHeight: "123.5px",
        imageWidth: "123.5px"
    },
    {
        imageName: Image5,
        imageHeight: "143px",
        imageWidth: "143px"
    },
    {
        imageName: Image6,
        imageHeight: "91px",
        imageWidth: "91px"
    },
    {
        imageName: Image7,
        imageHeight: "101px",
        imageWidth: "101px"
    }
]