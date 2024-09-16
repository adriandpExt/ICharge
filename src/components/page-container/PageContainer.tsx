import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface PageContainerProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const PageContainer = ({
  children,
  id,
  className,
}: PageContainerProps) => {
  return (
    <section className={cn("mt-10 h-full p-10", className)} id={id}>
      {children}
    </section>
  );
};

export default PageContainer;
