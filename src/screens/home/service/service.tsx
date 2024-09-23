import { Card, CardContent } from "@/components/ui/card";
import { TagIcon, KeyIcon, Lock } from "lucide-react";

export default function Component() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-6 md:p-12">
        <h2 className="mb-20 text-center text-2xl font-bold md:text-3xl">
          WE OFFER SERVICES THAT FITS YOUR NEEDS
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="bg-green relative border-0 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="absolute -bottom-9 right-16 hidden h-24 w-24 translate-x-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <TagIcon className="h-16 w-16 text-white" />
              </div>
              <p className="text-center text-2xl font-semibold">
                Free Use of Equipment
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green relative border-0 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute right-6 top-0 hidden h-24 w-24 -translate-y-1/2 transform rounded-full bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="absolute -bottom-9 left-4 hidden h-20 w-20 translate-x-1/2 transform rounded-full bg-green-200 bg-gradient-to-r from-green-300 lg:block" />

              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <Lock className="h-16 w-16 text-white" />
              </div>
              <p className="text-center text-2xl font-semibold">
                Sale of Equipment
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green relative border-0 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="absolute -bottom-9 right-16 hidden h-24 w-24 translate-x-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />

              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <KeyIcon className="h-16 w-16 text-white" />
              </div>
              <p className="text-center text-2xl font-semibold">
                Lease of Equipment
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
