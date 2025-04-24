import { ReactElement, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "@/components/svg-icons";
import { Label } from "@/components/ui/label";
import QRLogo from "@/assets/businessCard/qr_logo.png";
import Lottie from "lottie-light-react";
import NotFound from "@/assets/lottie/404.json";
import QRCodeStyling from "qr-code-styling";
import { businessCardInfo } from "@/screens/business-card/utils";

const QRGenerator = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const qrRef = useRef<HTMLDivElement | null>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  const card = businessCardInfo.find((card) => card.id === id);
  const qrValue = `${window.location.origin}${card?.qrLink || ""}`;

  useEffect(() => {
    if (!card || !qrRef.current) return;

    qrRef.current.innerHTML = "";

    qrCode.current = new QRCodeStyling({
      width: 260,
      height: 260,
      data: qrValue,
      image: QRLogo,
      dotsOptions: {
        color: "#000",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4,
        imageSize: 0.7,
      },
    });

    qrCode.current.append(qrRef.current);
  }, [card, qrValue]);

  const handleDownload = () => {
    qrCode.current?.download({
      name: `${card?.name || "QR_Code"}`,
      extension: "png",
    });
  };

  if (!card) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Lottie
          animationData={NotFound}
          loop
          className="h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]"
        />
      </div>
    );
  }

  return (
    <div className="flex-col overflow-x-hidden">
      <div className="h-[100px] w-screen bg-gradient-to-b from-[#044F00] to-[#078E00]">
        <Button variant="icon" className="mx-3 mt-8 space-x-10">
          <SvgIcons name="ic_icharge_white" size={130} />
          <SvgIcons name="stay_powered_stay_connected" size={130} />
        </Button>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <div ref={qrRef} />
        <Label className="mt-4 text-center text-2xl">{card.name}</Label>
        <div className="mt-6">
          <Button onClick={handleDownload}>Download</Button>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
