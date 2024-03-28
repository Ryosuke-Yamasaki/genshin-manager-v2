import Link from "next/link";
import SectionWrapper from "./section-wrapper";
import { ContentsProps } from "@/lib/interface";

const Contents: React.FC<ContentsProps> = ({ contents, title }) => {
  return (
    <SectionWrapper headerTitle={title.value} id={title.label}>
      <ul className="list-disc list-inside">
        <li>
          <Link href={`#${contents[1].label}`}>{contents[1].value}</Link>
        </li>
        <li>
          <Link href={`#${contents[2].label}`}>{contents[2].value}</Link>
        </li>
        <li>
          <Link href={`#${contents[3].label}`}>{contents[3].value}</Link>
        </li>
        <ul className="list-disc list-inside indent-6">
          <li>
            <Link href={`#${contents[4].label}`}>{contents[4].value}</Link>
          </li>
          <li>
            <Link href={`#${contents[5].label}`}>{contents[5].value}</Link>
          </li>
          <li>
            <Link href={`#${contents[6].label}`}>{contents[6].value}</Link>
          </li>
          <li>
            <Link href={`#${contents[7].label}`}>{contents[7].value}</Link>
          </li>
        </ul>
        <li>
          <Link href={`#${contents[8].label}`}>{contents[8].value}</Link>
        </li>
      </ul>
    </SectionWrapper>
  );
};

export default Contents;
