import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CardSectorsProps {
  title: string;
  description: string;
}

const CardSectors = (props: CardSectorsProps) => {
  const { title, description } = props;

  return (
    <Card className="relative flex h-[400px] w-full flex-col justify-end overflow-hidden border-green-500 bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-center p-5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/50 to-[#033800]" />

      <CardHeader className="relative z-10 space-y-2 p-0">
        <CardTitle className="text-2xl leading-tight text-white">
          {title}
        </CardTitle>

        <CardDescription className="font-poppins text-white">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="relative z-10 p-0 pt-4">
        <Button className="border-[1px] border-green-500 bg-black text-white transition-colors hover:bg-green-500 hover:text-white">
          Learn More <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardSectors;
