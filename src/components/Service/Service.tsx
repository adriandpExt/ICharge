import Maya from "../../../public/maya.svg";
import PLDT from "../../../public/pldt.svg";

const Service = () => {
  return (
    <div className="h-screen py-5">
      <h2 className="text-md mb-8 text-center font-bold text-primary lg:text-xl">
        Partners and Businesses
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <img
          src={Maya}
          alt="Maya Pay"
          className="h-16 object-contain md:h-24"
        />
        <img src={PLDT} alt="PLDT" className="h-16 object-contain md:h-24" />
      </div>
    </div>
  );
};

export default Service;
