import SectionWrapper from "./section-wrapper";
import { StatsProps } from "@/lib/interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormatPercent } from "@/lib/utils";

const Stats: React.FC<StatsProps> = ({ character, title }) => {
  const headers = [
    { value: "レベル", label: "level" },
    { value: "基礎HP", label: "hp" },
    { value: "基礎攻撃力", label: "atk" },
    { value: "基礎防御力", label: "def" },
    {
      value: character.CharacterAscensionBonusStats.Stats.text,
      label: "ascension",
    },
  ];

  const levels = [
    { value: "Lv.1", label: "level1_20" },
    { value: "Lv.20", label: "level20_20" },
    { value: "Lv.20+", label: "level20_40" },
    { value: "Lv.40", label: "level40_40" },
    { value: "Lv.40+", label: "level40_50" },
    { value: "Lv.50", label: "level50_50" },
    { value: "Lv.50+", label: "level50_60" },
    { value: "Lv.60", label: "level60_60" },
    { value: "Lv.60+", label: "level60_70" },
    { value: "Lv.70", label: "level70_70" },
    { value: "Lv.70+", label: "level70_80" },
    { value: "Lv.80", label: "level80_80" },
    { value: "Lv.80+", label: "level80_90" },
    { value: "Lv.90", label: "level90_90" },
  ];

  return (
    <SectionWrapper headerTitle={title.value} id={title.label}>
      <Table className="w-fit">
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header.label}>{header.value}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {levels.map((level) => (
            <TableRow key={level.label} className="text-center">
              <TableCell className="border-r">{level.value}</TableCell>
              <TableCell>
                {character.CharacterBaseHps[level.label].toFixed(0)}
              </TableCell>
              <TableCell>
                {character.CharacterBaseAttacks[level.label].toFixed(0)}
              </TableCell>
              <TableCell>
                {character.CharacterBaseDefenses[level.label].toFixed(0)}
              </TableCell>
              <TableCell>
                {FormatPercent(
                  Number(character.CharacterAscensionBonusStats[level.label])
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionWrapper>
  );
};

export default Stats;
