import LocalizationKey from "@/i18n/key";
import { CertImage, CertImageMobile, SumStep } from "./types";
import Summary1 from "@/assets/about/SummaryImages/advanced.png"
import Summary2 from "@/assets/about/SummaryImages/inhouse.png"
import Summary3 from "@/assets/about/SummaryImages/proprietary.png"
import Summary1Mobile from "@/assets/about/SummaryImages/advanced mobile.png"
import Summary2Mobile from "@/assets/about/SummaryImages/inhouse mobile.png"
import Summary3Mobile from "@/assets/about/SummaryImages/proprietary mobile.png"
import Image1 from "@/assets/about/certifications/1.1.png";
import Image2 from "@/assets/about/certifications/2.1.png";
import Image3 from "@/assets/about/certifications/3.2.png";
import Image4 from "@/assets/about/certifications/4.1.png";
import Image5 from "@/assets/about/certifications/5.1.png";
import Image6 from "@/assets/about/certifications/6.1.png";
import Image7 from "@/assets/about/certifications/7.2.1.png";

export const SumVal: SumStep[] = [
    {
        SumImage: Summary1,
        SumImageMobile: Summary1Mobile,
        header: LocalizationKey.about.summaryHead1,
        desc: LocalizationKey.about.summaryDesc1,
        list: [
            LocalizationKey.about.keyFeaturesList11,
            LocalizationKey.about.keyFeaturesList12,
            LocalizationKey.about.keyFeaturesList13
        ]
    },
    {
        SumImage: Summary2,
        SumImageMobile: Summary2Mobile,
        header: LocalizationKey.about.summaryHead2,
        desc: LocalizationKey.about.summaryDesc2,
        list: [
            LocalizationKey.about.keyFeaturesList21,
            LocalizationKey.about.keyFeaturesList22,
            LocalizationKey.about.keyFeaturesList23
        ]
    },
    {
        SumImage: Summary3,
        SumImageMobile: Summary3Mobile,
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
        imageHeight: "130px",
        imageWidth: "130px"
    }, 
    {
        imageName: Image2,
        imageHeight: "145px",
        imageWidth: "145px"
    }, 
    {
        imageName: Image3,
        imageHeight: "155px",
        imageWidth: "155px"
    },
    {
        imageName: Image4,
        imageHeight: "125px",
        imageWidth: "125px"
    },
    {
        imageName: Image5,
        imageHeight: "146px",
        imageWidth: "146px"
    },
    {
        imageName: Image6,
        imageHeight: "144px",
        imageWidth: "144px"
    },
    {
        imageName: Image7,
        imageHeight: "221px",
        imageWidth: "221px"
    }
]

export const CertsMobileTopRow: CertImageMobile [] = [
    {
        imageName: Image1,
        imageHeight: "50px",
        imageWidth: "50px"
    }, 
    {
        imageName: Image2,
        imageHeight: "50px",
        imageWidth: "60px"
    }, 
    {
        imageName: Image3,
        imageHeight: "50px",
        imageWidth: "60px"
    },
    {
        imageName: Image4,
        imageHeight: "50px",
        imageWidth: "50px"
    },
]

export const CertsMobileBottomRow: CertImageMobile [] = [
    {
        imageName: Image5,
        imageHeight: "50px",
        imageWidth: "50px"
    }, 
    {
        imageName: Image6,
        imageHeight: "50px",
        imageWidth: "50px"
    }, 
    {
        imageName: Image7,
        imageHeight: "100px",
        imageWidth: "100px"
    },
]