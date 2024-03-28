import { SectionWrapperProps } from "@/lib/interface";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const SectionWrapper = ({ children, headerTitle, id }: SectionWrapperProps) => {
  return (
    <AccordionItem value={id} className="w-full">
      <AccordionTrigger className="text-xl">{headerTitle}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default SectionWrapper;
