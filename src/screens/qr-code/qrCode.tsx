import { ReactElement, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "@/components/svg-icons";
import { QRCodeCanvas } from "qrcode.react";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-light-react";
import NotFound from "@/assets/lottie/404.json";

import { businessCardInfo } from "@/screens/business-card/utils";

const QRGenerator = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const card = businessCardInfo.find((card) => card.id === id);

  if (!card) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Lottie
          animationData={NotFound}
          loop={true}
          alt="404 Not Found"
          className="h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]"
        />
      </div>
    );
  }

  const qrValue = `${window.location.origin}${card.qrLink}`;

  const handleDownload = () => {
    const canvas = canvasContainerRef.current?.querySelector("canvas");
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `${card.name}_QR.png`;
    link.click();
  };

  return (
    <div className="flex-col overflow-x-hidden">
      <div className="h-[100px] w-screen bg-gradient-to-b from-[#044F00] to-[#078E00]">
        <Button variant="icon" className="mt-8 space-x-16">
          <SvgIcons name="ic_icharge_white" size={130} />
          <SvgIcons name="stay_powered_stay_connected" size={130} />
        </Button>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <div
          ref={canvasContainerRef}
          className="inline-block border-4 border-[#078E00] p-4"
        >
          <QRCodeCanvas value={qrValue} size={200} />
        </div>
        <Label className="mt-4 text-center text-2xl">{card.name}</Label>
        <div className="mt-6">
          <Button onClick={handleDownload}>Download</Button>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
