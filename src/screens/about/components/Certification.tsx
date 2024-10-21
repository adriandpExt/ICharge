import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";
import { certificationValues } from "../utils";

const Certification = (): ReactElement => {
  return (
    <PageContainer className="space-y-10">
      <div className="flex flex-col space-y-5 text-center">
        <Label variant="title">
          Certifications and Standards Compliance for iCharge Equipment
        </Label>
        <Label variant="subtitle">
          Our iCharge equipment is built to the highest standards, ensuring
          quality, safety, and environmental responsibility. Each unit comes
          with certifications that reflect our commitment to reliability and
          compliance with international standards:
        </Label>
      </div>
      {certificationValues.map(({ title, description, benefit }, index) => (
        <div className="space-y-5" key={index}>
          <Label variant="title">{title}</Label>
          <div className="flex flex-col space-y-3">
            <Label variant="subtitle">
              <span className="font-poppins font-semibold">Description: </span>
              {description}
            </Label>
            <Label variant="subtitle">
              <span className="font-poppins font-semibold">Benefit: </span>
              {benefit}
            </Label>
          </div>
        </div>
      ))}
    </PageContainer>
  );
};

export default Certification;
