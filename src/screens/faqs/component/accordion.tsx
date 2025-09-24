import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const Accordion = ({ ...props }: ComponentProps<typeof Root>) => {
  return <Root data-slot="accordion" {...props} />;
};

const AccordionItem = ({
  className,
  ...props
}: ComponentProps<typeof Item>) => {
  return (
    <Item
      data-slot="accordion-item"
      className={cn("border-b", className)}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Trigger>) => {
  return (
    <Header className="flex">
      <Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}

        <ChevronDownIcon className="pointer-events-none size-8 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
      </Trigger>
    </Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Content>) => {
  return (
    <Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
