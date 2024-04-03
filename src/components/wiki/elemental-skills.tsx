import { TalentsProps } from "@/lib/interface";
import SectionWrapper from "./section-wrapper";
import { GetElementalSkillById } from "@/actions/getElementalSkillById";
import parse from "html-react-parser";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { GetElementalSkillTextDataById } from "@/actions/getElementalSkillDataById";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormatPercent } from "@/lib/utils";

const ElementalSkill: React.FC<TalentsProps> = async ({
  characterId,
  title,
}) => {
  const elementalSkill = await GetElementalSkillById(characterId);
  const data = await GetElementalSkillTextDataById(characterId);

  const levels = [
    { value: "Lv.1", label: "level1" },
    { value: "Lv.2", label: "level2" },
    { value: "Lv.3", label: "level3" },
    { value: "Lv.4", label: "level4" },
    { value: "Lv.5", label: "level5" },
    { value: "Lv.6", label: "level6" },
    { value: "Lv.7", label: "level7" },
    { value: "Lv.8", label: "level8" },
    { value: "Lv.9", label: "level9" },
    { value: "Lv.10", label: "level10" },
    { value: "Lv.11", label: "level11" },
    { value: "Lv.12", label: "level12" },
    { value: "Lv.13", label: "level13" },
    { value: "Lv.14", label: "level14" },
    { value: "Lv.15", label: "level15" },
  ];

  return (
    <SectionWrapper headerTitle={title.value} id={title.label}>
      <div className="divide-y">
        <div className="flex items-center divide-x">
          <Avatar className="h-24 w-24 p-2">
            <AvatarImage src={elementalSkill.iconUrl} />
            <AvatarFallback>{elementalSkill.characterId}</AvatarFallback>
          </Avatar>
          <div className="pl-2 py-2 space-y-2">
            <div className="text-xl">{elementalSkill.title}</div>
            <div>{parse(elementalSkill.description)}</div>
          </div>
        </div>
        <div className="pb-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead />
                {levels.map((level) => (
                  <TableHead key={level.label} className="text-center">
                    {level.value}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data) => (
                <TableRow key={data.id} className="text-center">
                  <TableCell className="text-nowrap border-r">
                    {data.name}
                  </TableCell>
                  {levels.map((level) => (
                    <TableCell key={level.label}>{data[level.label]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ElementalSkill;
