import wipAnimation from "@/assets/wip.json";
import Lottie from "lottie-light-react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkInProgress = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex h-full flex-col items-center p-4 text-center">
      <Lottie
        animationData={wipAnimation}
        loop={true}
        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px]"
      />
      <h2 className="mt-4 text-xl font-bold md:text-2xl">Under Construction</h2>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">
        We're currently working on this feature. Check back soon!
      </p>
      <Button
        onClick={handleGoHome}
        className="mt-8 h-10 w-28 md:h-12 md:w-32"
        variant="default"
      >
        <Home className="mr-2 h-4 w-4" />
        Go Home
      </Button>
    </div>
  );
};

export default WorkInProgress;
