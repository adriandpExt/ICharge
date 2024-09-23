import { Card, CardContent } from "@/components/ui/card";
import { TagIcon, KeyIcon, Lock } from "lucide-react";

export default function Component() {
  return (
    <div className="w-full bg-green-50">
      <div className="container mx-auto p-6 md:p-12">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          WE OFFER SERVICES THAT FITS YOUR NEEDS
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="bg-green relative shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-500 lg:block" />
              <div className="absolute -bottom-9 right-16 hidden h-20 w-20 translate-x-1/2 transform rounded-lg bg-green-500 lg:block" />
              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <TagIcon className="h-8 w-8 text-white" />
              </div>
              <p className="text-center font-semibold">Free Use of Equipment</p>
            </CardContent>
          </Card>

          <Card className="bg-green relative shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute right-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-full bg-green-500 lg:block" />
              <div className="absolute -bottom-9 left-4 hidden h-20 w-20 translate-x-1/2 transform rounded-full bg-green-500 lg:block" />

              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <p className="text-center font-semibold">Sale of Equipment</p>
            </CardContent>
          </Card>

          <Card className="bg-green relative shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-500 lg:block" />
              <div className="absolute -bottom-9 right-16 hidden h-20 w-20 translate-x-1/2 transform rounded-lg bg-green-500 lg:block" />

              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <KeyIcon className="h-8 w-8 text-white" />
              </div>
              <p className="text-center font-semibold">Lease of Equipment</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
