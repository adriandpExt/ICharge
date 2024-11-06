import LocalizationKey from "@/i18n/key";
import { CertImage, SumStep } from "./types";
import Image1 from "@/assets/about/certifications/1.png";
import Image2 from "@/assets/about/certifications/2.png";
import Image3 from "@/assets/about/certifications/3.png";
import Image4 from "@/assets/about/certifications/4.png";
import Image5 from "@/assets/about/certifications/5.png";
import Image6 from "@/assets/about/certifications/6.png";
import Image7 from "@/assets/about/certifications/7.png";

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
        imageHeight: "140px",
        imageWidth: "140px"
    }, 
    {
        imageName: Image2,
        imageHeight: "228px",
        imageWidth: "228px"
    }, 
    {
        imageName: Image3,
        imageHeight: "190px",
        imageWidth: "189px"
    },
    {
        imageName: Image4,
        imageHeight: "247px",
        imageWidth: "247px"
    },
    {
        imageName: Image5,
        imageHeight: "286px",
        imageWidth: "286px"
    },
    {
        imageName: Image6,
        imageHeight: "364px",
        imageWidth: "364px"
    },
    {
        imageName: Image7,
        imageHeight: "404px",
        imageWidth: "404px"
    }
]