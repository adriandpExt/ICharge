import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
      <CardContent className="relative z-10 space-y-2 p-0">
        <CardTitle>
          <h2 className="font-lexendDeca text-2xl font-bold leading-tight text-white">
            {title}
          </h2>
        </CardTitle>
        <CardDescription className="font-poppins text-white">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="relative z-10 p-0 pt-4">
        <Button className="border-[1px] border-green-500 bg-black text-white transition-colors hover:bg-green-500 hover:text-white">
          Learn More <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardSectors;
