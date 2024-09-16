import { motion } from "framer-motion";

import { PageContainer } from "@/components";

import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cardItems } from "./utils";

const HowTo = () => {
  return (
    <PageContainer className="flex flex-col text-center">
      <Label className="font-sans text-4xl font-bold">
        How To use <span className="text-green-500">i</span>charge
      </Label>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        Step-by-step guide to use icharge
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map(({ title, description, icons }, ids) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            key={ids}
          >
            <Card className="bg-muted/50 text-card-foreground shadow-sm">
              <CardHeader className="flex flex-col space-y-1.5 p-6">
                <CardTitle className="grid place-items-center gap-4 text-2xl font-semibold leading-none tracking-tight">
                  {icons}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
};

export default HowTo;
