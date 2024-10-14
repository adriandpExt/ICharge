import { ReactElement } from "react";

import WorkInProgress from "../workinprogress";

const Services = (): ReactElement => {
  return (
    <main>
      {/* <section className="absolute inset-0 h-[65vh] w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
          <Label variant={"title"} className="text-white sm:mb-6">
            Services
          </Label>
        </div>
      </section> */}

      <WorkInProgress />
    </main>
  );
};

export default Services;
