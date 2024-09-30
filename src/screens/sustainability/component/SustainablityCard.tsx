import { SvgIcons } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactElement } from "react";

const SustainablityCard = (): ReactElement => {
  return (
    <Card className="h-[full] w-full rounded-xl border-0 bg-gradient-to-b from-[#495742] via-[#999999] to-[#999999] p-8">
      <div className="h-full rounded-xl border-4 border-green-300 p-5">
        <CardHeader className="flex flex-col items-center justify-center">
          <SvgIcons name="ic_lock" size={80} />
          <CardTitle className="text-center text-[20px] text-white">
            Powering Change with Joos Solar
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="list-disc space-y-2 text-[12px] text-white">
            <li className="font-poppins">
              and a greener future. We launched Joos Solar in 2023 to champion
              renewable energy
            </li>
            <li>
              Our solar solutions facilitate an affordable and seamless
              transition to clean energy.
            </li>
            <li>
              We empower homes, businesses and our existing partners to reduce
              their carbon footprint.
            </li>
          </ul>
        </CardContent>
      </div>
    </Card>
  );
};

export default SustainablityCard;
