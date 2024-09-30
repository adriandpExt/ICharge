import { Label } from "@/components/ui/label";

const sustainability = () => {
  return (
    <section>
      <div className="absolute inset-0 flex h-full w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat lg:h-[65vh]">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
          <Label className="text-3xl font-bold text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            Sustainability
          </Label>

          <Label className="text-md mb-6 text-start text-white sm:mb-8 lg:text-2xl">
            At ICharge, we are all about doing business the right way. Beyond
            offering a cutting-edge power bank sharing service, we are on a
            mission to use our influence for good. Our commitment to
            sustainability is not just a tagline; it's about making sure we run
            things responsibly and ethically in our day-to-day operations.
          </Label>
        </div>
      </div>

      <div className="h-screen text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, non esse
        totam autem eveniet voluptatibus assumenda sapiente ratione natus quo
        fuga quas maiores odit facere iusto dignissimos, officia, deleniti
        minima.
      </div>
    </section>
  );
};

export default sustainability;
