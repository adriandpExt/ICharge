import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import LocalizationKey from "@/i18n/key";
import { TagIcon, KeyIcon, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Component() {
  const { t } = useTranslation();
  return (
    <section className="w-full pb-32">
      <div className="container mx-auto flex flex-col p-6 md:p-12">
        <Label variant={"heading1"} className="mb-20 text-center">
          {t(LocalizationKey.home.weOfferServicesThatFitsYourNeeds)}
        </Label>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="bg-green relative border-0 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="absolute -bottom-9 right-16 hidden h-24 w-24 translate-x-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <TagIcon className="h-16 w-16 text-white" />
              </div>
              <Label className="text-center text-2xl font-semibold">
                {t(LocalizationKey.home.freeUseOfEquipment)}
              </Label>
            </CardContent>
          </Card>

          <Card className="bg-green relative border-0 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute right-6 top-0 hidden h-24 w-24 -translate-y-1/2 transform rounded-full bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="absolute -bottom-9 left-4 hidden h-20 w-20 translate-x-1/2 transform rounded-full bg-green-200 bg-gradient-to-r from-green-300 lg:block" />

              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <Lock className="h-16 w-16 text-white" />
              </div>
              <Label className="text-center text-2xl font-semibold">
                {t(LocalizationKey.home.saleOfEquipment)}
              </Label>
            </CardContent>
          </Card>

          <Card className="bg-green relative border-0 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-md">
            <CardContent className="flex flex-col items-center p-6 pt-12">
              <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />
              <div className="absolute -bottom-9 right-16 hidden h-24 w-24 translate-x-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />

              <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
                <KeyIcon className="h-16 w-16 text-white" />
              </div>
              <Label className="text-center text-2xl font-semibold">
                {t(LocalizationKey.home.leaseOfEquipment)}
              </Label>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
