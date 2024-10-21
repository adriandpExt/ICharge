import { ReactElement } from "react";
//import WorkInProgress from "../workinprogress";
import { PageContainer } from "@/components";
import { SumVal } from "./utils";
import SummaryCard from "./component/SumCard";
import bgSide from "@/assets/modern-man-using-smartphone-city-2.png";

const About = (): ReactElement => {
  return (
    <main>
      <PageContainer>
        {SumVal.map((data, index) => (
          <SummaryCard
            stepSummary={data}
            sideBg={bgSide}
            key={index}
            isFlipped={index === 1 ? true: false} />
        ))}
      </PageContainer>
    </main>
  );
};

export default About;
