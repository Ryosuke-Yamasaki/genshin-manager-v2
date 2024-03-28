import { SectionWrapperProps } from "@/lib/interface";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const SectionWrapper = ({ children, headerTitle, id }: SectionWrapperProps) => {
  return (
    <AccordionItem id={id} value={id} className="w-full scroll-m-4">
      <AccordionTrigger className="text-xl">{headerTitle}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default SectionWrapper;
