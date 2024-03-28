import { GetCharacterImageUrlById } from "@/actions/getCharacterImageUrlById";
import SectionWrapper from "./section-wrapper";
import { StatsProps } from "@/lib/interface";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { GetCharacterById } from "@/actions/getCharacterById";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Stats: React.FC<StatsProps> = async ({ characterId }) => {
  const character = await GetCharacterById(characterId);
  const url = await GetCharacterImageUrlById(characterId);

  const stats = [
    { label: "名前", value: character.name },
    { label: "称号", value: character.title },
    { label: "国", value: character.Regions.japanese },
    { label: "所属", value: character.affiliation },
    { label: "レア度", value: character.star },
    { label: "武器種", value: character.WeaponTypes.japanese },
    { label: "神の目", value: character.Visions.japanese },
    { label: "誕生日", value: character.birthday },
    { label: "命ノ星座", value: character.constellation },
    { label: "説明", value: character.description },
  ];

  return (
    <SectionWrapper headerTitle="基本情報" id={character.id}>
      <div className="flex space-x-2">
        <Avatar className="basis-1/2">
          <AvatarImage
            src={url.gacha}
            className="object-cover object-center aspect-auto"
          />
          <AvatarFallback>{url.characterId}</AvatarFallback>
        </Avatar>
        <Table>
          <TableBody>
            {stats.map((stat) => (
              <TableRow key={stat.label}>
                <TableCell className="text-nowrap">{stat.label}</TableCell>
                <TableCell>{stat.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SectionWrapper>
  );
};

export default Stats;
