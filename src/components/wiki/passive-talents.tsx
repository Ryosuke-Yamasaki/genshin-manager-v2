import { PassiveTalentsProps } from "@/lib/interface";
import SectionWrapper from "./section-wrapper";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { GetPassiveTalentById } from "@/actions/getPassiveTalentById";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import parse from "html-react-parser";

const PassiveTalents: React.FC<PassiveTalentsProps> = async ({
  characterId,
  title,
}) => {
  const passiveTalents = await GetPassiveTalentById(characterId);

  return (
    <SectionWrapper headerTitle={title.value} id={title.label}>
      <Table className="w-fit">
        <TableBody>
          {passiveTalents.map((passiveTalent) => (
            <TableRow key={passiveTalent.id} className="divide-x">
              <TableCell>
                <Avatar className="h-16 w-16">
                  <AvatarImage src={passiveTalent.iconUrl} />
                  <AvatarFallback>{passiveTalent.characterId}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                <div className="space-y-2">
                  <div className="text-lg">{passiveTalent.title}</div>
                  <div>{parse(passiveTalent.description)}</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionWrapper>
  );
};

export default PassiveTalents;
