import { ReactElement } from "react";
import { PageContainer } from "@/components";
import NotFound from "@/assets/404.png";

const ErrorScreen = (): ReactElement => {
  return (
    <PageContainer className="flex h-screen flex-col items-center justify-center text-center">
      <img src={NotFound} alt="404 Not Found" className="mb-4" />
    </PageContainer>
  );
};

export default ErrorScreen;
