import Lottie from "lottie-react";
import wipAnimation from "@/assets/wip.json";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WorkInProgress() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="flex h-screen flex-col items-center text-center">
      <Lottie
        animationData={wipAnimation}
        loop={true}
        className="h-[700px] w-[700px]"
      />
      <h2 className="mt-4 text-2xl font-bold">Under Construction</h2>
      <p className="mt-2 text-muted-foreground">
        We're currently working on this feature. Check back soon!
      </p>
      <Button
        onClick={handleGoHome}
        className="mt-8 h-12 w-32"
        variant="default"
      >
        <Home className="mr-2 h-4 w-4" />
        Go Home
      </Button>
    </div>
  );
}
