import { Label } from "@/components/ui/label";
import { cardItems } from "./utils";

const HowTo = () => {
  return (
    <section className="container flex flex-col text-center">
      <Label className="font-sans text-4xl font-bold">
        How To use <span className="text-green-500">i</span>charge
      </Label>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        Step-by-step guide to use icharge
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map(({ title, description, icons }) => (
          <div className="rounded-lg border bg-muted/50 text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="grid place-items-center gap-4 text-2xl font-semibold leading-none tracking-tight">
                {icons}
                {title}
              </h3>
            </div>
            <div className="p-6 pt-0">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowTo;
