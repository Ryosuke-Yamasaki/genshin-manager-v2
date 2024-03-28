import SectionWrapper from "./section-wrapper";
import { ProfileProps } from "@/lib/interface";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Profile: React.FC<ProfileProps> = async ({ character, url, title }) => {
  const items = [
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
    <SectionWrapper headerTitle={title.value} id={title.label}>
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
            {items.map((item) => (
              <TableRow key={item.label}>
                <TableCell className="text-nowrap">{item.label}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SectionWrapper>
  );
};

export default Profile;
