import { PageContainer, SvgIcons } from "@/components";
// import Maya from "../../../public/maya.svg";
// import PLDT from "../../../public/pldt.svg";

const Service = () => {
  return (
    <PageContainer>
      <h2 className="text-md mb-8 text-center font-bold text-primary lg:text-xl">
        Partners and Businesses
      </h2>

      <div className="flex flex-wrap items-center justify-center">
        <SvgIcons name="ic_maya" size={400} />
        <SvgIcons name="ic_pldt" size={400} />
      </div>
    </PageContainer>
  );
};

export default Service;
