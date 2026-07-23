import { useEffect } from "react";
import { IIScreenProduct } from "../type";
import { Dialog, DialogContent } from "@/components/dialog/Dialog";
import { Separator } from "@radix-ui/react-separator";
import { t } from "i18next";
import LocalizationKey from "@/i18n/key";

export const ProductModal = (props: {
  item: IIScreenProduct;
  open: boolean;
  handleClose: () => void;
}) => {
  const { item, open, handleClose } = props;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!item) return;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="grid h-fit w-[90%] grid-cols-1 overflow-hidden border-0 bg-[#56575A] p-20 text-center lg:w-[1024px] lg:grid-cols-2"
        style={{ borderRadius: "2.5rem" }}
      >
        <img
          src={item.img}
          className="relative row-span-2 h-[250px] w-[100%] object-contain md:h-[307.5px] lg:top-[20%]"
        />

        <div className="flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <h1 className="font-staatliches text-4xl font-bold tracking-wider text-white md:text-5xl">
              {item.name}
            </h1>

            <h2 className="font-poppins font-semibold text-white">
              {t(item.desc)}
            </h2>
          </div>

          <Separator className="hidden rounded-2xl border-2 border-white lg:block" />

          <div className="hidden space-y-3 text-start lg:block">
            <p className="font-poppins text-white">
              <span className="font-poppins font-bold text-white">{t(LocalizationKey.iScreen.productOverview.productOverviewHeight)}:</span>{" "}
              {item.specs.height}
            </p>

            <p className="font-poppins text-white">
              <span className="font-poppins font-bold text-white">{t(LocalizationKey.iScreen.productOverview.productOverviewWidth)}:</span>{" "}
              {item.specs.width}
            </p>

            <ul className="list-inside list-disc">
              {item.specs.supportedFormats.map((item, ids) => (
                <li key={ids} className="font-poppins text-white">
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
